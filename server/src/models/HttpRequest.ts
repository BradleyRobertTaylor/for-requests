import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  Generated,
} from 'typeorm';
import { Bin } from './Bin';
import { RequestInputData } from '../types';

@Entity()
export class HttpRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('uuid')
  publicId: number;

  @Column('simple-json', { nullable: false })
  requestData: RequestInputData['requestData'];

  @CreateDateColumn()
  receivedAt: Date;

  @Column()
  httpMethod: string;

  @Column()
  httpPath: string;

  @ManyToOne(() => Bin, (bin) => bin.requests)
  bin: Bin;
}
