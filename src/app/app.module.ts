import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { WelcomeModule } from './pages/welcome/welcome.module';
import { CreateColleagueModule } from './pages/create-colleague/create-colleague.module';
import { CreateColleagueReactiveModule } from './pages/create-colleague-reactive/create-colleague-reactive.module';
import { ColleagueDetailModule } from './pages/colleague-detail/colleague-detail.module';
import { SharedModule } from './shared/shared.module';
import { AuthInterceptor } from './interceptors/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    WelcomeModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ColleagueDetailModule,
    CreateColleagueModule,
    CreateColleagueReactiveModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
