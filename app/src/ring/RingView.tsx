import React from "react";
import {RingSize} from "./RingSize";

type Props = {
    size: RingSize
}

export const RingView = ({size} : Props) => {
    return (
        <div>size:{size}</div>
    )
}