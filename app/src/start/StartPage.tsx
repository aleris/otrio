import "./StartPage.scss";
import React, { useState } from "react";
import { RingColor } from "../ring/model/RingColor";
import { PlayerStart } from "./model/PlayerStart";
import { PlayerNumberListView } from "./PlayerNumberListView";
import { PlayerStartListView } from "./PlayerStartListView";

const initialPlayers = [
  {
    name: "Player 1",
    color: RingColor.COLOR_1,
  },
  {
    name: "Player 2",
    color: RingColor.COLOR_2,
  },
  {
    name: "Player 3",
    color: RingColor.COLOR_3,
  },
  {
    name: "Player 4",
    color: RingColor.COLOR_4,
  },
];

function withMutatedAt<T>(list: T[], index: number, value: T) {
  return [...list.slice(0, index), { ...value }, ...list.slice(index + 1)];
}

export const StartPage = () => {
  const [players, setPlayers] = useState(initialPlayers);
  const [currentPlayers, setCurrentPlayers] = useState(players.slice(0, 2));
  const handleNumberOfPlayersOnChange = (n: number) => {
    const updatedPlayers = [
      ...currentPlayers,
      ...players.slice(currentPlayers.length),
    ];
    setPlayers(updatedPlayers);
    setCurrentPlayers(updatedPlayers.slice(0, n));
  };
  const handlePlayerOnChange = (index: number, changedPlayer: PlayerStart) => {
    const colorSwapPlayerIndex = players.findIndex(
      (p) => p.color === changedPlayer.color
    );
    if (colorSwapPlayerIndex === undefined) {
      return;
    }
    const colorSwapPlayerChanged = {
      ...players[colorSwapPlayerIndex],
      ...players[index],
    };
    let newList = players;
    newList = withMutatedAt(newList, index, changedPlayer);
    if (colorSwapPlayerIndex !== index) {
      newList = withMutatedAt(
        newList,
        colorSwapPlayerIndex,
        colorSwapPlayerChanged
      );
    }
    setPlayers(newList);
    setCurrentPlayers(newList.slice(0, currentPlayers.length));
  };
  return (
    <div className="StartPage">
      <PlayerNumberListView
        selectedNumberOfPlayers={currentPlayers.length}
        onChange={handleNumberOfPlayersOnChange}
      />
      <PlayerStartListView
        players={currentPlayers}
        onChange={handlePlayerOnChange}
      />
      <button type="button" className="StartPage--StartButton">
        ➜ Start
      </button>
    </div>
  );
};
