import { Component } from '@angular/core';
import { CardProductComponent } from "../card-product/card-product.component";

@Component({
  selector: 'app-products',
  imports: [CardProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
