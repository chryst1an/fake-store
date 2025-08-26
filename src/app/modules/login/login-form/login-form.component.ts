import { Component, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { AuthRequest } from '../../../models/interfaces/user/auth/AuthRequest';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnDestroy {
  @Output() loginSuccess = new EventEmitter<any>();
  @Output() changeForm = new EventEmitter<void>();

  private destroy$ = new Subject<void>();

  loginForm!: FormGroup;
  errorMessage: string = '';
  showSuccess = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private cookieService: CookieService,
    private router: Router
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
              this.showSuccess = true;
              this.loginSuccess.emit({});
              this.errorMessage = '';

              this.router.navigate(['/home'], {
                state: { loginSuccess: true }
              });
            } else {
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
