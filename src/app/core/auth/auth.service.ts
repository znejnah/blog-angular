import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { computed, inject, Service, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../../shared/models/user.model';
import { STORAGE_KEYS } from '../constants/storage-keys.constant';
import { API_URL } from '../tokens/api-url.token';
import { AUTH_ENDPOINTS } from './constants/auth-endpoints.constant';
import { LoginRequestDto } from './dto/requests/login-request.dto';
import { LoginResponseDto } from './dto/responses/login-response.dto';
import { AuthError } from './enums/auth-error.enum';

@Service()
export class AuthService {
  private http = inject(HttpClient);
  readonly baseUrl = inject(API_URL);

  private readonly _isLoading = signal<boolean>(false);
  readonly isLoading = this._isLoading.asReadonly();

  private readonly _error = signal<string | null>(null);
  readonly error = this._error.asReadonly();

  private readonly _currentUser = signal<User | null>(null);
  readonly currentUser = this._currentUser.asReadonly();

  readonly isAuthenticated = computed(() => this._currentUser() !== null);

  clearError(): void {
    this._error.set(null);
  }

  async login(loginDto: LoginRequestDto): Promise<boolean> {
    this._isLoading.set(true);
    this._error.set(null);

    try {
      if (environment.mockNetworkDelay > 0) {
        await new Promise((resolve) => setTimeout(resolve, environment.mockNetworkDelay));
      }

      const url = this.baseUrl + AUTH_ENDPOINTS.login;
      const response = await firstValueFrom(this.http.post<LoginResponseDto>(url, loginDto));
      localStorage.setItem(STORAGE_KEYS.accessToken, response.accessToken);
      this._currentUser.set(response.user);
      return true;
    } catch (err: unknown) {
      if (err instanceof HttpErrorResponse) {
        switch (err.status) {
          case 401:
          case 404:
            this._error.set(AuthError.INVALID_CREDENTIALS);
            break;
          default:
            this._error.set(AuthError.SERVER_ERROR);
        }
      } else {
        this._error.set(AuthError.UNKNOWN_ERROR);
      }
      return false;
    } finally {
      this._isLoading.set(false);
    }
  }
}
