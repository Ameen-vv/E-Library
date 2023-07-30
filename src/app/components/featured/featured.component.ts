import { Component,Input } from '@angular/core';
import { BookCard } from 'src/app/models/bookModels';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent {
  @Input() title!:string;
  @Input() books!:BookCard[];
}
