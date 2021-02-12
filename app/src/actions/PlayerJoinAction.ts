import { Dispatch } from "react";
import { Player } from "../player/model/Player";
import { GameState } from "../GameContext";

export const PlayerJoinActionCode = "PlayerJoin";

export type PlayerJoinActionType = {
  code: typeof PlayerJoinActionCode;
  player: Player;
};

export const playerJoinReducer = (
  state: GameState,
  { player }: PlayerJoinActionType
): GameState => {
  console.log("playerJoin reducer", player);
  return {
    ...state,
    board: {
      ...state.board,
      players: {
        ...state.board.players,
        [player.color]: player
      }
    },
  };
};

async function testAsync(): Promise<void> {
  return new Promise((resolve) => {
    console.log("waiting for 1 second");
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

export const playerJoinAction = (player: Player) => async (
  dispatch: Dispatch<PlayerJoinActionType>
) => {
  console.log("playerJoinAction initiate", player);
  await testAsync();
  console.log("playerJoinAction actual dispatch", player);
  dispatch({
    code: PlayerJoinActionCode,
    player,
  });
};
