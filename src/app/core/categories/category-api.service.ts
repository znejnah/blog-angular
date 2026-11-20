import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map, Observable } from 'rxjs';
import { API_URL } from '../tokens/api-url.token';
import { CATEGORY_ENDPOINTS } from './constants/category-endpoints.constant';
import { CreateCategoryRequestDto } from './dto/requests/create-category.dto';
import { CategoryDto } from './dto/responses/category.dto';
import { mapCategoryDtoToModel } from './mappers/category.mapper';
import { Category } from './models/category.model';

@Service()
export class CategoryApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(API_URL);

  getAll(): Observable<Category[]> {
    return this.http
      .get<CategoryDto[]>(this.baseUrl + CATEGORY_ENDPOINTS.ALL)
      .pipe(map((dtos) => dtos.map((dto) => mapCategoryDtoToModel(dto))));
  }

  getFiltered(category: Category) {
    let params = new HttpParams();

    Object.entries(category).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        params = params.set(key, value);
      }
    });

    return this.http.get<Category>(this.baseUrl + CATEGORY_ENDPOINTS.ALL, {
      params: params,
    });
  }

  createCategory(createCategoryDto: CreateCategoryRequestDto) {
    return this.http.post(this.baseUrl + CATEGORY_ENDPOINTS.CREATE, createCategoryDto);
  }
}
