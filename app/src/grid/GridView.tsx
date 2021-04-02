import "./GridView.scss";
import React from "react";
import { Grid, GridCoordinate } from "./model/Grid";
import { CellView } from "./CellView";

type Props = {
  grid: Grid;
};

export const GridView = ({ grid }: Props) => {
  return (
    <div className="Grid">
      {Array.from({ length: 3 }).map((_, rowIndex) =>
        Array.from({ length: 3 }).map((_, colIndex) => {
          const cellKey = `${rowIndex}${colIndex}` as GridCoordinate;
          return (
            <div key={cellKey} className="Grid--Cell">
              <CellView cell={grid[cellKey]} onRingClick={() => {}} />
            </div>
          );
        })
      )}
    </div>
  );
};
