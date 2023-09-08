import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Vote } from '../models/vote';
import { ColleagueService } from './colleague.service';
import axios from 'axios';
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
	this.votes.next(data);
  }

  async voteForCollegue(pseudo: string, like_hate: string) {
		try {
			await axios.post(this.baseUrl + "/votes", {
				pseudo: pseudo,
				like_hate: like_hate
			});
			
		} catch (error) {
			console.error("Erreur in function voteForCollegue : " + error);
		}
	}

	async getVotes() {
		const endpoint = this.baseUrl + "/votes"

		try {
			const response = await axios.get(endpoint);
			return response.data;
		} catch (error) {
			return undefined;
		}
	}

	handleErrorPostVote(error: any) {
		console.error('ERROR in VoteService', error.message);
	}
	  
}
