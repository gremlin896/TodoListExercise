import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMapTo, map, tap } from 'rxjs/operators';
import { TodoDataService } from '../services';
import * as TodosActions from './todos.actions';

@Injectable({ providedIn: 'root' })
export class TodosEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.loadTodos),
      tap(() => this.setLoading(true)),
      switchMapTo(this.service.getAllTodos()),
      tap(() => this.setLoading(false)),
      map(todos => TodosActions.loadTodosSuccess({ todos }))
    )
  );

  constructor(
    private actions$: Actions,
    private service: TodoDataService,
    private store: Store
  ) {}

  private setLoading(isLoading: boolean) {
    this.store.dispatch(TodosActions.setLoading({ isLoading }));
  }
}
