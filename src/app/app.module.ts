import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { WelcomeModule } from './pages/welcome/welcome.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WelcomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
