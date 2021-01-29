import { Player } from "../../player/model/Player";
import { Board } from "../model/Board";
import { Ring } from "../../ring/model/Ring";

export const PickRingActionType = "PickRing";

export type PickRingAction = {
  type: typeof PickRingActionType;
  player: Player;
  pickedRing: Ring;
};

export const pickRingActionReducer = (
  board: Board,
  { player, pickedRing }: PickRingAction
) => {
  // TODO: mutate board
  return board;
};

export const createPickRingAction = (
  player: Player,
  pickedRing: Ring
): PickRingAction => {
  return {
    type: PickRingActionType,
    player,
    pickedRing,
  };
};
