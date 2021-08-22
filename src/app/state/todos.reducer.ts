import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, Action } from '@ngrx/store';
import { on } from '@ngrx/store';
import { Todo } from '../models';
import * as TodosActions from './todos.actions';

export const featureKey = 'todos';

export interface State extends EntityState<Todo> {
  loading: boolean;
}

export const adapter = createEntityAdapter<Todo>();

export const initialState: State = adapter.getInitialState({
  loading: false
});

const todosReducer = createReducer(
  initialState,
  on(TodosActions.loadTodosSuccess, (state, { todos }) =>
    adapter.setAll(todos, state)
  ),
  on(TodosActions.removeTodo, (state, { payload }) =>
    adapter.removeOne(payload.id, state)
  ),
  on(TodosActions.updateTodo, (state, { payload }) =>
    adapter.updateOne(
      { id: payload.id, changes: { completed: payload.completed } },
      state
    )
  ),
  on(TodosActions.addTodo, (state, { payload }) =>
    adapter.addOne({ id: Math.random().toString(), ...payload }, state)
  ),
  on(TodosActions.setLoading, (state, { isLoading }) => ({
    ...state,
    loading: isLoading
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return todosReducer(state, action);
}
