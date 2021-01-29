import "./RingView.scss";
import React from "react";
import { RingSize } from "./model/RingSize";
import { RingColor } from "./model/RingColor";

type Props = {
  size: RingSize;
  color: RingColor;
};

export const RingView = ({ size, color }: Props) => {
  return (
    <div className="ring">
      <svg viewBox="0 0 500 500" width="500px" height="500px">
        <path
          d="M 350.604 214.87 m -250 0 a 250 250 0 1 0 500 0 a 250 250 0 1 0 -500 0 Z M 350.604 214.87 m -150 0 a 150 150 0 0 1 300 0 a 150 150 0 0 1 -300 0 Z"
          transform="matrix(1, 0.000037, -0.000037, 1, -100.595773, 35.117287)"
        ></path>
      </svg>
    </div>
  );
};
