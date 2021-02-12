import { Dispatch } from "react";
import { Player } from "../player/model/Player";
import { GameState } from "../GameContext";
import { Ring } from "../ring/model/Ring";

export const PickRingActionCode = "PickRing";

export type PickRingActionType = {
  code: typeof PickRingActionCode;
  player: Player;
  pickedRing: Ring;
};

export const pickRingReducer = (
  state: GameState,
  { player, pickedRing }: PickRingActionType
) => {
  // TODO: mutate board
  return state;
};

export const pickRingAction = (player: Player, pickedRing: Ring) => async (
  dispatch: Dispatch<PickRingActionType>
) => {
  dispatch({
    code: PickRingActionCode,
    player,
    pickedRing,
  });
};
