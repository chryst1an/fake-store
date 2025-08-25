import { Routes, CanActivate } from '@angular/router';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { ProductPageComponent } from './modules/product-page/product-page.component';
import { LoginComponent } from './modules/login/page/login/login.component';
import { authGuard } from './guards/auth-guard.guard';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginGuard } from './guards/login.guard';

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
    canActivate: [LoginGuard]
  },
  {
    path: 'product',
    component: ProductPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  }
];
