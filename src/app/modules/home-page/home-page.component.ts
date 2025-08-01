import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { CategoryesComponent } from "../categoryes/categoryes.component";
import { ProductsComponent } from "../products/products.component";

@Component({
  selector: 'app-home-page',
  imports: [HeroComponent, CategoryesComponent, ProductsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
