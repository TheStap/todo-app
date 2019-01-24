import {Component, Input} from '@angular/core';
import {TodoModel} from "../todo.model";

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent  {

    @Input()
    todo: TodoModel = null;
}
