import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../../models/interfaces/product/product';
import { ProductService } from '../../../services/product.service';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-card-product',
  imports: [RouterModule, SlicePipe],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {

  products: Product[] = [];
  loading = true;

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar produtos:', err);
        this.loading = false;
      }
    });
  }
}
