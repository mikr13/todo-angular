import {
  Component,
  OnInit
} from '@angular/core';

import {
  ToDo
} from '../../interfaces/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: ToDo[];
  completedToDos: ToDo[];
  todoTitle: string;
  todoDescription: string;
  todoID: number;
  todoTemplate: boolean;
  completedCount: number;
  enableCompletedArea: boolean;

  constructor() {}

  ngOnInit() {

    this.todos = [{
      id: 1,
      title: 'Demo To-Do',
      description: 'This is a dummy task one which I plan to never do as it was never meant to happen on 25th July',
      completed: false,
      editing: false
    }, {
      id: 2,
      title: 'Demo To-Do 2',
      description: 'This is a dummy task one which I plan to never do as it was never meant to happen on 25th July',
      completed: false,
      editing: false
    }];

    this.completedToDos = [];

    this.todoTitle = '';

    this.todoDescription = '';

    this.todoID = this.todos.length + 1;

    this.todoTemplate = false;

    this.completedCount = 0;

    this.enableCompletedArea = false;
  }

  addToDo = (): void => {

    if (this.todoTitle.trim().length === 0) {
      return;
    }

    this.todos.push({
      id: this.todoID,
      title: this.todoTitle,
      description: this.todoDescription || '',
      completed: false,
      editing: false
    });

    this.todoTitle = '';
    this.todoDescription = '';
    this.todoTemplate = false;
    this.todoID++;
  }

  editToDo = (todo: ToDo): void => {

    todo.editing = true;
  }

  completeEditingToDo = (todo: ToDo): void => {

    if (todo.title.trim().length === 0) {
      return;
    }

    this.todos.forEach(originaltodo => {
      if (originaltodo.id === todo.id) {
        todo.editing = false;
        return todo;
      }
    });
  }

  completeToDo = (id: number): void => {

    this.todos.forEach(todo => {
      if (id === todo.id) {
        todo.completed = true;
        this.completedToDos.push(todo);
        this.todos.splice(this.todos.indexOf(todo), 1);
      }
    });
    this.completedCount++;
    this.enableCompletedArea = true;
  }

  deleteToDo = (id: number): void => {

    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  visibleToDo = (): void => {

    if (this.todoTitle.trim().length === 0) {
      this.todoTemplate = false;
    } else {
      this.todoTemplate = true;
    }
  }
}
