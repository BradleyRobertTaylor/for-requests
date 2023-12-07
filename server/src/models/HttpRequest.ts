import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  Generated,
  BeforeInsert,
} from 'typeorm';
import { Bin } from './Bin';
import { RequestInputData } from '../types';
import { generateId } from '../utils/generateId';

@Entity()
export class HttpRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  publicId: string;

  @BeforeInsert()
  private beforeInsert() {
    this.publicId = generateId();
  }

  @Column('simple-json', { nullable: false })
  requestData: RequestInputData['requestData'];

  @CreateDateColumn()
  receivedAt: Date;

  @Column()
  httpMethod: string;

  @Column()
  httpPath: string;

  @ManyToOne(() => Bin, (bin) => bin.requests, {
    onDelete: 'CASCADE',
  })
  bin: Bin;
}
