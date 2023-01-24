import { Component } from '@angular/core'

// interface IUser {
//   age: number
//   name: string
// }

@Component({
  selector: 'todolist-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'todolist-angular'
  // user = {
  //   age: 32,
  //   name: 'Ivan',
  // }
  // isLoading = false
  // text = 'startValue'
  // constructor() {
  //   setTimeout(() => {
  //     this.isLoading = true
  //     this.title = 'test'
  //   }, 3000)
  // }
  //
  // onClick() {
  //   this.user.name = 'Denis'
  // }
  // onChange(event: Event) {
  //   this.text = (event.currentTarget as HTMLInputElement).value
  // }
  text = 'start value'
}
