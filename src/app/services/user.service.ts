import { Injectable } from '@angular/core';
import { User, UserRegister } from '../models/userModels';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string = 'http://localhost:2000/user/';
  constructor(private http :HttpClient) { }

  userSignUp(user:UserRegister):Observable<{registration:boolean,token:string}>{  
    const url = `${this.baseUrl}register`;
    return this.http.post<{registration:boolean,token:string}>(url,user)
  }
}
