export interface Todo {
  id: string;
  label: string;
  completed: boolean;
}

export type AddTodo = Omit<Todo, 'id'>;

export interface RemoveTodo {
  id: string;
}

export interface UpdateTodo {
  id: string;
  completed: boolean;
}
