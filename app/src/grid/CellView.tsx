import "./CellView.scss";
import React from "react";
import { Cell } from "./model/Cell";
import { StackedRingsView } from "./StackedRingsView";
import { Ring } from "../ring/model/Ring";

type Props = {
  cell: Cell | undefined;
  onRingClick: (ring: Ring) => void;
};

export const CellView = ({ cell, onRingClick }: Props) => {
  return (
    <div className="Cell">
      <StackedRingsView cell={cell} onClick={onRingClick} />
    </div>
  );
};
