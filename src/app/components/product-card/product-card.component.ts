import { Component,Input } from '@angular/core';
import { BookCard } from 'src/app/models/bookModels';
import { Router } from '@angular/router'
import { UserService } from 'src/app/services/user.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() book!:BookCard;

  constructor(private router : Router,private userService : UserService,private toast : HotToastService){};

  getProDetails(id?:string):void{
    this.router.navigate(['/productPage',id]);
  };

  addToCart(proId:string | undefined):void{
    this.userService.addToCart(proId as string).subscribe(
      (response) => {
        response.ok && this.toast.success('Added to Cart');
      }
      )
  };
}
