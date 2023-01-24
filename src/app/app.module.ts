import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ValueService } from './services/value.service'
import { TodosComponent } from './components/todos/todos.component'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { LoginComponent } from './components/login/login.component'
import { HomeComponent } from './components/home/home.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { ProfileComponent } from './components/profile/profile.component'
import { UsersComponent } from './components/users/users.component'
import { CredentialsInterceptor } from '../interceptors/credentials.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProfileComponent,
    UsersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
