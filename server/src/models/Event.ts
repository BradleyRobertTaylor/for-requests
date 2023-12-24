import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  BeforeInsert,
} from 'typeorm';
import { Bin } from './Bin';
import { EventInputData } from '../types';
import { generateId } from '../utils/generateId';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  publicId: string;

  @BeforeInsert()
  private beforeInsert() {
    this.publicId = generateId();
  }

  @Column('simple-json', { nullable: false })
  eventData: EventInputData['eventData'];

  @CreateDateColumn()
  receivedAt: Date;

  @Column()
  httpMethod: string;

  @Column()
  httpPath: string;

  @ManyToOne(() => Bin, (bin) => bin.events, {
    onDelete: 'CASCADE',
  })
  bin: Bin;
}
