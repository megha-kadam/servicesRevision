import { Component, OnInit } from '@angular/core';
import { StdService } from '../../services/std.service';
import { Istd } from '../../models/std.interface';
import { SnackbarService } from '../../services/snackbar.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
  stdArrs !: Array<Istd>;
  editObj !: Istd;

  constructor(private std : StdService,
            private snackbar : SnackbarService,
            private matdialog : MatDialog
  ) { }

  getAllStd(){
    this.stdArrs = this.std.fetchAllStd();
  }

  onEdit(std : Istd){
    this.std.editStdEmit(std);
  }

  onRemoveStd(std : Istd){
    let matconfig : MatDialogConfig = new MatDialogConfig();
    matconfig.width = '500px';
    matconfig.data = `Are you sure, you want to remove this ${std.fName}`;

    let matdialog = this.matdialog.open(GetconfirmComponent);
    matdialog.afterClosed()
    .subscribe(res => {
      if(res){
        this.std.removeStd(std.stdId)
        this.snackbar.openSnackbar(`student ${std.fName} removed successfully`)
      }
    })
  }

  updateStd(){
    this.std.updateStdObs$
    .subscribe(res => {
      let getIndex = this.stdArrs.findIndex(s => s.stdId === res.stdId);
      this.stdArrs[getIndex] = res;
    })
  }

  ngOnInit(): void {
    this.getAllStd();
    this.updateStd();
  }

}


// this.todoService.updateTodoSubObs$
//    .subscribe(updateObj => {
//     let findIndex = this.todosArr.findIndex(todo => todo.todoId === updateObj.todoId);
//     this.todosArr[findIndex] = updateObj
//    })