import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-categoryes',
  imports: [NgClass],
  templateUrl: './categoryes.component.html',
  styleUrl: './categoryes.component.scss'
})
export class CategoryesComponent implements OnInit {

  categories: string[] = [];
  selectedCategory: string = 'all';

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getCategories().subscribe((data) => {
      console.log("Categorias: ", data);
      this.categories = data;
    });
  }

  onSelectCategory(category: string) {
    this.selectedCategory = category;
    console.log("Categoria selecionada: ", category);
  }

}
