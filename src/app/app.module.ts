import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { UserDropdownComponent } from './header/user-dropdown.component';
import { PictureMenuComponent } from './header/picture-menu.component';
import { WeeklyFeaturedGiftsComponent } from './header/weekly-featured-gifts.component';
import { GiftsForCardsComponent } from './header/gifts-for-cards.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { GiftsCardComponent } from './body/playlist-card.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    UserDropdownComponent,
    PictureMenuComponent,
    WeeklyFeaturedGiftsComponent,
    GiftsForCardsComponent,
    LayoutMainComponent,
    GiftsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
