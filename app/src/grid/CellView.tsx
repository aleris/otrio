import "./CellView.scss";
import React from "react";
import { Cell } from "./model/Cell";
import { StackedRingsView } from "./StackedRingsView";

type Props = {
  cell: Cell | undefined;
};

export const CellView = ({ cell }: Props) => {
  return (
    <div className="Cell">
      <StackedRingsView cell={cell} />
    </div>
  );
};
