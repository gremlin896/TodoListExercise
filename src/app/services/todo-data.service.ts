import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { environment } from '../environment';
import { Todo } from '../models';

@Injectable({ providedIn: 'root' })
export class TodoDataService {
  constructor(private http: HttpClient) {}

  getAllTodos() {
    // return this.http.get(environment.endpoint);

    // mock implementation, with fake delay:
    const mockedTodos: Todo[] = [
      { label: 'Task 1', completed: false, id: 'task-1' },
      { label: 'Task 2', completed: false, id: 'task-2' },
      { label: 'Task 3', completed: true, id: 'task-3' },
      { label: 'Task 4', completed: true, id: 'task-4' },
      { label: 'Task 5', completed: false, id: 'task-5' }
    ];
    return of(mockedTodos).pipe(delay(2000));
  }
}
