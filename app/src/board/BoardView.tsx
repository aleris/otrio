import "./BoardView.scss";
import React from "react";
import classNames from "classnames";
import { Board } from "./model/Board";
import { BlockDebugView } from "./BlockDebugView";
import { RingColor } from "../ring/model/RingColor";

type Props = {
  board: Board;
  onPlayerJoinClick: (color: RingColor) => void;
  debugView?: boolean;
};

export const BoardView = ({
  board,
  onPlayerJoinClick,
  debugView = false,
}: Props) => {
  const className = classNames("Board", { debugView });
  const playerTop = board.players.find(
    (boardPlayer) => boardPlayer.color === RingColor.BLUE
  );

  return (
    <div className={className}>
      <div className="Board--Block--x1">
        <div className="Board--Block--x1">
          <BlockDebugView show={debugView} text="Top Left Corner" />
        </div>
        <div
          className="Board--Block--x3"
          onClick={() => onPlayerJoinClick(RingColor.BLUE)}
        >
          <BlockDebugView
            show={debugView}
            text={`Player Blue ${playerTop ? " JOINED" : ""}`}
          />
        </div>
        <div className="Board--Block--x1">
          <BlockDebugView show={debugView} text="Top Right Corner" />
        </div>
      </div>

      <div className="Board--Block--x3">
        <div className="Board--Block--x1">
          <BlockDebugView show={debugView} text="Player Left" />
        </div>
        <div className="Board--Block--x3 Board--Grid">
          {Array.from({ length: 3 }).map((_, rowIndex) =>
            Array.from({ length: 3 }).map((_, colIndex) => (
              <div key={3 * rowIndex + colIndex} className="Board--Grid--Cell">
                <BlockDebugView
                  show={debugView}
                  text={`${rowIndex} : ${colIndex}`}
                />
              </div>
            ))
          )}
        </div>
        <div className="Board--Block--x1">
          <BlockDebugView show={debugView} text="Player Right" />
        </div>
      </div>

      <div className="Board--Block--x1">
        <div className="Board--Block--x1">
          <BlockDebugView show={debugView} text="Bottom Left Corner" />
        </div>
        <div className="Board--Block--x3">
          <BlockDebugView show={debugView} text="Player Bottom" />
        </div>
        <div className="Board--Block--x1">
          <BlockDebugView show={debugView} text="Bottom Right Corner" />
        </div>
      </div>
    </div>
  );
};
