import { Ipass } from "../models/passenger.interface";

export const passengerArr : Array<Ipass> = [
        {
            id : '1',
            fullName : "Stephen",
            checkedIn : true,
            checkInDate : 123460987,
            children : null,
        },
         {
            id : '2',
            fullName : "Rose",
            checkedIn : false,
            checkInDate : 123460987,
            children : [
                {fName : 'jhon', age : 24},
                {fName : 'june', age : 22}
            ]
        },
         {
            id : '3',
            fullName : "James",
            checkedIn : true,
            checkInDate : 123460987,
            children : null,
        },
          {
            id : '4',
            fullName : "Rose",
            checkedIn : false,
            checkInDate : 123460987,
            children : [
                {fName : 'May', age : 24},
                {fName : 'july', age : 22}
            ]
        },
         {
            id : '5',
            fullName : "Tina",
            checkedIn : false,
            checkInDate : 123460987,
            children : null,
        }
    ]
