import { Component,OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { BookCard } from 'src/app/models/bookModels';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products!:BookCard[];
  loader:boolean = false;
  constructor(private bookService : BookService,private toast : HotToastService){}; 
  ngOnInit(): void {
      this.loader = true;
      this.bookService.getAllBooks().subscribe(
        (response) =>{
          this.products = response.data;
          this.loader = false;
        },
        () => {
          this.loader = false;
        }
     )}
}
