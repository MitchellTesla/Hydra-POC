module Hydra.TUI where

import Hydra.Prelude hiding (State)

import Brick (App (..), AttrMap, BrickEvent, EventM, Next, Widget, defaultMain, halt, showFirstCursor, str, vBox)
import Brick.AttrMap (attrMap)
import Data.Version (showVersion)
import Graphics.Vty.Attributes (defAttr)
import Paths_hydra_tui (version)

run :: IO State
run = defaultMain app initialState
 where
  initialState = State

  app =
    App
      { appDraw = draw
      , appChooseCursor = showFirstCursor
      , appHandleEvent = handleEvent
      , appStartEvent = pure
      , appAttrMap = style
      }

data State = State

type ResourceName = ()

draw :: State -> [Widget ResourceName]
draw _ =
  pure $
    vBox
      [ str "Hydra TUI"
      , str $ showVersion version
      ]

handleEvent :: State -> BrickEvent n e -> EventM n (Next State)
handleEvent s _ = halt s

style :: State -> AttrMap
style _ = attrMap defAttr []