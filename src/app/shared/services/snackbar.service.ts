import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
    providedIn : 'root'
})
export class SnackbarService{
    constructor(private matsnack : MatSnackBar){}

    openSnackbar(msg : string){
        this.matsnack.open(msg, 'Close', {
            horizontalPosition : 'left',
            verticalPosition : 'top',
            duration : 3000
        })
    }
}