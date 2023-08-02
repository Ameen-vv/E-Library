import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { authGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'signUp',
    component:SignUpComponent
  },
  {
    path:'signIn',
    component:SignInComponent
  },
  {
    path:'products',
    component:ProductListComponent
  },
  {
    path:'productPage/:id',
    component:ProductPageComponent
  },
  {
    path:'cart',
    component:CartComponent,
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
