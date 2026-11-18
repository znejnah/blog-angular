import { CategoryDto } from '../dto/responses/category.dto';
import { Category } from '../models/category.model';

export function mapCategoryDtoToModel(dto: CategoryDto): Category {
  return {
    id: dto.id,
    title: dto.title,
  };
}
