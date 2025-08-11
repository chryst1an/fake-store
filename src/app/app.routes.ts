import { Routes } from '@angular/router';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { ProductPageComponent } from './modules/product-page/product-page.component';
import { LoginComponent } from './modules/login/page/login/login.component';
import { authGuard } from './guards/auth-guard.guard';

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
    component: LoginComponent,
  },

  {
    path: 'product',
    component: ProductPageComponent
  }
];
