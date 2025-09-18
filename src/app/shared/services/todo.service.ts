import { Injectable } from "@angular/core";
import { Itodo } from "../models/todo.interface";
import { todos } from "../const/todo";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class TodoService{
    todosArr : Array<Itodo> = todos;

    todoEdit$ : Subject<Itodo> = new Subject<Itodo>();
    todoEditObs : Observable<Itodo> = this.todoEdit$.asObservable();
    todoEditEmit(todo : Itodo){
        this.todoEdit$.next(todo)
    }

    updateTodo$ : Subject<Itodo> = new Subject<Itodo>();
    updateTodoObs$ : Observable<Itodo> = this.updateTodo$.asObservable();
    updateTodoEmit$(todo : Itodo){
        this.updateTodo$.next(todo)
    }

    fetchAllTodo(){
        return this.todosArr
    }

    createTodo(todo : Itodo){
        this.todosArr.push(todo)
    }

    updateTodo(todo : Itodo){
        let getIndex = this.todosArr.findIndex(t => t.todoId === todo.todoId);
        this.todosArr[getIndex] = todo;
    }

    removeTodo(id : string){
        let getIndex = this.todosArr.findIndex(t => t.todoId === id);
        this.todosArr.splice(getIndex, 1);
    }
}