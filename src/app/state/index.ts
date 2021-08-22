import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromTodos from './todos.reducer';

export interface State {
  [fromTodos.featureKey]: fromTodos.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromTodos.featureKey]: fromTodos.reducer
};

export const selectTodosState = createFeatureSelector<fromTodos.State>(
  fromTodos.featureKey
);
