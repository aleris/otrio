import classNames from "classnames";
import React, { ReactNode } from "react";
import { RingColor } from "./model/RingColor";
import { RingSize } from "./model/RingSize";
import "./RingView.scss";
import { Ring } from "./model/Ring";

type Props = {
  ring: Ring;
  onClick: () => void;
};

const getRingSvgLarge = (onClick: () => void) => (
  <svg viewBox="0 0 500 500">
    <path
      onClick={onClick}
      d="M 445.967 425.918 m -250 0 a 250 250 0 1 0 500 0 a 250 250 0 1 0 -500 0 Z M 445.967 425.918 m -180 0 a 180 180 0 0 1 360 0 a 180 180 0 0 1 -360 0 Z"
      transform="matrix(-0.326006, 0.945368, -0.945368, -0.326006, 798.037436, -32.750578)"
    ></path>
  </svg>
);

const getRingSvgMedium = (onClick: () => void) => (
  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <path
      onClick={onClick}
      d="M 445.967 425.918 m -178 0 a 178 178 0 1 0 356 0 a 178 178 0 1 0 -356 0 Z M 445.967 425.918 m -108 0 a 108 108 0 0 1 216 0 a 108 108 0 0 1 -216 0 Z"
      transform="matrix(-0.326006, 0.945368, -0.945368, -0.326006, 798.037436, -32.750578)"
    ></path>
  </svg>
);

const getRingSvgSmall = (onClick: () => void) => (
  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <path
      onClick={onClick}
      d="M 445.967 425.918 m -106 0 a 106 106 0 1 0 212 0 a 106 106 0 1 0 -212 0 Z M 445.967 425.918 m -36 0 a 36 36 0 0 1 72 0 a 36 36 0 0 1 -72 0 Z"
      transform="matrix(-0.326006, 0.945368, -0.945368, -0.326006, 798.037436, -32.750578)"
    ></path>
  </svg>
);

function getRingSvgBySize(size: RingSize, onClick: () => void): ReactNode {
  switch (size) {
    case RingSize.SMALL:
      return getRingSvgSmall(onClick);
    case RingSize.MEDIUM:
      return getRingSvgMedium(onClick);
    case RingSize.LARGE:
      return getRingSvgLarge(onClick);
    default:
      throw new Error(`RingSize ${size} does not exists`);
  }
}

export const RingView = ({ ring, onClick }: Props) => {
  const className = classNames("Ring", {
    "Ring--Color1": ring.color === RingColor.COLOR_1,
    "Ring--Color2": ring.color === RingColor.COLOR_2,
    "Ring--Color3": ring.color === RingColor.COLOR_3,
    "Ring--Color4": ring.color === RingColor.COLOR_4,
    "Ring--Picked": ring.isPicked,
  });
  return (
    <div className={className}>{getRingSvgBySize(ring.size, onClick)}</div>
  );
};
