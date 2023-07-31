import { Component,Input } from '@angular/core';
import { BookCard } from 'src/app/models/bookModels';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() book!:BookCard;

  constructor(private router : Router){};

  getProDetails(id?:string){
    this.router.navigate(['/productPage',id]);
  }
}
