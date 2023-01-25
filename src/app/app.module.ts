import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { CredentialsInterceptor } from './core/interceptors/credentials.interceptor'
import { HomeModule } from './home/home.module'
import { SharedModule } from './shared/shared.module'
import { CoreModule } from './core/core.module'

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HomeModule,
    SharedModule,
    CoreModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
