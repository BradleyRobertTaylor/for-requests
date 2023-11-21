import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Bin } from './Bin';

@Entity()
export class HttpRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mongoId: string;

  @CreateDateColumn()
  receivedAt: Date;

  @Column()
  httpMethod: string;

  @Column()
  httpPath: string;

  @ManyToOne(() => Bin, (bin) => bin.binsRequests)
  bin: Bin;
}
