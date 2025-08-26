import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AuthRequest } from '../models/interfaces/user/auth/AuthRequest';
import { Observable } from 'rxjs';
import { AuthResponse } from '../models/interfaces/user/auth/AuthResponse';
import { SignupUserResponse } from '../models/interfaces/user/signup/SignupUserResponse';
import { SignupUserRequest } from '../models/interfaces/user/signup/SignupUserRequest';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = environment.API_URL

  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private router: Router
  ) { }

  authUser(requestDatas: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/auth/login`, requestDatas);
  }

  signuoUser(requestDatas: SignupUserRequest): Observable<SignupUserResponse>{
    return this.http.post<SignupUserResponse>(`${this.API_URL}/user`, requestDatas);
  }

  isLoggedIn(): boolean{
    const JWT_TOKEN = this.cookie.get('USER_INFO');
    return JWT_TOKEN ? true : false;
  }

  saveUserToken(token: string): void{
  this.cookie.set('USER_INFO', token);
  }

  logout(): void {
    this.cookie.delete('USER_INFO');
    this.router.navigate(['/home']);
  }
}
