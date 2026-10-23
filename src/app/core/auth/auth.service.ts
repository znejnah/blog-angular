import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { computed, inject, Service, signal } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { APP_ROUTES } from '../constants/app-routes.constant';
import { STORAGE_KEYS } from '../constants/storage-keys.constant';
import { User } from '../models/user.model';
import { API_URL } from '../tokens/api-url.token';
import { AUTH_ENDPOINTS } from './constants/auth-endpoints.constant';
import { LOGIN_ERROR_MAP, REGISTER_ERROR_MAP } from './constants/auth-error-map.constant';
import { LoginRequestDto } from './dto/requests/login-request.dto';
import { RegisterRequestDto } from './dto/requests/register-request.dto';
import { LoginResponseDto } from './dto/responses/login-response.dto';
import { AuthError } from './enums/auth-error.enum';

@Service()
export class AuthService {
  private http = inject(HttpClient);
  private readonly router = inject(Router);
  readonly baseUrl = inject(API_URL);

  private readonly _isLoading = signal<boolean>(false);
  readonly isLoading = this._isLoading.asReadonly();

  private readonly _error = signal<string | null>(null);
  readonly error = this._error.asReadonly();

  private readonly _currentUser = signal<User | null>(null);
  readonly currentUser = this._currentUser.asReadonly();

  readonly isAuthenticated = computed(() => this._currentUser() !== null);

  constructor() {
    this.restoreSession();
  }

  clearError(): void {
    this._error.set(null);
  }

  async login(loginDto: LoginRequestDto): Promise<boolean> {
    return this.executeAuthRequest(
      AUTH_ENDPOINTS.login,
      loginDto,
      (status) => LOGIN_ERROR_MAP[status] ?? AuthError.UNKNOWN_ERROR,
    );
  }

  async register(registerDto: RegisterRequestDto): Promise<boolean> {
    return this.executeAuthRequest(
      AUTH_ENDPOINTS.register,
      registerDto,
      (status) => REGISTER_ERROR_MAP[status] ?? AuthError.UNKNOWN_ERROR,
    );
  }

  logout(): void {
    localStorage.removeItem(STORAGE_KEYS.accessToken);
    localStorage.removeItem(STORAGE_KEYS.currentUser);
    this._currentUser.set(null);
    this._error.set(null);
    this.router.navigate(['/', APP_ROUTES.auth.root, APP_ROUTES.auth.login], { replaceUrl: true });
  }

  private async executeAuthRequest<T>(
    endpoint: string,
    payload: T,
    errorMapper: (status: number) => AuthError,
  ): Promise<boolean> {
    this._isLoading.set(true);
    this._error.set(null);

    try {
      if (!environment.production) {
        await new Promise((resolve) => setTimeout(resolve, environment.mockNetworkDelay));
      }

      const url = this.baseUrl + endpoint;
      const response = await firstValueFrom(this.http.post<LoginResponseDto>(url, payload));

      localStorage.setItem(STORAGE_KEYS.accessToken, response.accessToken);
      localStorage.setItem(STORAGE_KEYS.currentUser, JSON.stringify(response.user));
      this._currentUser.set(response.user);
      this.router.navigate(['/', APP_ROUTES.home.root], { replaceUrl: true });
      return true;
    } catch (error: unknown) {
      if (error instanceof HttpErrorResponse) {
        this._error.set(errorMapper(error.status));
      } else {
        this._error.set(AuthError.UNKNOWN_ERROR);
      }
      return false;
    } finally {
      this._isLoading.set(false);
    }
  }

  private restoreSession(): void {
    const storedUser = localStorage.getItem(STORAGE_KEYS.currentUser);
    const token = localStorage.getItem(STORAGE_KEYS.accessToken);

    if (storedUser && token) {
      try {
        this._currentUser.set(JSON.parse(storedUser));
      } catch (e) {
        this.logout();
      }
    }
  }
}
