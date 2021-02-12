import "./BoardTableView.scss";
import React, { useContext } from "react";
import { BoardView } from "./BoardView";
import { GameContext } from "../GameContext";
import { RingColor } from "../ring/model/RingColor";
import { RingSize } from "../ring/model/RingSize";
import { playerJoinAction } from "../actions/PlayerJoinAction";

export const BoardTableView = () => {
  const { state, dispatch } = useContext(GameContext);

  const onPlayerJoinClick = (color: RingColor) => {
    dispatch(
      playerJoinAction({
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
        board={state.board}
        onPlayerJoinClick={onPlayerJoinClick}
        debugView={true}
      />
    </div>
  );
};
