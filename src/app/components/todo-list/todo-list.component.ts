import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output
} from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Todo, UpdateTodo, RemoveTodo } from '../../models';

@Component({
  selector: 'app-todo-list',
  template: `
    <mat-selection-list
      *ngIf="todos.length; else empty"
      (selectionChange)="selectionChanged($event)"
    >
      <mat-list-option
        *ngFor="let todo of todos"
        [value]="todo.id"
        [selected]="todo.completed"
      >
        <div>
          <button
            mat-icon-button
            (click)="$event.stopPropagation(); removeTask(todo.id)"
          >
            <mat-icon>delete</mat-icon>
          </button>
          {{ todo.label }}
        </div>
      </mat-list-option>
    </mat-selection-list>

    <ng-template #empty>There are no remaining tasks!</ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  @Input() todos: Todo[] = [];

  @Output() update = new EventEmitter<UpdateTodo>();
  @Output() remove = new EventEmitter<RemoveTodo>();

  selectionChanged(e: MatSelectionListChange) {
    const { selected: completed, value: id } = e.options[0];

    this.update.emit({
      id,
      completed
    });
  }

  removeTask(id: string) {
    this.remove.emit({ id });
  }
}
