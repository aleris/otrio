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

export type GameAction = (
  dispatch: GameActionDispatch,
  state: GameState
) => void;

export type GameActionDispatch = Dispatch<GameAction | GameActionType>;

const dispatchWithGameAction = (
  dispatch: Dispatch<GameActionType>,
  state: GameState
) => async (action: GameAction | GameActionType) => {
  if (action instanceof Function) {
    console.log("action", action.name, "->");
    await action(dispatchWithGameAction(dispatch, state), state);
  } else {
    console.log("action", action.code, action);
    await dispatch(action);
  }
};

type GameStateWithDispatch = {
  dispatch: GameActionDispatch;
  state: GameState;
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
        dispatch: dispatchWithGameAction(dispatch, state),
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
