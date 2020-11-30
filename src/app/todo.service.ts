import { Injectable } from '@angular/core';
import ITodo from './models/ITodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoList = [{task: 'Sing', isDone: false}, {task: 'Dance', isDone: false}, {task: 'Giggle', isDone: true}];
  
  getTodos(): ITodo[] {
    return this.todoList; //where i would make api call
  }
}
