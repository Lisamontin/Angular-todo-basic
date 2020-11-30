import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import ITodo from 'src/app/models/ITodo';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  //create event specific to this application ("event" can be keyup, click aso)
  @Output() addTask = new EventEmitter<ITodo>();
  
  inputFieldValue = "";

  updateTaskInput(textFromInput: string) {
    this.inputFieldValue = textFromInput;
  }

  addNewTodo(value: ITodo) {
    this.addTask.emit(value);
    console.log('addNewTodo emit function')
    this.inputFieldValue = "";
  }

  ngOnInit(): void {
  }

}
