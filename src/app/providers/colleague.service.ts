import { Injectable } from '@angular/core';
import { Colleague } from '../models/colleague';
import axios from 'axios';
import Axios from 'axios-observable'


@Injectable({
	providedIn: 'root'
})
export class ColleagueService {

	baseRoute = "https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2"
	
	data = undefined

	constructor() { }

	
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
			const response = await axios.post(endpoint)
			console.log('Succes Post')
		} catch(error) {
			console.log('error in post Colleague: ', error)
		}
	}

}
