import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddTodoComponent } from "../add-todo-component/add-todo-component"; // <--- 1. Import this

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule, AddTodoComponent], // <--- 2. Add to imports array
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class TodoComponent implements OnInit, OnDestroy {
  constructor() {

  }
  ngOnDestroy(): void {
    console.log('TodoComponent destroyed');
  }
  ngOnInit(): void {
    console.log('TodoComponent initialized');
  }
  title: string = 'Todo List';
  todos: Array<{ title: string }> = [
    { title: 'Learn Angular' },
    { title: 'Build an Angular App' },
    { title: 'Deploy the App' }
  ];

  addTodo(newTodo: { title: string }) {
    this.todos.push(newTodo);
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
