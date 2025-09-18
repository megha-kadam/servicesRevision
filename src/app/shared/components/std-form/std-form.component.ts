import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StdService } from '../../services/std.service';
import { SnackbarService } from '../../services/snackbar.service';
import { UuidService } from '../../services/uuid.service';
import { Istd } from '../../models/std.interface';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
  stdForm !: FormGroup;
  isInEditMode : boolean = false;
  editObj !: Istd;

  constructor(private std : StdService,
          private snackbar : SnackbarService,
          private uuid : UuidService
  ) { }

  createForm(){
    this.stdForm = new FormGroup({
      fName : new FormControl(null, Validators.required),
      lName :  new FormControl(null, Validators.required),
      email :  new FormControl(null, Validators.required),
      contact :  new FormControl(null, Validators.required),
    })
  }

  onAddStd(){
    if(this.stdForm.valid){
      let stdObj = {...this.stdForm.value, stdId : this.uuid.uid()};
      console.log(stdObj);
      
      this.stdForm.reset();
      this.std.createStd(stdObj);
      this.snackbar.openSnackbar(`New Student added successfully`)
    }
  }

  onUpdateStd(){
    if(this.stdForm.valid){
      let updateObj = {...this.stdForm.value, stdId : this.editObj.stdId};
      console.log(updateObj);
      this.stdForm.reset();
      
      this.std.updateStd(updateObj);
      this.isInEditMode =false;
      this.std.updateStdEmit(updateObj);

      this.snackbar.openSnackbar(`Student ${updateObj.fName} updated successfully`)
    }
  }

  editEmitStd(){
    this.std.editStdObs$
    .subscribe(res => {
      if(res){
        this.editObj = res;
        
        this.stdForm.patchValue(res);
        this.isInEditMode = true;
      }
    })
  }

  ngOnInit(): void {
    this.createForm();
    this.editEmitStd()
  }

}
