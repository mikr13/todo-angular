import { Component, OnInit } from '@angular/core';

import { ToDo } from '../../interfaces/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: ToDo[];
  todoTitle: string;
  todoDescription: string;
  todoID: number;

  constructor() { }

  ngOnInit() {

    this.todoTitle = '';

    this.todoDescription = '';

    this.todoID = 3;

    this.todos = [
      {
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
      }
    ];

  }

  addToDo = () : void => {

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
    this.todoID++;
  }

  deleteToDo = (id: number) : void => {

    this.todos = this.todos.filter(todo => todo.id !== id);

  }

}
