import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from '../shared/components/like-hate/like-hate.component';
import { ColleagueComponent } from './components/colleague/colleague.component';
import { ColleagueListComponent } from '../shared/components/colleague-list/colleague-list.component';
import { ScorePipe } from '../shared/pipes/score.pipe';
import { VotingHistoryComponent } from '../shared/components/voting-history/voting-history.component';
import { CounterComponent } from '../shared/components/counter/counter.component';
import { FormComponent } from './components/forms/form-component/form-component.component';
import { FormsModule } from '@angular/forms';
import { FirstLastValidatorDirective } from './validators/first-last-validator.directive';
import { PseudoValidatorDirective } from './validators/pseudo-validator.directive';
import { CreateColleagueReactiveFormComponent } from './components/forms/create-colleague-reactive-form/create-colleague-reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { LoginFormComponent } from '../shared/components/forms/login-form/login-form.component';
import { LoginModule } from '../pages/login/login.module';


@NgModule({
  declarations: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    ScorePipe,
    VotingHistoryComponent,
    CounterComponent,
    FirstLastValidatorDirective,
    PseudoValidatorDirective,
    FormComponent,
    CreateColleagueReactiveFormComponent,
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    VotingHistoryComponent,
    CounterComponent,
    FormComponent,
    CreateColleagueReactiveFormComponent,
    LoginFormComponent
  ],
  providers: [
    AuthService
  ],
})
export class SharedModule { }
