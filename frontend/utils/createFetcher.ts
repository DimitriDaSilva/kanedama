import { Transformer } from './types';

export const createFetcher =
  <T>(transformer: Transformer<T>) =>
  (url: string) =>
    fetch(url)
      .then((r) => r.json())
      .then(transformer);
