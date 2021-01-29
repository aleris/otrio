import { Player } from "../../player/model/Player";
import { Board } from "../model/Board";
import { Ring } from "../../ring/model/Ring";

export const DropRingActionType = "DropRing";

export type DropRingAction = {
  type: typeof DropRingActionType;
  player: Player;
  droppedRing: Ring;
  rowIndex: number;
  colIndex: number;
};

export const dropRingActionReducer = (
  board: Board,
  { player, droppedRing, rowIndex, colIndex }: DropRingAction
) => {
  // TODO: mutate board
  return board;
};

export const createDropRingAction = (
  player: Player,
  droppedRing: Ring,
  rowIndex: number,
  colIndex: number
): DropRingAction => {
  return {
    type: DropRingActionType,
    player,
    droppedRing,
    rowIndex,
    colIndex,
  };
};
