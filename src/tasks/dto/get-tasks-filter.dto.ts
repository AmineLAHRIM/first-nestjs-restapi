import { IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../enum/task-status.enum';

export class GetTasksFilterDto {
  @IsOptional()
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
