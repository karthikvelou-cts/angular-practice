import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <--- 1. Import this

import { AppComponent } from './app'
import { TodoComponent } from './todo/todo';
import { AddTodoComponent } from './add-todo-component/add-todo-component'

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        TodoComponent,
        AddTodoComponent,
        AppComponent,
        FormsModule // <--- 2. Add to imports array
    ],
    providers: [],
    bootstrap: []
})
export class AppModule { }
