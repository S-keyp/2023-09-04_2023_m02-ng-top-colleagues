import { Injectable } from '@angular/core';
import axios from 'axios';
import { Subject } from 'rxjs';
import { Vote } from '../models/vote';
import { LikeHate } from '../models/like-hate';

@Injectable({
  	providedIn: 'root'
})
export class VoteService {

	private votes = new Subject<Vote>();

	private baseUrl = 'https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2'


	abonner(){
		return this.votes.asObservable();
	}

	publier(data: Vote){
		this.votes.next(data)
	}

  	async getVotes() {
		const endpoint = this.baseUrl + "/votes"

		try {
			const response = await axios.get(endpoint)
			return response.data
		} catch (error) {
			return undefined
		}
	}

  	async voteForCollegue(pseudo: string, like_hate: string) {
		try {
			await axios.post(this.baseUrl + "/votes", {
				pseudo: pseudo,
				like_hate: like_hate
			});
			
		} catch (error) {
			console.error("Error in function voteForCollegue() : " + error);
		}
	}

	

	handleErrorPostVote(error: any) {
		console.error('ERROR in VoteService', error.message);
	}
	  
}
