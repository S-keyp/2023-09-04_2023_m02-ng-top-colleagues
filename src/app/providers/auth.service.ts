import { Colleague } from './../models/colleague';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	urlLogin = 'https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2/login'

	constructor(private http: HttpClient, private router: Router) { }

	signIn(pseudo: string, password: string) {
		const user = {
			pseudo: pseudo,
			password: password
		}

		console.log('access token', localStorage.getItem('access_token'));

		return this.http
			.post<any>(`${this.urlLogin}`, user)
			.subscribe(
				(res: any) => {
					console.log('res: ', res)
					localStorage.setItem('access_token', res.jwt);
					this.router.navigate(["/"])
				}
			);
	}

	isLogged(){
		return localStorage.getItem('access_token') != null
	}

	logOut(){
		if (this.isLogged()){
			localStorage.clear()
			this.router.navigate(['login'])
		}
	}

	// get /current_user
	// Authorization: Bearer {{ token}} 
}