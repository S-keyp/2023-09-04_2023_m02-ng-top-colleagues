import { Component, Input } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { LikeHate } from 'src/app/models/like-hate';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
	selector: 'tc-colleague',
	templateUrl: './colleague.component.html',
	styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {
	@Input() colleague!: Colleague

	constructor(private voteService: VoteService){ }

	handleVote(voteValue: LikeHate) {
		
		this.voteService.voteForColleague(this.colleague.pseudo, LikeHate[voteValue])
		this.voteService.publier({colleague: this.colleague, vote: voteValue})
		
	}

	isValidUrl(url: string): boolean{
		return url.startsWith('https://')
	}
}
