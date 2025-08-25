import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { AuthRequest } from '../../../models/interfaces/user/auth/AuthRequest';
import { LoginComponent } from '../page/login/login.component';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnDestroy{
  private destroy$ = new Subject<void>();

  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private cookieService: CookieService,
    private router: Router,
    public loginPage: LoginComponent
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }


  onSubmitLoginForm(): void {
    if (this.loginForm.value && this.loginForm.valid) {
      this.userService.authUser(this.loginForm.value as AuthRequest)
        .pipe(
          takeUntil(this.destroy$)
        )
        .subscribe({
          next: (response) => {
            if (response) {
              this.userService.saveUserToken(response.token);
              this.loginForm.reset();
              this.errorMessage = '';

              console.log("Sucesso!", response)
              this.router.navigate(['/home']);
            } else{
              this.errorMessage = 'Resposta inválida!'
            }
          },
          error: (err) => {
            this.errorMessage = 'Usuário ou senha incorretors.';
            console.error('Erro no login:', err);
          }
        });
    } else {
      this.errorMessage = 'Por favor, preencha todos os campos corretamente!'
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
