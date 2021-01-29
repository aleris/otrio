import {Ring} from "../../ring/model/Ring";

export interface Player {
    id: string
    name: string
    ring: Array<Ring>
    isWinner: boolean
}
