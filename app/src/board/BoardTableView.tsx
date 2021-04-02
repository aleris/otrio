import "./BoardTableView.scss";
import React, { useContext } from "react";
import { BoardView } from "./BoardView";
import { GameContext } from "../GameContext";
import { Ring } from "../ring/model/Ring";
import { pickRingAction } from "../actions/PickRingActionType";

export const BoardTableView = () => {
  const { state, dispatch } = useContext(GameContext);

  const handleOnRingClick = (ring: Ring) => {
    console.log("ring in boardTableView", ring);
    dispatch(pickRingAction(ring));
  };

  return (
    <div className="BoardTable">
      <BoardView
        board={state.board}
        onRingClick={handleOnRingClick}
        debugView={true}
      />
    </div>
  );
};
