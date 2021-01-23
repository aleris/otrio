import './BoardTableView.scss'
import React from "react";
import {BoardView} from "./BoardView";

type Props = {
    debugView?: boolean
}

export const BoardTableView = ({debugView = false}: Props) => {
    return (
        <div className="BoardTable">
            <BoardView debugView={debugView} />
        </div>
    )
}
