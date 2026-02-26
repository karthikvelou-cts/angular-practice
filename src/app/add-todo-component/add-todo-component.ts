import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-todo-component.html',
  styleUrl: './add-todo-component.scss',
})
export class AddTodoComponent {
  @Input() placeholder = 'Enter todo...';
  @Output() todoAdded = new EventEmitter<{ title: string }>();

  Todo: string = '';

  addTodo() {
    if (!this.Todo.trim()) return;
    this.todoAdded.emit({ title: this.Todo });
    this.Todo = '';
  }
}
