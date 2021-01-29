import React from "react";
import './RingView.scss';
import {RingSize} from "./RingSize";
import {RingColor} from "./RingColor";

type Props = {
    size: RingSize
    color: RingColor
}

export const RingView = ({size, color} : Props) => {
    return (
        <div className="ring">
            {/*<div>size:{size}</div>*/}
            {/*<div>color:{color}</div>*/}
        </div>
    )
}