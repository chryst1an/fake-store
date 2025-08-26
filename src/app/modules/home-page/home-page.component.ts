import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { CategoryesComponent } from "../categoryes/categoryes.component";
import { ProductsComponent } from "../product/products/products.component";
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [
    HeroComponent,
    CategoryesComponent,
    ProductsComponent,
    NgbAlertModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { loginSuccess?: boolean };

    if (state?.loginSuccess) {
      this.showSuccess = true;
      setTimeout(() => {
        this.showSuccess = false;
      }, 3000);
    }
  }

  showSuccess = false;

  handleLoginSuccess() {
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 3000);
  }

}
