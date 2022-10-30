import { Producer } from '@cms/models';
import { getProducers } from './getProducers';

export const getProducerById = async (id: string): Promise<Producer> => {
  const producers = await getProducers();

  return producers.find((p) => p.id === id);
};
