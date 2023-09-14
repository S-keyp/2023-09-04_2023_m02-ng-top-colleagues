import { Component, Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from 'src/app/models/vote';
import { AuthService } from 'src/app/providers/auth.service';
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


	constructor(private voteService: VoteService, private authService: AuthService) {
		
		this.voteSub = this.voteService.getObservable().subscribe({
			next: this.handleUpdateResponse.bind(this),
			error: this.handleError.bind(this)
		})
	}

	handleError(err: any) {
		console.error(err);
	}
	
	handleUpdateResponse(data: Vote) {
		if(data.vote == LikeHate.LIKE) this.voteData.like++
		else this.voteData.hate++
	}

	ngOnDestroy(): void {
		this.voteSub.unsubscribe()
	}

}
