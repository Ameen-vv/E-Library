import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDetails } from 'src/app/models/bookModels';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  id!: string;
  book!:BookDetails;
  loader:boolean = true;
  constructor(private route: ActivatedRoute,private bookService : BookService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') as string;
    });
    this.loader = true;
    this.bookService.getBookDetails(this.id).subscribe(
      (response) => {
        this.book = response.data;
      },
      (error) => {
        console.log(error);
      },
      () =>{
        this.loader = false;
      }
    )
    this.loader = false;
  }

}
