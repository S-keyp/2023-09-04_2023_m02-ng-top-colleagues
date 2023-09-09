import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Colleague } from './../models/colleague';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ColleagueService {

	listColleagues: Colleague[] = [];
	
	baseUrl = 'https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues'

	constructor(private http: HttpClient) {

	}

	getColleagues(): Observable<Colleague[]>{
		return this.http.get<Colleague[]>(this.baseUrl)
	}



	// getCollegues(): Observable<Colleague[]> {
	// 	return this.http.get<Colleague[]>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues');
	// }

	// getColleagueListObservable() {
	// 	this.http
	// 	.get<Colleague[]>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues')
	// 	.subscribe({
	// 		next: (colleagues: Colleague[]) => {
	// 			this.listColleagues = colleagues
	// 		},
	// 		error: err => {
	// 			console.log(err);
	// 		}
	// 	})
	// }
}