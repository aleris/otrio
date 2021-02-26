import React, { createContext, Dispatch, useReducer } from "react";
import {
  DropRingActionCode,
  DropRingActionType,
  dropRingReducer,
} from "./actions/DropRingActionType";
import {
  PickRingActionCode,
  PickRingActionType,
  pickRingReducer,
} from "./actions/PickRingActionType";
import {
  PlayerJoinActionCode,
  PlayerJoinActionType,
  playerJoinReducer,
} from "./actions/PlayerJoinAction";
import { Board } from "./board/model/Board";
import { RingColor } from "./ring/model/RingColor";
import { RingSize } from "./ring/model/RingSize";

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
  grid: {
    "01": {
      [RingSize.MEDIUM]: { size: RingSize.MEDIUM, color: RingColor.COLOR_4 },
      [RingSize.LARGE]: { size: RingSize.LARGE, color: RingColor.COLOR_3 },
      [RingSize.SMALL]: { size: RingSize.SMALL, color: RingColor.COLOR_1 },
    },
    "12": {
      [RingSize.SMALL]: { size: RingSize.SMALL, color: RingColor.COLOR_2 },
    },
  },
  players: {
    [RingColor.COLOR_1]: {
      id: "1",
      name: "player1",
      color: RingColor.COLOR_1,
      cells: [
        {
          [RingSize.SMALL]: { size: RingSize.SMALL, color: RingColor.COLOR_1 },
          [RingSize.MEDIUM]: {
            size: RingSize.MEDIUM,
            color: RingColor.COLOR_1,
          },
          [RingSize.LARGE]: { size: RingSize.LARGE, color: RingColor.COLOR_1 },
        },
      ],
      isWinner: false,
    },
  },
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
