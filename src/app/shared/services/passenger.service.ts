import { Injectable } from "@angular/core";
import { Ipass } from "../models/passenger.interface";
import { passengerArr } from "../const/passenger";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class PassengerService{
    passengers : Array<Ipass> = passengerArr;
    
    fetchAllPassenger() : Observable<any>{
        return of(this.passengers);
    }

    updatePassenger(pass : Ipass){
        let getIndex = this.passengers.findIndex(p => p.id === pass.id);
        this.passengers[getIndex] = pass
    }

    removePassenger(pass : Ipass){
        let getIndex = this.passengers.findIndex(p => p.id === pass.id);
        this.passengers.splice(getIndex, 1);
    }

}