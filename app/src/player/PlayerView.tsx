import "./PlayerView.scss";
import classNames from "classnames";
import React from "react";
import { StackedRingsView } from "../grid/StackedRingsView";
import { PickedRing } from "../ring/model/PickedRing";
import { Player } from "./model/Player";

type Props = {
  player: Player;
  layout: "Horizontal" | "Vertical";
  onRingClick: (pickedRing: PickedRing) => void;
};

export const PlayerView = ({ player, layout, onRingClick }: Props) => {
  return (
    <div className={classNames("Player", `Player--${layout}`)}>
      {player.cells.map((cell, index) => (
        <div key={index} className="Player--Cell">
          <StackedRingsView
            cell={cell}
            onRingClick={(ring) =>
              onRingClick({ player: player, cellIndex: index, ring })
            }
          />
        </div>
      ))}
    </div>
  );
};
