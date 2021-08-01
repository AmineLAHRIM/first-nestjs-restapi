import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksRepo } from './tasks.repo';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(TasksRepo) private tasksRepo: TasksRepo) {}
  create(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepo.createTask(createTaskDto);
    //return 'This action adds a new task';
  }

  findAll(filterDto: GetTasksFilterDto): Promise<Task[]> {

    return this.tasksRepo.getTasks(filterDto);
    //return `This action returns all tasks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
