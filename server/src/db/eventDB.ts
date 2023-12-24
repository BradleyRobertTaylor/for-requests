import { PGDataSource } from './data-source';
import { Bin } from '../models/Bin';
import { Event } from '../models/Event';
import { EventInputData } from '../types';

export const createEvent = async (
  bin: Bin,
  { httpPath, eventData, httpMethod }: EventInputData,
) => {
  let event = new Event();
  event.bin = bin;
  event.httpPath = httpPath;
  event.httpMethod = httpMethod;
  event.eventData = eventData;

  event = await PGDataSource.getRepository(Event).save(event);
  const { id, bin: _, ...data } = event;
  return data;
};

export const readEventByPublicId = async (publicId: string) => {
  const requestRepository = PGDataSource.getRepository(Event);
  const event = await requestRepository.findOneBy({ publicId });

  return event;
};

export const readEvents = async (bin: Bin) => {
  const events: Event[] = await PGDataSource.createQueryBuilder()
    .relation(Bin, 'events')
    .of(bin)
    .loadMany();

  return events;
};

export const deleteEventByPublicId = async (publicId: string) => {
  const eventRepository = PGDataSource.getRepository(Event);
  let event = await eventRepository.findOneBy({ publicId });

  if (event) {
    event = await eventRepository.remove(event);
    return event;
  }
};
