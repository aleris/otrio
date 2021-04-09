import "./BoardTableView.scss";
import React, { useContext } from "react";
import { PickedRing } from "../ring/model/PickedRing";
import { BoardView } from "./BoardView";
import { GameContext } from "../GameContext";
import { pickRingAction } from "../actions/PickRingActionType";

export const BoardTableView = () => {
  const { state, dispatch } = useContext(GameContext);

  const handleOnPlayerRingClick = (pickedRing: PickedRing) => {
    dispatch(pickRingAction(pickedRing));
  };

  return (
    <div className="BoardTable">
      <BoardView
        board={state.board}
        onPlayerRingClick={handleOnPlayerRingClick}
        debugView={true}
      />
    </div>
  );
};
