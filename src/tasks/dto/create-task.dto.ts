import { TaskStatus } from '../enum/task-status.enum';

export class CreateTaskDto {
  title: string;
  status: TaskStatus;
}
