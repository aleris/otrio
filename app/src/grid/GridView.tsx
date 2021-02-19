import React from "react";
import { Grid } from "./model/Grid";
import { CellView } from "./CellView";

type Props = {
  grid: Grid;
};

export const GridView = ({ grid }: Props) => {
  return (
    <div>
      {Array.from({ length: 3 }).map((_, rowIndex) =>
        Array.from({ length: 3 }).map((_, colIndex) => (
          <CellView
            key={`${rowIndex}${colIndex}`}
            cell={grid[`${rowIndex}${colIndex}`]}
          />
        ))
      )}
    </div>
  );
};
