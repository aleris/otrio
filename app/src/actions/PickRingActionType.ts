import { Dispatch } from "react";
import { GameState } from "../GameContext";
import { Player } from "../player/model/Player";
import { PickedRing } from "../ring/model/PickedRing";
import { Ring } from "../ring/model/Ring";
import { Board } from "../board/model/Board";

export const PickRingActionCode = "PickRing";

export type PickRingActionType = {
  code: typeof PickRingActionCode;
  pickedRing: PickedRing;
};

export const pickRingReducer = (
  state: GameState,
  { pickedRing }: PickRingActionType
): GameState => {
  let {
    updatedBoard: updatedBoardForPickedRing,
    updatedRing: updatedPickedRing,
  } = updateBoard(state.board, pickedRing, true);
  const oldPickedRing = state.pickedRing;
  if (oldPickedRing !== undefined && oldPickedRing !== pickedRing) {
    const { updatedBoard: updatedBoardForOldPickedRing } = updateBoard(
      updatedBoardForPickedRing,
      oldPickedRing,
      false
    );
    updatedBoardForPickedRing = updatedBoardForOldPickedRing;
  }

  return {
    ...state,
    board: updatedBoardForPickedRing,
    pickedRing: {
      ...pickedRing,
      ring: updatedPickedRing,
    },
  };
};

function updateBoard(
  board: Board,
  pickedRing: PickedRing,
  isPicked: boolean
): { updatedBoard: Board; updatedRing: Ring } {
  const updatedRing: Ring = {
    ...pickedRing.ring,
    isPicked,
  };
  const player = board.players[pickedRing.ring.color];
  if (player === undefined) {
    return { updatedBoard: board, updatedRing };
  }
  const oldCells = player?.cells;
  const cell = oldCells[pickedRing.cellIndex];
  const updatedCell = {
    ...cell,
    [pickedRing.ring.size]: updatedRing,
  };
  const cells = [
    ...oldCells.slice(0, pickedRing.cellIndex),
    updatedCell,
    ...oldCells.slice(pickedRing.cellIndex + 1, oldCells.length),
  ];
  const updatedPlayer: Player = {
    ...player,
    cells,
  };
  const updatedBoard = {
    ...board,
    players: {
      ...board.players,
      [pickedRing.ring.color]: updatedPlayer,
    },
  };
  return { updatedBoard, updatedRing };
}

export const pickRingAction = (pickedRing: PickedRing) => async (
  dispatch: Dispatch<PickRingActionType>,
  state: GameState
) => {
  dispatch({
    code: PickRingActionCode,
    pickedRing,
  });
};
