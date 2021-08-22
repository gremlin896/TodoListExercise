import { createAction, props } from '@ngrx/store';
import { AddTodo, RemoveTodo, Todo, UpdateTodo } from '../models';

const actionsKey = '[Todos]';

export const loadTodos = createAction(`${actionsKey} Load Todos`);
export const loadTodosSuccess = createAction(
  `${actionsKey} Load Todos Success`,
  props<{ todos: Todo[] }>()
);
export const addTodo = createAction(
  `${actionsKey} Add Todo`,
  props<{ payload: AddTodo }>()
);
export const removeTodo = createAction(
  `${actionsKey} Remove Todo`,
  props<{ payload: RemoveTodo }>()
);
export const updateTodo = createAction(
  `${actionsKey} Update Todo`,
  props<{ payload: UpdateTodo }>()
);

export const setLoading = createAction(
  `${actionsKey} Set Todos Loading`,
  props<{ isLoading: boolean }>()
);
