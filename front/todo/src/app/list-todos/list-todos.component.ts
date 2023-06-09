import { Component } from '@angular/core';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {

  todos=[
    new Todo(1, "Learn Java", false, new Date()),
    new Todo(2, "Learn Angular", false, new Date()),
    new Todo(3, "Read more", false, new Date()),
    new Todo(4, "Go to the gym", false, new Date())
  ]

  constructor() { }
}
