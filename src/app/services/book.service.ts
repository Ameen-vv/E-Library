import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { BookCard, BookDetails } from '../models/bookModels';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl:string = 'https://elibrary-server.onrender.com/book/';
  constructor(private http : HttpClient) { };

  getAllBooks():Observable<{data:BookCard[]}>{
    const url = `${this.baseUrl}`;
    return this.http.get<{data:BookCard[]}>(url);
  }

  getBookDetails(id:string):Observable<{data:BookDetails}>{
    const url = `${this.baseUrl}getBook/${id}`;
    return this.http.get<{data:BookDetails}>(url);
  }
}
