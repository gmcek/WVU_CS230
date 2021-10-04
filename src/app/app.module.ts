import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { WeddingGiftsPageComponent } from './body/weddinggifts-page.component';
import { WeddingDecorPageComponent } from './body/weddingdecor-page.component';
import { BridesmaidGiftsPageComponent } from './body/bridesmaidgifts-page.component';
import { PersonalizedGiftsPageComponent } from './body/personalizedgifts-page.component';
import { JewelryPageComponent } from './body/jewelry-page.component';
import { OnSalePageComponent } from './body/onsale-page.component';
import { NavbarComponent } from './header/navbar.component';
import { EtsySearchBarComponent } from './header/etsy-search-bar.component';
import { PictureMenuComponent } from './body/picture-menu.component';
import { TopBarComponent } from './header/topbar.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { AppRoutingModule } from './app-routing.module';
import { CardComponent } from './body/list.component';
import { ProductCardComponent } from './body/productCard.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './header/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    WeddingGiftsPageComponent,
    WeddingDecorPageComponent,
    BridesmaidGiftsPageComponent,
    PersonalizedGiftsPageComponent,
    JewelryPageComponent,
    OnSalePageComponent,
    NavbarComponent,
    EtsySearchBarComponent,
    PictureMenuComponent,
    BodyComponent,
    CardComponent,
    ProductCardComponent,
    LayoutMainComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
