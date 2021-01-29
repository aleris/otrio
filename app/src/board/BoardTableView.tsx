import './BoardTableView.scss'
import React from "react";
import {BoardView} from "./BoardView";

export const BoardTableView = () => {
    return (
        <div className="BoardTable">
            <BoardView debugView={true} />
        </div>
    )
}
