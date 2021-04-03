import { Dispatch } from "react";
import { GameState } from "../GameContext";
import { Player } from "../player/model/Player";
import { PickedRing } from "../ring/model/PickedRing";
import { Ring } from "../ring/model/Ring";

export const PickRingActionCode = "PickRing";

export type PickRingActionType = {
  code: typeof PickRingActionCode;
  pickedRing: PickedRing;
};

export const pickRingReducer = (
  state: GameState,
  { pickedRing }: PickRingActionType
): GameState => {
  const updatedRing: Ring = {
    ...pickedRing.ring,
    isPicked: true,
  };
  const cell = pickedRing.player.cells[pickedRing.cellIndex];
  const updatedCell = {
    ...cell,
    [pickedRing.ring.size]: updatedRing,
  };
  const updatedPlayer: Player = {
    ...pickedRing.player,
    cells: [
      ...pickedRing.player.cells.slice(0, pickedRing.cellIndex),
      updatedCell,
      ...pickedRing.player.cells.slice(
        pickedRing.cellIndex + 1,
        pickedRing.player.cells.length
      ),
    ],
  };
  return {
    ...state,
    board: {
      ...state.board,
      players: {
        ...state.board.players,
        [pickedRing.ring.color]: updatedPlayer,
      },
    },
    pickedRing: {
      ...pickedRing,
      ring: updatedRing,
    },
  };
};

export const pickRingAction = (pickedRing: PickedRing) => async (
  dispatch: Dispatch<PickRingActionType>,
  state: GameState
) => {
  dispatch({
    code: PickRingActionCode,
    pickedRing,
  });
};
