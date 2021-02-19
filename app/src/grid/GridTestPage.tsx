import React from "react";
import { GridView } from "./GridView";
import { Grid } from "./model/Grid";
import { RingColor } from "../ring/model/RingColor";
import { RingSize } from "../ring/model/RingSize";

const grid: Grid = {
  "01": {
    [RingSize.SMALL]: { size: RingSize.SMALL, color: RingColor.COLOR_4 },
  },
  "11": {
    [RingSize.MEDIUM]: { size: RingSize.MEDIUM, color: RingColor.COLOR_2 },
    [RingSize.LARGE]: { size: RingSize.LARGE, color: RingColor.COLOR_3 },
  },
};

export const GridTestPage = () => {
  return <GridView grid={grid} />;
};
