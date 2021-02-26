import "./PlayerView.scss";
import React from "react";
import { StackedRingsView } from "../grid/StackedRingsView";
import { Player } from "./model/Player";

type Props = {
  player: Player;
};

export const PlayerView = ({ player }: Props) => {
  return (
    <div className="Player">
      {player.cells.map((cell, index) => (
        <StackedRingsView key={index} cell={cell} />
      ))}
    </div>
  );
};
