import React, { createContext, Dispatch, useReducer } from "react";
import { Board } from "./model/Board";
import {
  DropRingAction,
  dropRingActionReducer,
  DropRingActionType,
} from "./actions/DropRingAction";
import {
  PickRingAction,
  pickRingActionReducer,
  PickRingActionType,
} from "./actions/PickRingAction";
import {
  PlayerJoinAction,
  playerJoinActionReducer,
  PlayerJoinActionType,
} from "./actions/PlayerJoinAction";

type BoardAction = DropRingAction | PickRingAction | PlayerJoinAction;

interface BoardState {
  board: Board;
  dispatch: Dispatch<BoardAction>;
}

const boardReducer = (board: Board, action: BoardAction) => {
  switch (action.type) {
    case DropRingActionType:
      return dropRingActionReducer(board, action);

    case PickRingActionType:
      return pickRingActionReducer(board, action);

    case PlayerJoinActionType:
      return playerJoinActionReducer(board, action);

    default:
      return board;
  }
};

const emptyBoard: Board = {
  grid: {},
  players: [],
};

export const BoardContext = createContext<BoardState>({
  board: emptyBoard,
  dispatch: () => null,
});

export const BoardProvider: React.FunctionComponent = ({ children }) => {
  const [board, dispatch] = useReducer(boardReducer, emptyBoard);

  return (
    <BoardContext.Provider value={{ board, dispatch }}>
      {children}
    </BoardContext.Provider>
  );
};
