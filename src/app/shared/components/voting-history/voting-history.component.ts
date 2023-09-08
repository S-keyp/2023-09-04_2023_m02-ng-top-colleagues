import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LikeHate } from 'src/app/models/like-hate';
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
	voteSub: Subscription

	constructor(private voteService: VoteService) {
		this.voteSub = this.voteService.abonner().subscribe(
			{
				next: this.handleUpdateResponse.bind(this),
				error: this.handleError.bind(this)
			}
		)
	}

	handleUpdateResponse(data: Vote){
		this.voteService.getVotes().then((data) => {
			this.votes = data
		})
		this.votes.unshift(data)
	}

	handleError(error: any){
		console.log(error)
	}

	ngOnInit(): void {
		this.voteService.getVotes().then((data) => {
			this.votes = data
		})
	}

	removeVote(vote: any) {
		this.votes = this.votes.filter(v => v !== vote)
	}
}

