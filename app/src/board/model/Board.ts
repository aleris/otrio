import { Grid } from "../../grid/model/Grid";
import { Player } from "../../player/model/Player";
import { RingColor } from "../../ring/model/RingColor";

export type Board = {
  grid: Grid;
  players: {
    [key in
      | RingColor.BLUE
      | RingColor.GREEN
      | RingColor.PURPLE
      | RingColor.RED]?: Player;
  };
};
