import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePage } from './pages/welcome/welcome.page';
import { CreateColleaguePage } from './pages/create-colleague/create-colleague.page';
import { CreateColleagueReactivePage } from './pages/create-colleague-reactive/create-colleague-reactive.page';
import { ColleagueDetailPage } from './pages/colleague-detail/colleague-detail.page';
import { LoginPage } from './pages/login/login.page';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { title: 'Homepage', path: 'homepage', component: WelcomePage , canActivate: [AuthGuard]},
  { title: 'Login', path: 'login', component: LoginPage },
  { title: 'Colleague detail', path: 'colleagues/:pseudo', component: ColleagueDetailPage , canActivate: [AuthGuard]},
  { title: 'Create a colleague', path: 'create-colleague', component: CreateColleaguePage , canActivate: [AuthGuard]},
  { title: 'Create reactive colleague', path: 'create-reactvie-colleague', component: CreateColleagueReactivePage , canActivate: [AuthGuard]},
  // { path: '**', component: LoginPage },
  { path:'', pathMatch: 'full', redirectTo: '/login'},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
