import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Colleague } from 'src/app/models/colleague';
import { Vote } from 'src/app/models/vote';
import { ColleagueService } from 'src/app/providers/colleague.service';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
	selector: 'tc-colleague-list',
	templateUrl: './colleague-list.component.html',
	styleUrls: ['./colleague-list.component.scss'],
	providers: [ColleagueService]
})
export class ColleagueListComponent implements OnInit {
	colleagueList: Colleague[] | undefined = [];
	voteSub: Subscription;

	constructor(private colleagueService: ColleagueService, private voteService: VoteService) {


		this.voteSub = this.voteService.getObservable().subscribe(
			{
				next: this.handleUpdateResponse.bind(this),
				error: this.handleError.bind(this)
			}
		)

	}


	handleUpdateResponse() {
		this.getColleagueList().then((data) => {
			this.colleagueList = data
		})
	}

	handleError(error: any) {
		console.log(error)
	}

	ngOnInit() {
		this.getColleagueList().then((data) => {
			this.colleagueList = data
		})
	}

	async getColleagueList() {
		return await this.colleagueService.getColleagueList()
	}

}
