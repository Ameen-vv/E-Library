// cart.component.ts
import { Component } from '@angular/core';

interface Product {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  products: Product[] = [
    { name: 'Product 1', price: 10, quantity: 1 },
    { name: 'Product 2', price: 15, quantity: 2 },
    // Add more products here...
  ];

  increaseQuantity(product: Product) {
    product.quantity++;
  }

  decreaseQuantity(product: Product) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  getTotalAmount(): number {
    return this.products.reduce((total, product) => total + product.price * product.quantity, 0);
  }
}
