import { Ring } from "../../ring/model/Ring";
import { RingColor } from "../../ring/model/RingColor";

export interface Player {
  id: string;
  name: string;
  color: RingColor;
  rings: Array<Ring>;
  isWinner: boolean;
}
