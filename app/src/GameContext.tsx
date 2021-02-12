import React, { createContext, Dispatch, useReducer } from "react";
import { Board } from "./board/model/Board";
import {
  DropRingActionType,
  dropRingReducer,
  DropRingActionCode,
} from "./actions/DropRingActionType";
import {
  PickRingActionType,
  pickRingReducer,
  PickRingActionCode,
} from "./actions/PickRingActionType";
import {
  PlayerJoinActionType,
  playerJoinReducer,
  PlayerJoinActionCode,
} from "./actions/PlayerJoinAction";

export type GameActionType =
  | DropRingActionType
  | PickRingActionType
  | PlayerJoinActionType;

export type GameState = {
  board: Board;
};

type GameStateWithDispatch = {
  state: GameState;
  dispatch: (
    dispatchAction: (dispatch: Dispatch<GameActionType>) => Promise<void>
  ) => void;
};

const gameReducer = (state: GameState, action: GameActionType): GameState => {
  switch (action.code) {
    case DropRingActionCode:
      return dropRingReducer(state, action);

    case PickRingActionCode:
      return pickRingReducer(state, action);

    case PlayerJoinActionCode:
      return playerJoinReducer(state, action);

    default:
      return state;
  }
};

const emptyBoard: Board = {
  grid: {},
  players: [],
};

const initialState = {
  board: emptyBoard,
};

export const GameContext = createContext<GameStateWithDispatch>({
  state: initialState,
  dispatch: () => () => {},
});

export const GameProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider
      value={{
        state,
        dispatch: (
          dispatchAction: (dispatch: Dispatch<GameActionType>) => void
        ) => dispatchAction(dispatch),
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
