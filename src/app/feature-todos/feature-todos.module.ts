import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoModule, TodoListModule } from '../components';
import { FeatureTodosComponent } from './feature-todos.component';
import { StoreModule } from '@ngrx/store';
import * as fromTodos from '../state/todos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from '../state/todos.effects';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    TodoListModule,
    AddTodoModule,
    StoreModule.forFeature(fromTodos.featureKey, fromTodos.reducer),
    EffectsModule.forFeature([TodosEffects]),
    MatProgressSpinnerModule
  ],
  declarations: [FeatureTodosComponent],
  exports: [FeatureTodosComponent]
})
export class FeatureTodosModule {}
