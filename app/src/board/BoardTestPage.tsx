import React from "react";
import { BoardTableView } from "./BoardTableView";
import { BoardProvider } from "./BoardContext";

export const BoardTestPage = () => {
  return (
    <BoardProvider>
      <BoardTableView />
    </BoardProvider>
  );
};
