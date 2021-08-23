import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  newTask: string= '';

  tasks: TodoItem[] = [
    {description: 'Arrumar a cama', done: true},
    {description: 'Fazer o trabalho prático do Bootcamp', done: false}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    this.tasks.push({
      description: this.newTask,
      done: false
    });
  }

  deleteTask(i: number){
    this.tasks.splice(i, 1);
  }

}
