import "./PlayerView.scss";
import classNames from "classnames";
import React from "react";
import { StackedRingsView } from "../grid/StackedRingsView";
import { Player } from "./model/Player";

type Props = {
  player: Player;
  layout: "Horizontal" | "Vertical";
};

export const PlayerView = ({ player, layout }: Props) => {
  return (
    <div className={classNames("Player", `Player--${layout}`)}>
      {player.cells.map((cell, index) => (
        <div key={index} className="Player--Cell">
          <StackedRingsView cell={cell} />
        </div>
      ))}
    </div>
  );
};
