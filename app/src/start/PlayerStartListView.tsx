import "./PlayerStartListView.scss";
import React from "react";
import { PlayerStart } from "./model/PlayerStart";
import { PlayerStartView } from "./PlayerStartView";

type Props = {
  players: PlayerStart[];
  onChange: (index: number, player: PlayerStart) => void;
};

export const PlayerStartListView = ({ players, onChange }: Props) => {
  return (
    <div className="PlayerStartList">
      {players.map((player, index) => (
        <PlayerStartView
          key={index}
          player={player}
          onChange={(changedPlayer) => onChange(index, changedPlayer)}
        />
      ))}
    </div>
  );
};
