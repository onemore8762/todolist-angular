import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { BehaviorSubject, catchError, EMPTY, map } from 'rxjs'
import { environment } from 'src/environments/environment.development'
import { BeatyLoggerService } from '../../core/services/beaty-logger.service'
import { Todo } from '../models/todos.model'
import { CommonResponse } from '../../core/models/core.model'

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([])

  httpOptions = {
    withCredentials: true,
    headers: {
      'api-key': environment.apiKey,
    },
  }

  constructor(private http: HttpClient, private BeatyLoggerService: BeatyLoggerService) {}

  private errorHandler = (err: HttpErrorResponse) => {
    this.BeatyLoggerService.log(err.message, 'error')
    return EMPTY
  }

  getTodos() {
    return this.http
      .get<Todo[]>(`${environment.baseUrl}todo-lists`, this.httpOptions)
      .pipe(catchError(this.errorHandler.bind(this)))
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  createTodo(title: string) {
    return this.http
      .post<CommonResponse<{ item: Todo }>>(
        `${environment.baseUrl}todo-lists`,
        { title },
        this.httpOptions
      )
      .pipe(
        catchError(this.errorHandler.bind(this)),
        map(res => {
          const newTodo = res.data.item
          const stateTodos = this.todos$.getValue()
          return [newTodo, ...stateTodos]
        })
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  deleteTodo(todoListId: string) {
    return this.http
      .delete<CommonResponse>(`${environment.baseUrl}todo-lists/${todoListId}`, this.httpOptions)
      .pipe(
        catchError(this.errorHandler.bind(this)),
        map(() => {
          return this.todos$.getValue().filter(tl => tl.id !== todoListId)
        })
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }
}
