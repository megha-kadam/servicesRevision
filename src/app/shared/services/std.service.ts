import { Injectable } from "@angular/core";
import { Istd } from "../models/std.interface";
import { stds } from "../const/std";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class StdService{
    stdArr : Array<Istd> = stds;

    editStd$ : Subject<Istd> = new Subject<Istd>();
    editStdObs$ : Observable<Istd> = this.editStd$.asObservable();
    editStdEmit(std : Istd){
        this.editStd$.next(std)
    }

    updateStd$ : Subject<Istd> = new Subject<Istd>();
    updateStdObs$ : Observable<Istd> = this.updateStd$.asObservable();
    updateStdEmit(std : Istd){
        this.updateStd$.next(std)
    }

    fetchAllStd() : Array<Istd>{
        return this.stdArr
    }

    createStd(std : Istd){
        this.stdArr.push(std)
    }

    updateStd(std : Istd){
        let getIndex = this.stdArr.findIndex(s => s.stdId === std.stdId);
        this.stdArr[getIndex] = std;
    }

    removeStd(id : string){
        let getIndex = this.stdArr.findIndex(s => s.stdId ===id);
        this.stdArr.splice(getIndex, 1);
    }
}