import React from "react";
import { GridView } from "./GridView";
import { Grid } from "./model/Grid";
import { RingColor } from "../ring/model/RingColor";
import { RingSize } from "../ring/model/RingSize";

const grid: Grid = {
  "01": {
    [RingSize.SMALL]: {
      size: RingSize.SMALL,
      color: RingColor.COLOR_4,
      isPicked: false,
    },
  },
  "11": {
    [RingSize.MEDIUM]: {
      size: RingSize.MEDIUM,
      color: RingColor.COLOR_2,
      isPicked: false,
    },
    [RingSize.LARGE]: {
      size: RingSize.LARGE,
      color: RingColor.COLOR_3,
      isPicked: false,
    },
  },
};

export const GridTestPage = () => {
  return <GridView grid={grid} />;
};
