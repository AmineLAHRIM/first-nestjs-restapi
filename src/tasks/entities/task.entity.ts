import { TaskStatus } from '../enum/task-status.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column()
  title: string;
  @Column()
  status: TaskStatus;
}
