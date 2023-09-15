import { Component, OnInit } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { ColleagueService } from 'src/app/providers/colleague.service';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
	selector: 'tc-colleague-list',
	templateUrl: './colleague-list.component.html',
	styleUrls: ['./colleague-list.component.scss'],
	providers: [ColleagueService]
})
export class ColleagueListComponent implements OnInit {

	colleagueList: Colleague[] | null = [];

	constructor(private colleagueService: ColleagueService, private voteService: VoteService) {	}

	ngOnInit() {
		this.colleagueService.getColleagues().subscribe(
			colleagues => this.colleagueList = colleagues
		)
	}

	async getColleagueList() {
		return await this.colleagueService.getColleagueList()
	}

}