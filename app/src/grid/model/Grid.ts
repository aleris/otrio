import { Cell } from "./Cell";

type GridRowIndex = 0 | 1 | 2;
type GridColIndex = 0 | 1 | 2;
type GridCoordinate = `${GridRowIndex}${GridColIndex}`;

export type Grid = {
  [key in GridCoordinate]?: Cell;
};
