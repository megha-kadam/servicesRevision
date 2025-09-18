import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Itodo } from '../../models/todo.interface';
import { SnackbarService } from '../../services/snackbar.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoArray !: Array<Itodo>;

  constructor(private todos : TodoService, 
            private snackbar : SnackbarService,
          private matdialog : MatDialog) { }

  ngOnInit(): void {
    this.getTodo();

     this.todos.updateTodoObs$
   .subscribe(res => {
    if(res){
      console.log(res);
      let getIndex = this.todoArray.findIndex(t => t.todoId === res.todoId);
      this.todoArray[getIndex] = res;
    }
   })
  }

  onRemoveTodo(todo : Itodo){
    let matConfig : MatDialogConfig =  new MatDialogConfig();
    matConfig.data = `Are you sure, you want to remove this ${todo.todoId}`;
    matConfig.width = '450px';

    let matDialog = this.matdialog.open(GetconfirmComponent)
    matDialog.afterClosed()
    .subscribe(res => {
      if(res){
        this.todos.removeTodo(todo.todoId);
        this.snackbar.openSnackbar(`Todo ${todo.todoItem} removed successfully`)
      }
    })
  }

  onEdit(todo : Itodo){
    console.log(todo);
    
    this.todos.todoEditEmit(todo)
  }

  getTodo(){
   this.todoArray = this.todos.fetchAllTodo();
  }

}
