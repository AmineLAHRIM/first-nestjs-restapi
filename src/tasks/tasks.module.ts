import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksRepo } from './tasks.repo';

@Module({
  imports: [TypeOrmModule.forFeature([TasksRepo])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
