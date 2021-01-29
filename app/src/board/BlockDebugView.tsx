import "./BlockDebugView.scss";
import React from "react";

type Props = {
  show: boolean;
  text: string;
};

export const BlockDebugView = ({ show, text }: Props) => {
  return show ? <div className="BlockDebug">{text}</div> : null;
};
