export interface Ipass{
    id : string
    fullName : string
    checkedIn : boolean
    checkInDate : number
    children : null | Array<Ichild>
}
export interface Ichild {
    fName : string
    age : number
}