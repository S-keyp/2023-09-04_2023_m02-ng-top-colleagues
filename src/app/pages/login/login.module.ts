import { NgModule } from '@angular/core';
import { LoginPage } from './login.page';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [LoginPage]
})
export class LoginModule { }
