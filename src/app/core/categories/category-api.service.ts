import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { API_URL } from '../tokens/api-url.token';
import { CATEGORY_ENDPOINTS } from './constants/category-endpoints.constant';
import { CategoryDto } from './dto/responses/category.dto';
import { mapCategoryDtoToModel } from './mappers/category.mapper';
import { CategoryModel } from './models/category.model';

@Service()
export class CategoryApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(API_URL);

  async getAll(): Promise<CategoryModel[]> {
    const dtos = await firstValueFrom(
      this.http.get<CategoryDto[]>(this.baseUrl + CATEGORY_ENDPOINTS.ALL),
    );
    return dtos.map((dto) => mapCategoryDtoToModel(dto));
  }
}
