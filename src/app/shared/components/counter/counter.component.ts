import { Component, Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription, interval } from 'rxjs';
import { Colleague } from 'src/app/models/colleague';
import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from 'src/app/models/vote';
import { ColleagueService } from 'src/app/providers/colleague.service';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
	selector: 'tc-counter',
	templateUrl: './counter.component.html',
	styleUrls: ['./counter.component.scss']
})
@Injectable()
export class CounterComponent implements OnDestroy {

	voteSub: Subscription
	voteData: Vote | undefined
	obs1 = interval(400)

	constructor(private voteService: VoteService) {
		this.voteSub = this.voteService.abonner().subscribe({
			next: this.handleUpdateResponse.bind(this),
			error: this.handleError.bind(this)
		})
	}

	handleError(err: any) {
		console.error(err);
	}
	
	handleUpdateResponse(data: Vote) {
		this.voteData = data
	}

	ngOnDestroy(): void {
		this.voteSub.unsubscribe()
	}

	postVote() { //colleague: Colleague, vote: LikeHate
		this.voteService.voteForCollegue("jor01", "LIKE")
	}

}
