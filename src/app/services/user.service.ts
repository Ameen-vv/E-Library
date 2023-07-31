import { Injectable } from '@angular/core';
import { User, UserRegister, UserSignIn } from '../models/userModels';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl:string = 'http://localhost:2000/user/';
  constructor(private http :HttpClient) { }

  userSignUp(user:UserRegister):Observable<{registration:boolean,token?:string,message:string}>{  
    const url = `${this.baseUrl}register`;
    return this.http.post<{registration:boolean,token:string,message:string}>(url,user)
  }

  userSignIn(user:UserSignIn):Observable<{logIn:boolean,token?:string,message:string}>{
    const url = `${this.baseUrl}signIn`;
    return this.http.post<{logIn:boolean,token?:string,message:string}>(url,user);
  }
 
}
