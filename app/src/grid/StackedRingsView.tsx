import "./StackedRingsView.scss";
import React from "react";
import { RingSize } from "../ring/model/RingSize";
import { RingView } from "../ring/RingView";
import { Cell } from "./model/Cell";
import { Ring } from "../ring/model/Ring";

type Props = {
  cell: Cell | undefined;
  onClick: (ring: Ring) => void;
};

export const StackedRingsView = ({ cell, onClick }: Props) => {
  const ringSizeList = [RingSize.SMALL, RingSize.MEDIUM, RingSize.LARGE];
  const rings = ringSizeList.map((size) => cell?.[size]);
  return (
    <div className="StackedRings">
      {rings.map((ring, index) => (
        <div key={index} className="StackedRings--Ring">
          {ring ? <RingView ring={ring} onClick={() => onClick(ring)} /> : null}
        </div>
      ))}
    </div>
  );
};
