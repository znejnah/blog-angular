import { CategoryDto } from '../dto/responses/category.dto';
import { CategoryModel } from '../models/category.model';

export function mapCategoryDtoToModel(dto: CategoryDto): CategoryModel {
  return {
    id: dto.id,
    title: dto.title,
  };
}
