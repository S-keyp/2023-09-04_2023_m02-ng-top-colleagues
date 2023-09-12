import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { WelcomeModule } from './pages/welcome/welcome.module';
import { CreateColleagueModule } from './pages/create-colleague/create-colleague.module';
import { CreateColleagueReactiveModule } from './pages/create-colleague-reactive/create-colleague-reactive.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WelcomeModule,
    CreateColleagueModule,
    HttpClientModule,
    CreateColleagueReactiveModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
