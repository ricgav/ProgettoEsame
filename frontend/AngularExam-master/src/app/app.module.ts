import {NgModule, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { SecodNavComponent } from './secod-nav/secod-nav.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import {FormsModule} from "@angular/forms";
import { SellerOptionComponent } from './seller-option/seller-option.component';
import {NgToastModule} from 'ng-angular-popup';
import { HttpClientModule } from '@angular/common/http';
import { MyProductsComponent } from './my-products/my-products.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PresentationComponent,
    SecodNavComponent,
    UserProfileComponent,
    LoginComponent,
    OrderComponent,
    ProductComponent,
    OrderComponent,
    CartComponent,
    SellerOptionComponent,
    MyProductsComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        NgToastModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{
}
