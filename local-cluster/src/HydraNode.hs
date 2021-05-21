{-# LANGUAGE NumericUnderscores #-}
{-# LANGUAGE TypeApplications #-}

module HydraNode where

import Cardano.Prelude
import Control.Concurrent.Async (
  forConcurrently_,
 )
import qualified Data.ByteString.Lazy as BSL
import Data.Text as Text
import qualified Data.Text.Encoding as Text
import Network.WebSockets (Connection, DataMessage (Binary, Text), receiveDataMessage, runClient, sendClose, sendTextData)
import Safe (readEitherSafe)
import System.Process (
  CreateProcess (..),
  proc,
  withCreateProcess,
 )
import System.Timeout (timeout)

data HydraNode = HydraNode
  { hydraNodeId :: Int
  , connection :: Connection
  }

-- | Deliberately distinct client request type to not take shortcuts.
data Request
  = Init [Int]
  | Commit
  | NewTx Int
  deriving (Eq, Show, Read)

-- | Deliberately distinct client response type to not take shortcuts.
data Response
  = ReadyToCommit
  | HeadIsOpen
  | TxReceived Int
  deriving (Eq, Show, Read)

sendRequest :: HydraNode -> Request -> IO ()
sendRequest HydraNode{hydraNodeId, connection} request = do
  putText ("Tester sending to " <> show hydraNodeId <> ": " <> show request)
  sendTextData connection $ show @_ @Text request

data WaitForResponseTimeout = WaitForResponseTimeout Int Response deriving (Show)
instance Exception WaitForResponseTimeout

wait3sForResponse :: [HydraNode] -> Response -> IO ()
wait3sForResponse nodes expected = do
  forConcurrently_ nodes $ \HydraNode{hydraNodeId, connection} -> do
    -- The chain is slow...
    result <- timeout 3_000_000 $ tryNext connection
    maybe (throwIO $ WaitForResponseTimeout hydraNodeId expected) pure result
 where
  tryNext c = do
    msg <-
      receiveDataMessage c >>= \case
        Text b _mt -> pure $ Text.decodeUtf8 $ BSL.toStrict b
        Binary b -> pure $ Text.decodeUtf8 $ BSL.toStrict b
    case readEitherSafe $ Text.unpack msg of
      Right r
        | r == expected -> pure ()
      _ -> tryNext c

withHydraNode :: Int -> (HydraNode -> IO ()) -> IO ()
withHydraNode hydraNodeId action = do
  withCreateProcess (hydraNodeProcess hydraNodeId) $
    \_stdin _stdout _stderr _ph -> do
      -- Create websocket connection to API
      runClient "127.0.0.1" (4000 + hydraNodeId) "/" $ \con -> do
        action $ HydraNode hydraNodeId con
        sendClose con ("Bye" :: Text)

data CannotStartHydraNode = CannotStartHydraNode Int deriving (Show)
instance Exception CannotStartHydraNode

hydraNodeProcess :: Int -> CreateProcess
hydraNodeProcess nodeId = proc "hydra-node" [show nodeId]

withMockChain :: IO () -> IO ()
withMockChain action = do
  withCreateProcess (proc "mock-chain" []) $
    \_in _out _err _handle -> do
      putText "Mock chain started"
      action
