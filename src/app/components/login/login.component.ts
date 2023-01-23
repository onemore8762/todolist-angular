import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'todolist-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,5}$'),
    ]),
    password: new FormControl(''),
  })
  constructor() {}
  onSubmit() {
    alert(`
    email: ${this.loginForm.value.email}
    password: ${this.loginForm.value.password}
    `)
  }

  get email() {
    return this.loginForm.get('email')
  }

  ngOnInit(): void {}
}
