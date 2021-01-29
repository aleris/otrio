import "./BoardTableView.scss";
import React, { useContext } from "react";
import { BoardView } from "./BoardView";
import { BoardContext } from "./BoardContext";
import { RingColor } from "../ring/model/RingColor";
import { RingSize } from "../ring/model/RingSize";
import { createPlayerJoinAction } from "./actions/PlayerJoinAction";

export const BoardTableView = () => {
  const { board, dispatch } = useContext(BoardContext);

  const onPlayerJoinClick = (color: RingColor) => {
    dispatch(
      createPlayerJoinAction({
        id: "",
        name: `Color ${color}`,
        color: color,
        rings: [{ color: RingColor.BLUE, size: RingSize.SMALL }],
        isWinner: false,
      })
    );
  };

  return (
    <div className="BoardTable">
      <BoardView
        board={board}
        onPlayerJoinClick={onPlayerJoinClick}
        debugView={true}
      />
    </div>
  );
};
