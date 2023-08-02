import { Injectable } from '@angular/core';
import { CartModel, User, UserRegister, UserSignIn } from '../models/userModels';
import {HttpClient} from '@angular/common/http'
import {Observable, flatMap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl:string = 'http://localhost:2000/user/';
  constructor(private http :HttpClient) { }

  userSignUp(user:UserRegister):Observable<{registration:boolean,token?:string,message:string}>{  
    const url = `${this.baseUrl}register`;
    return this.http.post<{registration:boolean,token:string,message:string}>(url,user);
  };

  userSignIn(user:UserSignIn):Observable<{logIn:boolean,token?:string,message:string}>{
    const url = `${this.baseUrl}signIn`;
    return this.http.post<{logIn:boolean,token?:string,message:string}>(url,user);
  };

  addToCart(proId:string):Observable<{ok:boolean,message:string}>{
    const url = `${this.baseUrl}addToCart/${proId}`;
    return this.http.get<{ok:boolean,message:string}>(url);
  };

  getCartItems():Observable<{data:CartModel[]}>{
    const url = `${this.baseUrl}getCartItems`;
    return this.http.get<{data:CartModel[]}>(url);
  };

  removeFromCart(proId : string,operation : 'del'| 'dec'):Observable<{ok:boolean,message:string,data:CartModel[]}>{
    const url = `${this.baseUrl}removeCartItem/${proId}?operation=${operation}`;
    return this.http.get<{ok:boolean,message:string,data:CartModel[]}>(url);
  };

  checkToken():boolean{
    const token = localStorage.getItem('token');
    return token ? true : false ; 
  };

  logOut():void{
    localStorage.removeItem('token');
  };
 
}
