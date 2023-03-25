import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { SecodNavComponent } from './secod-nav/secod-nav.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CollectionComponent } from './collection/collection.component';
import { CarouselHomeComponent } from './carousel-home/carousel-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PresentationComponent,
    SecodNavComponent,
    UserProfileComponent,
    CollectionComponent,
    CarouselHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
