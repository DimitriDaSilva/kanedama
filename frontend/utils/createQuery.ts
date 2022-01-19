import { fetcher } from 'utils/fetcher';
import useSWR from 'swr';

export interface QueryFactoryOptions<T> {
  url: string;
  transformer: (data: any) => T;
}

export interface QueryFactoryResult<T> {
  isLoading: boolean;
  isError: boolean;
  data: T;
}

export const createQuery =
  <T>({ url, transformer }: QueryFactoryOptions<T>) =>
  (): QueryFactoryResult<T> => {
    const { data: raw, error } = useSWR(url, fetcher);

    const data = raw && transformer(raw);

    const isLoading = !error && !raw;

    const isError = Boolean(error);

    return {
      data,
      isLoading,
      isError,
    };
  };
