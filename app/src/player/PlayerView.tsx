import "./PlayerView.scss";
import classNames from "classnames";
import React from "react";
import { StackedRingsView } from "../grid/StackedRingsView";
import { Player } from "./model/Player";
import { Ring } from "../ring/model/Ring";

type Props = {
  player: Player;
  layout: "Horizontal" | "Vertical";
  onRingClick: (ring: Ring) => void;
};

export const PlayerView = ({ player, layout, onRingClick }: Props) => {
  return (
    <div className={classNames("Player", `Player--${layout}`)}>
      {player.cells.map((cell, index) => (
        <div key={index} className="Player--Cell">
          <StackedRingsView cell={cell} onClick={onRingClick} />
        </div>
      ))}
    </div>
  );
};
