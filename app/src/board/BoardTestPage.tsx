import React from "react";
import { BoardTableView } from "./BoardTableView";
import { GameProvider } from "../GameContext";

export const BoardTestPage = () => {
  return (
    <GameProvider>
      <BoardTableView />
    </GameProvider>
  );
};
