import { Component, Input, OnInit } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss'],
  providers: [ColleagueService]
})
export class ColleagueListComponent implements OnInit {
  colleagueList: any = [];

  constructor(private colleagueService: ColleagueService){}



  ngOnInit() {
    this.getColleagueList().then((data) => {
      this.colleagueList = data
    })
  }

  async getColleagueList() {
    return await this.colleagueService.getColleagueList()
  }
  
}
