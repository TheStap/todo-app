import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1>Todo list</h1>
        <app-todo-list [todos]="todos"></app-todo-list>
    `,
    styles: [],
})
export class AppComponent {
    todos = ['Wash hands', 'Read book', 'Do stuff'];
}
