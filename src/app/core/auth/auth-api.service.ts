import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { API_URL } from '../tokens/api-url.token';
import { AUTH_ENDPOINTS } from './constants/auth-endpoints.constant';
import { LoginRequestDto } from './dto/requests/login-request.dto';
import { RegisterRequestDto } from './dto/requests/register-request.dto';
import { LoginResponseDto } from './dto/responses/login-response.dto';

@Service()
export class AuthApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(API_URL);

  login(payload: LoginRequestDto): Observable<LoginResponseDto> {
    const request$ = this.http.post<LoginResponseDto>(this.baseUrl + AUTH_ENDPOINTS.LOGIN, payload);
    return environment.production ? request$ : request$.pipe(delay(environment.mockNetworkDelay));
  }

  register(payload: RegisterRequestDto): Observable<LoginResponseDto> {
    const request$ = this.http.post<LoginResponseDto>(
      this.baseUrl + AUTH_ENDPOINTS.REGISTER,
      payload,
    );
    return environment.production ? request$ : request$.pipe(delay(environment.mockNetworkDelay));
  }
}
