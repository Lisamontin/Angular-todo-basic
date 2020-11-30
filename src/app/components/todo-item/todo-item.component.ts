import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import ITodo from 'src/app/models/ITodo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ITodo;
  @Output() removeTask = new EventEmitter<ITodo>();

  lineThrough = '';

  deleteTodo() {
    this.removeTask.emit(this.todo)
  }

  ngOnInit(): void {
  }

  toggle(todo) {
    todo.isDone = !todo.isDone;
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }
}
 