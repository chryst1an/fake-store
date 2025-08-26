import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ProductsListComponent } from "../product/products-list/products-list.component";

@Component({
  selector: 'app-dashboard',
  imports: [ProductsListComponent, ProductsListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(
    public userService: UserService
  ){}

}
