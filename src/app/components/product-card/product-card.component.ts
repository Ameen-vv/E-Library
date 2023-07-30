import { Component,Input } from '@angular/core';
import { BookCard } from 'src/app/models/bookModels';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() book!:BookCard;
}
