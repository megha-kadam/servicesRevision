import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoListComponent } from './shared/components/todo-list/todo-list.component';
import { TodoFormComponent } from './shared/components/todo-form/todo-form.component';
import { StdTableComponent } from './shared/components/std-table/std-table.component';
import { StdFormComponent } from './shared/components/std-form/std-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { GetconfirmComponent } from './shared/components/getconfirm/getconfirm.component';
import { PassengerModule } from './shared/passenger/passenger.module';
import { PassengerDashboardComponent } from './shared/passenger/passenger-dashboard/passenger-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFormComponent,
    StdTableComponent,
    StdFormComponent,
    GetconfirmComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    PassengerModule
  ],
  exports : [
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
