import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePage } from './pages/welcome/welcome.page';
import { CreateColleaguePage } from './pages/create-colleague/create-colleague.page';
import { CreateColleagueReactivePage } from './pages/create-colleague-reactive/create-colleague-reactive.page';

const routes: Routes = [
  {path: 'homepage', component: WelcomePage},
  {path: 'create-colleague', component: CreateColleaguePage},
  {path: 'create-reactvie-colleague', component: CreateColleagueReactivePage},
  {path: '', pathMatch: 'full', redirectTo: 'homepage'},

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
