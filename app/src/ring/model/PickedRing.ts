import { Player } from "../../player/model/Player";
import { Ring } from "./Ring";

export interface PickedRing {
  player: Player;
  cellIndex: number;
  ring: Ring;
}
