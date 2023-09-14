import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = 'https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2'

  constructor(private http: HttpClient) { 
    this.test()
  }

  test(){
    const res = this.http.get(this.authUrl)
    console.log(res)
  }

  // auth
  // è api call /login
  // storenjwt in jwtservice
  // navgiate /

  //isLogged
  // bool
  // return state of jwt

  // signOut
  // jwtservice.setjwt(null)
  // redirect



}
