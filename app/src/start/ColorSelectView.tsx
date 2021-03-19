import "./ColorSelectView.scss";
import classNames from "classnames";
import React from "react";
import { RingColor } from "../ring/model/RingColor";

type Props = {
  selectedColor: RingColor;
  onColorClick: (color: RingColor) => void;
};

export const ColorSelectView = ({ selectedColor, onColorClick }: Props) => {
  const allColors = [
    RingColor.COLOR_1,
    RingColor.COLOR_2,
    RingColor.COLOR_3,
    RingColor.COLOR_4,
  ];
  return (
    <div className="ColorSelect">
      {allColors.map((color, index) => {
        let colorClassName = classNames("ColorSelect--Color", {
          Selected: color === selectedColor,
          [`ColorSelect--Color${color + 1}`]: true,
        });
        return (
          <div key={index} className={colorClassName}>
            <button type="button" onClick={() => onColorClick(color)}>
              {color === selectedColor ? "✓" : null}
            </button>
          </div>
        );
      })}
    </div>
  );
};
