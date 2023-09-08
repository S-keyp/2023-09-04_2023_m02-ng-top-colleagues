import { Component, Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Vote } from 'src/app/models/vote';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
	selector: 'tc-counter',
	templateUrl: './counter.component.html',
	styleUrls: ['./counter.component.scss']
})
@Injectable()
export class CounterComponent implements OnDestroy {

	voteArray: Vote[] = []
	voteSub: Subscription
	voteData = {
		like: 0,
		hate: 0
	}


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
		console.log(data.vote);
		if(data.vote == 1) this.voteData.like++
		else this.voteData.hate++
		// this.voteArray.push(data.vote)
	}

	ngOnDestroy(): void {
		this.voteSub.unsubscribe()
	}

}
