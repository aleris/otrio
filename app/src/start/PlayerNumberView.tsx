import "./PlayerNumberView.scss";
import classNames from "classnames";
import React from "react";

type Props = {
  number: number;
  selected: boolean;
  onClick: () => void;
};

export const PlayerNumberView = ({ number, selected, onClick }: Props) => {
  return (
    <div className={classNames("PlayerNumber", { Selected: selected })}>
      <button type="button" onClick={onClick}>
        {number}
      </button>
    </div>
  );
};
