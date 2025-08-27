import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ProductsListComponent } from "../product/products-list/products-list.component";
import { ProfileComponent } from "../profile/profile.component";

@Component({
  selector: 'app-dashboard',
  imports: [ProductsListComponent, ProductsListComponent, ProfileComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(
    public userService: UserService
  ){}

  selectedComponent: 'products' | 'profile' = 'products';

  alterList(component: 'products' | 'profile'){
    this.selectedComponent = component;
  }

}
