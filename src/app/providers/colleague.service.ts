import { Injectable } from '@angular/core';
import { Colleague } from '../models/colleague';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, catchError, of } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class ColleagueService {

	baseRoute = "https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2"
	
	data = undefined

	constructor(private http: HttpClient) { }

	getColleague(pseudo: string | any): Observable<Colleague | null> {
		return this.http.get<Colleague>('https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2/colleagues/' + pseudo)
	}

	getColleagues(): Observable<Colleague[]> {
		return this.http.get<Colleague[]>('https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2/colleagues')
	}

	getCollegueByPseudo(pseudo:string | any): Observable<Colleague | null> {
		return this.http.get<Colleague>('https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2/colleagues/' + pseudo).pipe(
			catchError((error) => {
				return of(null);
			})
		);
	}
	
	getBearerConfig(){
		const token = localStorage.getItem('access_token')
		
		return {
			headers: { Authorization: `Bearer ${token}` }
		} 
	}
	
	async getColleagueList(): Promise<Colleague[] | undefined> {
		
		const endpoint = this.baseRoute + "/colleagues"
		const config = this.getBearerConfig()

		try {

			const response = await axios.get(endpoint, config);
			return response.data;

		} catch (error) {

			return undefined;

		}
	}

	async createColleague(colleague: Colleague) {
		const endpoint = this.baseRoute + "/colleagues"
		
		const config = this.getBearerConfig()

		try{
			const response = await axios.post(endpoint, colleague, config);
		} catch(error) {
			console.log('error in post Colleague: ', error)
		}
	}

}