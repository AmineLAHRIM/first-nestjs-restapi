import { EntityRepository, Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@EntityRepository(Task)
export class TasksRepo extends Repository<Task> {
  async getTasks(): Promise<Task[]> {
    const query = this.createQueryBuilder('task');

    try {
      const tasks = await query.getMany();
      return tasks;
    } catch (e) {
      return e;
    }
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, status } = createTaskDto;
    const task = this.create({
      title,
      status,
    });
    await this.save(task);
    return task;
  }
}
