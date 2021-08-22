import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TodoListComponent } from './todo-list.component';

@NgModule({
  imports: [CommonModule, MatListModule, MatIconModule, MatButtonModule],
  declarations: [TodoListComponent],
  exports: [TodoListComponent]
})
export class TodoListModule {}
