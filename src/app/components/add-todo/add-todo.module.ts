import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from './add-todo.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  declarations: [AddTodoComponent],
  exports: [AddTodoComponent]
})
export class AddTodoModule {}
