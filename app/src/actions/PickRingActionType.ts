import { Dispatch } from "react";
import { GameState } from "../GameContext";
import { Ring } from "../ring/model/Ring";

export const PickRingActionCode = "PickRing";

export type PickRingActionType = {
  code: typeof PickRingActionCode;
  pickedRing: Ring;
};

export const pickRingReducer = (
  state: GameState,
  { pickedRing }: PickRingActionType
): GameState => {
  console.log("pickRingReducer reducer", pickedRing);
  return {
    ...state,
    board: {
      ...state.board,
      players: {
        ...state.board.players,
        [pickedRing.color]: {
          ...state.board.players[pickedRing.color],
          isPicked: true,
        },
      },
    },
    pickedRing,
  };
};

export const pickRingAction = (pickedRing: Ring) => async (
  dispatch: Dispatch<PickRingActionType>,
  state: GameState
) => {
  console.log("pickRingAction reducer", pickedRing);
  dispatch({
    code: PickRingActionCode,
    pickedRing,
  });
};
