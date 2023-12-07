import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  Generated,
  BeforeInsert,
} from 'typeorm';
import { HttpRequest } from './HttpRequest';
import { generateId } from '../utils/generateId';

@Entity()
export class Bin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  binPath: string;

  @BeforeInsert()
  private beforeInsert() {
    this.binPath = generateId();
  }

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => HttpRequest, (request) => request.bin)
  requests: HttpRequest[];
}
