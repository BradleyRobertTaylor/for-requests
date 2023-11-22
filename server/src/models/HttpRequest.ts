import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  Generated,
} from 'typeorm';
import { Bin } from './Bin';

@Entity()
export class HttpRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('uuid')
  publicId: number;

  @Column('jsonb', { nullable: false })
  requestData: string;

  @CreateDateColumn()
  receivedAt: Date;

  @Column()
  httpMethod: string;

  @Column()
  httpPath: string;

  @ManyToOne(() => Bin, (bin) => bin.binsRequests)
  bin: Bin;
}
