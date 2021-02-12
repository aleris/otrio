import { Cell } from "./Cell";

export type Grid = {
  [key: string /*`${rowIndex}${colIndex}`*/]: Cell;
};
