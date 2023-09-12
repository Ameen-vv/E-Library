import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { BookDetails } from 'src/app/models/bookModels';
import { BookService } from 'src/app/services/book.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  id!: string;
  book!: BookDetails;
  loader: boolean = true;
  loader2: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private userService: UserService,
    private toast: HotToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id') as string;
    });
    this.loader = true;
    this.bookService.getBookDetails(this.id).subscribe((response) => {
      this.book = response.data;
      this.loader = false;
    },()=>this.loader = false);
  }

  addToCart(proId: string | undefined): void {
    this.loader2 = true;
    this.userService.addToCart(proId as string).subscribe(
      (response) => {
        response.ok && this.toast.success('Added to Cart');
        this.loader2 = false;
      },
      () => {
        this.loader2 = false;
      }
    );
  }

  buyNow(proId: string | undefined) {
    this.addToCart(proId);
    this.router.navigate(['/cart'])
  }
}
