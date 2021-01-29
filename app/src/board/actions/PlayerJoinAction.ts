import { Player } from "../../player/model/Player";
import { Board } from "../model/Board";

export const PlayerJoinActionType = "PlayerJoin";

export type PlayerJoinAction = {
  type: typeof PlayerJoinActionType;
  player: Player;
};

export const playerJoinActionReducer = (
  board: Board,
  { player }: PlayerJoinAction
) => {
  return { ...board, players: [...board.players, player] };
};

export const createPlayerJoinAction = (player: Player): PlayerJoinAction => {
  return {
    type: PlayerJoinActionType,
    player,
  };
};
