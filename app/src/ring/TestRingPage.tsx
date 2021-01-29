import React from "react";
import {RingView} from "./RingView";
import {RingSize} from "./RingSize";
import {RingColor} from "./RingColor";

export const TestRingPage = () => {
    return (
        <div style={{width: '300px', height: '300px'}}>
            <RingView size={RingSize.SMALL} color={RingColor.BLUE}/>
        </div>
    )
}
