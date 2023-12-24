import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  BeforeInsert,
} from 'typeorm';
import { Event } from './Event';
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

  @OneToMany(() => Event, (event) => event.bin)
  events: Event[];
}
