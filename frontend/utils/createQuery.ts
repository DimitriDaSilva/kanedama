import { SWROptions, Transformer } from './types';
import { createFetcher } from 'utils/createFetcher';
import useSWR from 'swr';

export interface QueryFactoryOptions<T> {
  url: string;
  transformer: Transformer<T>;
}

export interface QueryFactoryResult<T> {
  isLoading: boolean;
  isError: boolean;
  data: T;
}

export const createQuery =
  <T>({ url, transformer }: QueryFactoryOptions<T>) =>
  (options?: SWROptions): QueryFactoryResult<T> => {
    const { data, error } = useSWR(url, createFetcher<T>(transformer), options);

    const isLoading = !error && !data;

    const isError = Boolean(error);

    return {
      data,
      isLoading,
      isError,
    };
  };
