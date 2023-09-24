import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, Subject } from 'rxjs';
import { Vote } from '../models/vote';
import { LikeHate } from '../models/like-hate';
import { HttpClient } from '@angular/common/http';

@Injectable({
  	providedIn: 'root'
})
export class VoteService {
	voteList: Vote[] = [];

	private voteSubject = new Subject<Vote>();
	
	private baseUrl = 'https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2'


	constructor(private http: HttpClient, ){
		this.loadList()
	}

	getObservable(){
		return this.voteSubject.asObservable();
	}

	publier(data: Vote){
		this.voteSubject.next(data)
	}

	getList(): Vote[] {
		return this.voteList
	}

	loadList(){
		this.http.get<Vote[]>(this.baseUrl + '/votes').subscribe({
			next: (data: Vote[]) => {
				for(let vote of data) {
					this.voteList.push(vote)
				}
			},
			error: error => {
				console.error('error on loadList:', error)
			}
		})
	}

	async voteForColleague(pseudo: string, like_hate: string) {
		try {
			const token = localStorage.getItem('access_token')
			await axios.post(this.baseUrl + "/votes", {
				pseudo: pseudo,
				like_hate: like_hate
			},
			{
				headers: { Authorization: `Bearer ${token}` }
			})

		} catch (error) {
			console.error("Error in function voteForCollegue() : " + error);
		}
	}
	
	// TODO: Finish moving axios to http
	// voteForColleague(pseudo: string, like_hate: string) {
	// 	this.http.post(
	// 		this.baseUrl + '/votes', 
	// 		{
	// 			pseudo: pseudo,
	// 			like_hate: like_hate
	// 		}
	// 	)
	// } 
}
