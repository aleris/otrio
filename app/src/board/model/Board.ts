import { Grid } from "../../grid/model/Grid";
import { Player } from "../../player/model/Player";

export type Board = {
  grid: Grid;
  players: {
    [key: number /*RingColor*/]: Player;
  };
};
