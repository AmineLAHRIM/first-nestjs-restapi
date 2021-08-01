import { EntityRepository, Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { HttpException, HttpStatus } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@EntityRepository(Task)
export class TasksRepo extends Repository<Task> {
  async getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
    const { status, search } = filterDto;
    const query = this.createQueryBuilder('task');

    if (status) {
      query.where('task.status = :status', { status });
    }

    const tasks = await query.getMany();

    if (tasks.length == 0) {
      const EMPTY_TASK = 23;
      throw new HttpException(
        {
          code: EMPTY_TASK,
          message: 'empty list here repo',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return tasks;
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
