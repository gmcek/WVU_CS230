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
import { listComponent } from './body/list.component';
import { ProductCardComponent } from './body/productCard.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './header/user-info.component';
import { TestListComponent } from './body/list-test.component';
import { TestProductCardComponent } from './body/productCard-test.component';
import { FormsModule } from '@angular/forms';
import { EditSignInInfoComponent } from './header/edit-sign-in-info.component';
import { SignInInfoComponent } from './header/sign-in-info.component';
import { EditLoginInfoComponent } from './header/edit-login-info.component';
import { LoginInfoComponent } from './header/login-info.component';

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
    listComponent,
    ProductCardComponent,
    LayoutMainComponent,
    UserInfoComponent,
    TestListComponent,
    TestProductCardComponent,
    EditSignInInfoComponent,
    SignInInfoComponent,
    EditLoginInfoComponent,
    LoginInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
