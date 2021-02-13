import { Ring } from "../../ring/model/Ring";
import { RingSize } from "../../ring/model/RingSize";

export type Cell = {
  [key in RingSize.SMALL | RingSize.MEDIUM | RingSize.LARGE]?: Ring;
};
