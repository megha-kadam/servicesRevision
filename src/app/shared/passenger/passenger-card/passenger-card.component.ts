import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipass } from '../../models/passenger.interface';
import { PassengerService } from '../../services/passenger.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GetconfirmComponent } from '../../components/getconfirm/getconfirm.component';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.scss']
})
export class PassengerCardComponent implements OnInit {
  @Input() passObj !: Ipass;
  @Output() emitPass : EventEmitter<boolean> = new EventEmitter();

  isInEditMode : boolean = false;

  constructor(private passService : PassengerService,
            private matDialog : MatDialog,
            private snackbar : SnackbarService
  ) { }

  onEdit(pass : Ipass){
    console.log(pass);
    this.isInEditMode = true;
  }

  onUpdate(name : HTMLInputElement){
    let value = name.value;
    console.log(value);
    
    this.passService.updatePassenger({
      ...this.passObj,
      fullName : value
    })

    this.isInEditMode = false;
  }

  onRemove(pass : Ipass){
    let matConfig : MatDialogConfig = new MatDialogConfig();
    matConfig.data = `Are you sure, you want to remove this ${pass.fullName} passenger`;
    matConfig.width = '500px';

    let matdialogRef = this.matDialog.open(GetconfirmComponent, matConfig);
    matdialogRef.afterClosed()
    .subscribe(res => {
      if(res){
        this.passService.removePassenger(pass);
        this.emitPass.emit(true)
        this.snackbar.openSnackbar(`Passenger ${pass.fullName} removed successfully`)
      }
    })
  }

  ngOnInit(): void {
  }

}
