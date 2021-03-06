import "./PlayerNumberListView.scss";
import React from "react";
import { PlayerNumberView } from "./PlayerNumberView";

type Props = {
  selectedNumberOfPlayers: number;
  onChange: (playerNumber: number) => void;
};

export const PlayerNumberListView = ({
  selectedNumberOfPlayers,
  onChange,
}: Props) => {
  return (
    <div className="PlayerNumberList">
      <div className="PlayerNumberList--PlayerIcon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fill="#222"
            d="M252.77 246.63c33.88 0 63.22-12.15 87.2-36.13 23.97-23.97 36.12-53.3 36.12-87.19 0-33.88-12.15-63.21-36.13-87.2C315.98 12.16 286.65 0 252.77 0c-33.89 0-63.22 12.15-87.2 36.12-23.96 23.98-36.12 53.31-36.12 87.2 0 33.88 12.16 63.21 36.13 87.19 23.98 23.97 53.31 36.12 87.19 36.12zM468.55 393.7c-.7-9.97-2.1-20.86-4.15-32.35a254.7 254.7 0 00-7.96-32.53 160.67 160.67 0 00-13.37-30.33 114.47 114.47 0 00-20.16-26.28c-7.96-7.61-17.7-13.73-28.97-18.2-11.23-4.44-23.67-6.7-36.98-6.7-5.22 0-10.28 2.15-20.04 8.5-6.94 4.53-13.9 9.01-20.88 13.47-6.7 4.27-15.79 8.28-27.01 11.9a107.27 107.27 0 01-33.04 5.34c-10.97 0-22.09-1.8-33.05-5.34-11.2-3.62-20.3-7.62-27-11.9-7.76-4.96-14.8-9.5-20.9-13.47-9.74-6.35-14.8-8.5-20.03-8.5-13.31 0-25.75 2.26-36.97 6.7-11.26 4.46-21 10.58-28.97 18.2a114.49 114.49 0 00-20.16 26.28c-5.55 9.78-10.05 19.99-13.37 30.34-3.2 10-5.87 20.94-7.95 32.52a303.55 303.55 0 00-4.15 32.36 438.79 438.79 0 00-1.02 30.24c0 26.72 8.5 48.36 25.25 64.32C84.22 504 106.1 512 132.73 512h246.54c26.62 0 48.5-7.98 65.06-23.73 16.76-15.95 25.25-37.59 25.25-64.33 0-10.31-.35-20.49-1.03-30.24zm0 0"
          />
        </svg>
      </div>
      {Array.from({ length: 3 }).map((_, index) => {
        const n = index + 2;
        return (
          <PlayerNumberView
            key={index}
            number={n}
            selected={selectedNumberOfPlayers === n}
            onClick={() => onChange(n)}
          />
        );
      })}
    </div>
  );
};
