import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from '../../services/snackbar.service';
import { Itodo } from '../../models/todo.interface';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  todoForm !: FormGroup;
  isInEditMode : boolean = false;
  editObj !: Itodo;

  constructor(private todos : TodoService,
              private snackbar : SnackbarService,
              private uuid : UuidService
  ) { }

  createTodoForm(){
    this.todoForm = new FormGroup({
      todoItem : new FormControl(null, Validators.required)
    })
  }

  onUpdateTodo(){
    if(this.todoForm.valid){
      let updateObj = {...this.todoForm.value, todoId : this.editObj.todoId};
      console.log(updateObj);
      
      this.todoForm.reset();
      this.todos.updateTodo(updateObj);
      this.isInEditMode = false;

      this.todos.updateTodoEmit$(updateObj);

      this.snackbar.openSnackbar(`Todo ${updateObj.todoItem} updated successfully`)
    }
  }

  onAddTodo(){
    if(this.todoForm.valid){
      let todoObj = {...this.todoForm.value, todoId : this.uuid.uid()};
      console.log(todoObj);
      
      this.todoForm.reset();
      this.todos.createTodo(todoObj);
      this.snackbar.openSnackbar(`New Todo added successfully`)
    }
  }

  onEditTodo(){
    this.todos.todoEditObs
    .subscribe(res => {
       console.log(res);
      this.editObj = res;
      console.log(this.editObj);
      this.isInEditMode = true;
      this.todoForm.patchValue(res)
    })
  }



  ngOnInit(): void {
    this.createTodoForm();
    this.onEditTodo();
  }

}
