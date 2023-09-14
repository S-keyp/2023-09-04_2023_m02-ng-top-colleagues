import { Component, OnInit } from '@angular/core';
import { Vote } from 'src/app/models/vote';
import { ColleagueService } from 'src/app/providers/colleague.service';
import { VoteService } from 'src/app/providers/vote.service';


@Component({
	selector: 'tc-voting-history',
	templateUrl: './voting-history.component.html',
	styleUrls: ['./voting-history.component.scss'],
	providers: [ColleagueService]
})
export class VotingHistoryComponent implements OnInit {
	votes: Vote[] = [];

	constructor(private voteService: VoteService) { }

	ngOnInit(): void {
		this.votes = this.voteService.getList()

		this.voteService.getObservable().subscribe({
			next: vote => this.votes.unshift(vote)
		})
	}

	removeVote(vote: Vote) {
		this.votes = this.votes.filter(v => v !== vote)
	}
}

