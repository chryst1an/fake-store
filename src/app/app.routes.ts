import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { ProductPageComponent } from './modules/product-page/product-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'product',
    component: ProductPageComponent
  }
];
