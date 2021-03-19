import "./PlayerStartView.scss";
import React from "react";
import { RingColor } from "../ring/model/RingColor";
import { PlayerStart } from "./model/PlayerStart";
import { ColorSelectView } from "./ColorSelectView";

type Props = {
  player: PlayerStart;
  onChange: (player: PlayerStart) => void;
};

export const PlayerStartView = ({ player, onChange }: Props) => {
  const handleNameOnChange = (name: string) => {
    onChange({ ...player, name });
  };
  const handleColorOnChange = (color: RingColor) => {
    onChange({ ...player, color });
  };
  return (
    <div className="PlayerStart">
      <input
        type="text"
        value={player.name}
        onChange={(event) => handleNameOnChange(event.target.value)}
      />
      <ColorSelectView
        selectedColor={player.color}
        onColorClick={(color) => handleColorOnChange(color)}
      />
    </div>
  );
};
