import React from "react";
import { Cell } from "./model/Cell";

type Props = {
  cell: Cell | undefined;
};

export const CellView = ({ cell }: Props) => {
  return (
    <div>
      {cell
        ? Array.from({ length: 3 }).map((_, index) =>
            cell[index] ? <span>{index}</span> : null
          )
        : null}
    </div>
  );
};
