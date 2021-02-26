import { RingColor } from "../../ring/model/RingColor";
import { Cell } from "../../grid/model/Cell";

export interface Player {
  id: string;
  name: string;
  color: RingColor;
  cells: Array<Cell>;
  isWinner: boolean;
}
