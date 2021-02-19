import classNames from "classnames";
import React from "react";
import { RingColor } from "./model/RingColor";
import { RingSize } from "./model/RingSize";
import "./RingView.scss";

type Props = {
  size: RingSize;
  color: RingColor;
};

export const RingView = ({ size, color }: Props) => {
  const className = classNames("Ring", {
    "Ring--Color1": color === RingColor.COLOR_1,
    "Ring--Color2": color === RingColor.COLOR_2,
    "Ring--Color3": color === RingColor.COLOR_3,
    "Ring--Color4": color === RingColor.COLOR_4,

    "Ring--SizeSmall": size === RingSize.SMALL,
    "Ring--SizeMedium": size === RingSize.MEDIUM,
    "Ring--SizeLarge": size === RingSize.LARGE,
  });
  return (
    <div className={className}>
      <svg viewBox="0 0 500 500" width="500px" height="500px">
        <path
          d="M 350.604 214.87 m -250 0 a 250 250 0 1 0 500 0 a 250 250 0 1 0 -500 0 Z M 350.604 214.87 m -150 0 a 150 150 0 0 1 300 0 a 150 150 0 0 1 -300 0 Z"
          transform="matrix(1, 0.000037, -0.000037, 1, -100.595773, 35.117287)"
        ></path>
      </svg>
    </div>
  );
};
