import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {HotToastModule} from '@ngneat/hot-toast'
import { NgIconsModule } from '@ng-icons/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from'@angular/common/http';
import { heroShoppingCart } from '@ng-icons/heroicons/outline'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorHandlerService } from './interceptors/error-handler.service';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignUpComponent,
    SignInComponent,
    AuthFormComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductPageComponent,
    HomeComponent,
    HeroSectionComponent,
    FeaturedComponent,
    FooterComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HotToastModule.forRoot(),
    NgIconsModule.withIcons({ heroShoppingCart }),
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ErrorHandlerService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
