import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePage } from './pages/welcome/welcome.page';
import { CreateColleaguePage } from './pages/create-colleague/create-colleague.page';
import { CreateColleagueReactivePage } from './pages/create-colleague-reactive/create-colleague-reactive.page';
import { ColleagueDetailPage } from './pages/colleague-detail/colleague-detail.page';

const routes: Routes = [
  { title: 'Homepage', path: 'homepage', component: WelcomePage},
  { title: 'Colleague detail', path: 'colleagues/:pseudo', component: ColleagueDetailPage},
  { title: 'Create a colleague', path: 'create-colleague', component: CreateColleaguePage},
  { title: 'Create reactive colleague', path: 'create-reactvie-colleague', component: CreateColleagueReactivePage},
  { path: '**', pathMatch: 'full', redirectTo: 'homepage'},
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
