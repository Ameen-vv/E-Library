import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { CartModel } from 'src/app/models/userModels';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
    cart:CartModel[] = [];
    total!:number;
    loader:boolean = true;
    constructor(private userService : UserService,private toast : HotToastService,private router : Router){}
    ngOnInit(): void {
        this.userService.getCartItems().subscribe(
          (response) => {
            this.cart = response.data;
            this.loader = false;
          },
          () => {
            this.loader = false
          }
          )
    }

    removeCartItem(proId : string | undefined){
      Swal.fire({
          title:'Are you sure ?',
          icon:'warning',
          showCancelButton:true,
          confirmButtonText:'yes',
      }).then((result) => {
        if(result.isConfirmed){
          this.userService.removeFromCart(proId as string,'del').subscribe(
            (response) => {
              response.ok && this.toast.success(response.message);
              response.ok && (this.cart = this.cart.filter(item => item.product._id != proId));
            }
          )
        }
      })
    };

    getTotal():number{
        let total = 0;
        for(let i of this.cart){
          let proTotal = i.quantity * i.product.price;
          total += proTotal;
        }
        return total;

    }

    incrementPro(id?:string):void{
      this.cart = this.cart.map((item) => {
        if(item.product._id == id){
          item.quantity += 1;
        }
        return item;
      })
      this.userService.addToCart(id as string).subscribe();
    }

    decrementPro(id?:string):void{
      this.cart = this.cart.filter((item)=>{
        if(item.product._id == id){
          if(item.quantity <= 1){
            return false;
          }else{
            item.quantity -= 1;
            return true;
          }
        }else{
          return true
        }
        
      })
      this.userService.removeFromCart(id as string,'dec').subscribe();
    }

    getProDetails(id?:string):void{
      this.router.navigate(['/productPage',id]);
    };
}
