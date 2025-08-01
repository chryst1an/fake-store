import { Component } from '@angular/core';
import { LoginFormComponent } from "../login-form/login-form.component";
import { SignUpComponent } from "../sign-up/sign-up.component";

@Component({
  selector: 'app-login',
  imports: [LoginFormComponent, SignUpComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
