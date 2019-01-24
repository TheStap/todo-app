import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {TodoModel} from "../todo.model";

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnChanges {
    todoModels: TodoModel[];

    @Input()
    private todos: string[] = [];

    ngOnChanges(changes: SimpleChanges) {
        if (changes.todos) {
            this.todoModels = this.todos.map((text, index) => {
                return {text, index, done: false};
            });
        }
    }

}
