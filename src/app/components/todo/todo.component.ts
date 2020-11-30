import { Component, OnInit } from '@angular/core';
import ITodo from 'src/app/models/ITodo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList: ITodo[] = [];

  //enables using data from service
  constructor(private service: TodoService) { 
  }

  ngOnInit(): void {
    //use data from service, todoList = list of hard coded todo objects.
    this.todoList = this.service.getTodos(); 
  }

  addTodo(newTask) {
    if(newTask.value != '') {
      let todo: ITodo = {task: newTask, isDone: false}
      this.todoList.push(todo);
    }
  }

  deleteTodo(todo){
    for(let i = 0; i < this.todoList.length; i++) {
      if(this.todoList[i] == todo) {
        this.todoList.splice(i, 1);
      }
    }
  }
}

  