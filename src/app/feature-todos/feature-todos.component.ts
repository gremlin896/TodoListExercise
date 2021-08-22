import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddTodo, RemoveTodo, UpdateTodo } from '../models';
import * as TodosActions from '../state/todos.actions';
import * as TodosSelectors from '../state/todos.selectors';

@Component({
  selector: 'app-feature-todos',
  template: `
    <h1>Todo List App</h1>
    <div *ngIf="!(isLoading$ | async); else loading" class="container">
      <app-todo-list
        [todos]="todos$ | async"
        (update)="updateTodo($event)"
        (remove)="removeTodo($event)"
      ></app-todo-list>

      <app-add-todo (add)="addTodo($event)"></app-add-todo>
    </div>

    <ng-template #loading
      ><mat-spinner></mat-spinner>loading todos...</ng-template
    >
  `,
  styles: [
    `
      .container {
        max-width: 500px;
      }
    `
  ]
})
export class FeatureTodosComponent implements OnInit {
  isLoading$ = this.store.select(TodosSelectors.selectIsLoadingTodos);
  todos$ = this.store.select(TodosSelectors.selectAllTodos);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(TodosActions.loadTodos());
  }

  addTodo(payload: AddTodo) {
    this.store.dispatch(TodosActions.addTodo({ payload }));
  }

  removeTodo(payload: RemoveTodo) {
    this.store.dispatch(TodosActions.removeTodo({ payload }));
  }

  updateTodo(payload: UpdateTodo) {
    this.store.dispatch(TodosActions.updateTodo({ payload }));
  }
}
