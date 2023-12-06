import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  Generated,
} from 'typeorm';
import { HttpRequest } from './HttpRequest';

@Entity()
export class Bin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('uuid')
  binPath: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => HttpRequest, (request) => request.bin)
  requests: HttpRequest[];
}
