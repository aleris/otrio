import './BoardView.scss';
import React from "react";
import classNames from "classnames";

type Props = {
    debugView?: boolean
}

export const BoardView = ({debugView = false}: Props) => {
    const cellClassName = classNames('board--cell', {
        debugView
    })
    return (
        <div className="boardBackground">
            <div className="board">
                {
                    Array.from({ length: 25} ).map((_, index) => (
                        <div key={index} className={cellClassName}>
                            { debugView ? <span>{index + 1}</span> : null}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
