import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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
    SellerOptionComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
