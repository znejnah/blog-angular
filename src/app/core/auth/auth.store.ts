import { HttpErrorResponse } from '@angular/common/http';
import { computed, inject, Service, signal } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { STORAGE_KEYS } from '../constants/storage-keys.constant';
import { User } from '../models/user.model';
import { AuthApiService } from './auth-api.service';
import { LOGIN_ERROR_MAP, REGISTER_ERROR_MAP } from './constants/auth-error-map.constant';
import { LoginRequestDto } from './dto/requests/login-request.dto';
import { RegisterRequestDto } from './dto/requests/register-request.dto';
import { LoginResponseDto } from './dto/responses/login-response.dto';
import { AuthError } from './enums/auth-error.enum';

@Service()
export class AuthStore {
  private readonly api = inject(AuthApiService);

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

  async login(loginDto: LoginRequestDto): Promise<User> {
    return this.executeAuthRequest(
      this.api.login(loginDto),
      (status) => LOGIN_ERROR_MAP[status] ?? AuthError.UNKNOWN_ERROR,
    );
  }

  async register(registerDto: RegisterRequestDto): Promise<User> {
    return this.executeAuthRequest(
      this.api.register(registerDto),
      (status) => REGISTER_ERROR_MAP[status] ?? AuthError.UNKNOWN_ERROR,
    );
  }

  logout(): void {
    localStorage.removeItem(STORAGE_KEYS.accessToken);
    localStorage.removeItem(STORAGE_KEYS.currentUser);
    this._currentUser.set(null);
    this.clearError();
  }

  private async executeAuthRequest<T>(
    apiRequest$: Observable<LoginResponseDto>,
    errorMapper: (status: number) => AuthError,
  ): Promise<User> {
    this._isLoading.set(true);
    this.clearError();

    try {
      const response = await firstValueFrom(apiRequest$);

      localStorage.setItem(STORAGE_KEYS.accessToken, response.accessToken);
      localStorage.setItem(STORAGE_KEYS.currentUser, JSON.stringify(response.user));

      this._currentUser.set(response.user);

      return response.user;
    } catch (error: unknown) {
      if (error instanceof HttpErrorResponse) {
        this._error.set(errorMapper(error.status));
      } else {
        this._error.set(AuthError.UNKNOWN_ERROR);
      }
      throw error;
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
