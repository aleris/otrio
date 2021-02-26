import { Grid } from "../../grid/model/Grid";
import { Player } from "../../player/model/Player";
import { RingColor } from "../../ring/model/RingColor";

export type Board = {
  grid: Grid;
  players: {
    [key in
      | RingColor.COLOR_1
      | RingColor.COLOR_2
      | RingColor.COLOR_3
      | RingColor.COLOR_4]?: Player;
  };
};
