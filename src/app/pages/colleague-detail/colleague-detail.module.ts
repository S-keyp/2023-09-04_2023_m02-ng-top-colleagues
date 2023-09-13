import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColleagueDetailPage } from './colleague-detail.page';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ColleagueDetailPage,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ColleagueDetailPage
  ]
})
export class ColleagueDetailModule { }
