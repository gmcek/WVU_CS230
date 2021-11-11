import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { WeddingGiftsPageComponent } from './body/weddinggifts-page.component';
import { WeddingDecorPageComponent } from './body/weddingdecor-page.component';
import { BridesmaidGiftsPageComponent } from './body/bridesmaidgifts-page.component';
import { PersonalizedGiftsPageComponent } from './body/personalizedgifts-page.component';
import { JewelryPageComponent } from './body/jewelry-page.component';
import { OnSalePageComponent } from './body/onsale-page.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: 'home', component: BodyComponent },
  { path: 'weddinggifts', component: WeddingGiftsPageComponent},
  { path: 'weddingdecor', component: WeddingDecorPageComponent},
  { path: 'bridesmaidgifts', component: BridesmaidGiftsPageComponent},
  { path: 'personalizedgifts', component: PersonalizedGiftsPageComponent},
  { path: 'jewelry', component: JewelryPageComponent},
  { path: 'onsale', component: OnSalePageComponent},
  { path: 'auth', component: AuthComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
