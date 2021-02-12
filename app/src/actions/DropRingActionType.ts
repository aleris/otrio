import { Dispatch } from "react";
import { Player } from "../player/model/Player";
import { GameState } from "../GameContext";
import { Ring } from "../ring/model/Ring";

export const DropRingActionCode = "DropRing";

export type DropRingActionType = {
  code: typeof DropRingActionCode;
  player: Player;
  droppedRing: Ring;
  rowIndex: number;
  colIndex: number;
};

export const dropRingReducer = (
  state: GameState,
  { player, droppedRing, rowIndex, colIndex }: DropRingActionType
): GameState => {
  // TODO: mutate board
  return state;
};

export const dropRingAction = (
  player: Player,
  droppedRing: Ring,
  rowIndex: number,
  colIndex: number
) => async (dispatch: Dispatch<DropRingActionType>) => {
  dispatch({
    code: DropRingActionCode,
    player,
    droppedRing,
    rowIndex,
    colIndex,
  });
};
