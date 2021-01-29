import { Grid } from "../../grid/model/Grid";
import { Player } from "../../player/model/Player";

export interface Board {
  grid: Grid;
  players: Player[];
}
