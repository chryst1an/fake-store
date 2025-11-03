import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/interfaces/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private API_URL = environment.API_URL

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}/products`);
  }

  getProductsById(id: number): Observable<any>{
    return this.http.get<any>(`${this.API_URL}/products/${id}`);
  }

  getCategories(): Observable<string[]> {
    return this.http.get<any[]>(`${this.API_URL}/products/categories`);
  }

  getProductsByCategory(category: string): Observable<any[]>{
    return this.http.get<any[]>(`${this.API_URL}/category/${category}`);
  }
}
