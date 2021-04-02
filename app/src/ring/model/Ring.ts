import { RingSize } from "./RingSize";
import { RingColor } from "./RingColor";

export interface Ring {
  size: RingSize;
  color: RingColor;
  isPicked: boolean;
}
