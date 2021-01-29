import React from "react";
import {RingView} from "./RingView";
import {RingSize} from "./RingSize";
import {RingColor} from "./RingColor";

export const TestRingPage = () => {
    return <RingView size={RingSize.SMALL} color={RingColor.BLUE}/>
}
