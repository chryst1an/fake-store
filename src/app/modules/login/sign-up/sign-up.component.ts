import { Component } from '@angular/core';
import { LoginComponent } from '../page/login/login.component';

@Component({
  selector: 'app-sign-up',
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  constructor(
    public loginPage: LoginComponent
  ){}

}
