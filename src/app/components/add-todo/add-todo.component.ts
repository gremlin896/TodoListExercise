import {
  Component,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { AddTodo } from '../../models';

@Component({
  selector: 'app-add-todo',
  template: `
    <h2>Add Task</h2>
    <mat-form-field>
      <mat-label>Task Label</mat-label>
      <input matInput (keyup.enter)="addTodo()" [formControl]="formControl" />
    </mat-form-field>

    <button mat-stroked-button (click)="addTodo()">Add Task</button>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoComponent {
  @Output() add = new EventEmitter<AddTodo>();

  formControl = new FormControl();

  addTodo() {
    this.add.emit({ label: this.formControl.value, completed: false });
    this.formControl.reset('');
  }
}
