import { Ring } from "../../ring/model/Ring";
import { RingSize } from "../../ring/model/RingSize";

export type CellKey = RingSize.SMALL | RingSize.MEDIUM | RingSize.LARGE;

export type Cell = {
  [key in CellKey]?: Ring;
};
