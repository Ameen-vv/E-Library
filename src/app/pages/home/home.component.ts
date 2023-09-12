import { Component,OnInit } from '@angular/core';
import { BookCard } from 'src/app/models/bookModels';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trending!:BookCard[];
  newArrivals!:BookCard[];
  loading:boolean = false;
  constructor(private bookService : BookService){};
  ngOnInit(): void {
    this.loading = true;
    this.bookService.getAllBooks().subscribe(
      (response)=>{
        this.trending = response.data.slice(0,9);
        this.newArrivals = response.data.slice(9);
        this.loading = false; 
      },
      ()=>{
        this.loading = false; 
      }
    )
  }


}
