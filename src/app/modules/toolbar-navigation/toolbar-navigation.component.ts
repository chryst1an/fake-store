import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-toolbar-navigation',
  imports: [RouterModule],
  templateUrl: './toolbar-navigation.component.html',
  styleUrl: './toolbar-navigation.component.scss'
})
export class ToolbarNavigationComponent {

  constructor(
    public userService: UserService
  ){}

}
