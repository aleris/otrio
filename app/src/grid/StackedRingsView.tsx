import "./StackedRingsView.scss";
import React from "react";
import { RingSize } from "../ring/model/RingSize";
import { RingView } from "../ring/RingView";
import { Cell } from "./model/Cell";

type Props = {
  cell: Cell | undefined;
};

export const StackedRingsView = ({ cell }: Props) => {
  const ringSizeList = [RingSize.SMALL, RingSize.MEDIUM, RingSize.LARGE];
  const rings = ringSizeList.map((size) => cell?.[size]);
  return (
    <div className="StackedRings">
      {rings.map((ring) => (
        <div className="StackedRings--Ring">
          {ring ? <RingView color={ring.color} size={ring.size} /> : null}
        </div>
      ))}
    </div>
  );
};
