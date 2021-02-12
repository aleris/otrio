import React from "react";
import { GridView } from "./GridView";
import { Grid } from "./model/Grid";
import { RingColor } from "../ring/model/RingColor";
import { RingSize } from "../ring/model/RingSize";

const grid: Grid = {
  "01": {
    [RingSize.SMALL]: { size: RingSize.SMALL, color: RingColor.PURPLE },
  },
  "11": {
    [RingSize.MEDIUM]: { size: RingSize.MEDIUM, color: RingColor.BLUE },
    [RingSize.LARGE]: { size: RingSize.LARGE, color: RingColor.GREEN },
  },
};

export const GridTestPage = () => {
  return <GridView grid={grid} />;
};
