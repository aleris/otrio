import { Ring } from "../../ring/model/Ring";

export type Cell = {
  [key: number /*RingSize*/]: Ring;
};
