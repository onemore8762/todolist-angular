import { Component, OnDestroy, OnInit } from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http'
import { Todo, TodosService } from '../../services/todos.service'
import { Observable, Subscription } from 'rxjs'

@Component({
  selector: 'todolist-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor(private TodoService: TodosService) {}
  todos$!: Observable<Todo[]>
  error = ''
  nameTodo = ''
  ngOnInit(): void {
    this.todos$ = this.TodoService.todos$
    this.getTodos()
  }

  getTodos() {
    this.TodoService.getTodos()
  }

  createTodo() {
    this.TodoService.createTodo(this.nameTodo)
  }

  deleteTodo(todoListId: string) {
    this.TodoService.deleteTodo(todoListId)
  }
}
