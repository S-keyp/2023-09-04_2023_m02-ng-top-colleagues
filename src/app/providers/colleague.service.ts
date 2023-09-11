import { Injectable } from '@angular/core';
import { Colleague } from '../models/colleague';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class ColleagueService {

	baseRoute = "https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2"
	
	data = undefined

	constructor(private http: HttpClient) { }

	getCollegueByPseudo(pseudo:string){
		
		return this.http.get<Colleague>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues/'+pseudo).pipe(
			catchError((error) => {
				return of(null);
			})
		);
	}
	
	async getColleagueList(): Promise<Colleague[] | undefined> {
		const endpoint = this.baseRoute + "/colleagues"

		try {

			const response = await axios.get(endpoint);
			return response.data;

		} catch (error) {

			return undefined;

		}
	}

	async createColleague(colleague: Colleague) {
		const endpoint = this.baseRoute + "/colleagues"
		try{
			const response = await axios.post(endpoint, colleague);
			console.log('Succes Post')
		} catch(error) {
			console.log('error in post Colleague: ', error)
		}
	}

}