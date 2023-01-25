import { Component, OnInit } from '@angular/core'
import { TodosService } from '../../services/todos.service'
import { Observable } from 'rxjs'
import { Todo } from '../../models/todos.model'

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
