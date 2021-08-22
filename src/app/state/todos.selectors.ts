import { createSelector } from '@ngrx/store';
import { selectTodosState } from '.';
import { adapter } from './todos.reducer';

const { selectAll } = adapter.getSelectors();

export const selectAllTodos = createSelector(
  selectTodosState,
  selectAll
);

export const selectIsLoadingTodos = createSelector(
  selectTodosState,
  state => state.loading
);
