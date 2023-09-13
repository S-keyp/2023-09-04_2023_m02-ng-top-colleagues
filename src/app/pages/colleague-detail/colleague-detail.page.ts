import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';import { Colleague } from 'src/app/models/colleague';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
  selector: 'tc-colleague-detail',
  templateUrl: './colleague-detail.page.html',
  styleUrls: ['./colleague-detail.page.scss']
})
export class ColleagueDetailPage {
  colleague: any 
  
  constructor(private colleagueService: ColleagueService, private route: ActivatedRoute){
    
    const colleaguePseudo =  this.route.snapshot.paramMap.get('pseudo')
    
    this.colleagueService.getColleague(colleaguePseudo).subscribe(
      data => this.colleague = data
    )
  }
}
