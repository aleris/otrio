import React from "react";
import { GridView } from "./GridView"
import { Grid } from "./model/Grid";
import { RingColor } from "../ring/model/RingColor";
import { RingSize } from "../ring/model/RingSize";

const grid: Grid = {
	cells: [
		[
			{
				rings: [
					{
						size: RingSize.SMALL, 
						color: RingColor.GREEN
					}
				]
			},
			{
				rings: []
			},
			{
				rings: []
			}

		],
		[
			{
				rings: [
					{
						size: RingSize.MEDIUM, 
						color: RingColor.PURPLE
					}
				]
			},
			{
				rings: []
			},
			{
				rings: []
			}
		],
		[
			{
				rings: [
					{
						size: RingSize.SMALL, 
						color: RingColor.GREEN
					},
					{
						size: RingSize.MEDIUM, 
						color: RingColor.BLUE
					}
				]
			},
			{
				rings: []
			},
			{
				rings: []
			}
		]
	]
}

export const GridTestPage = () => {
    return <GridView grid={ grid } />
}
