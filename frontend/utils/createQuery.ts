import { fetcher } from 'utils/fetcher';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';

export interface QueryFactoryOptions<T> {
  url: string;
  transformer: (data: any) => T;
}

export interface QueryFactoryResult<T> {
  isLoading: boolean;
  isError: boolean;
  data: T;
}

type SWROptions =
  | Partial<PublicConfiguration<any, any, (args_0: string) => any>>
  | undefined;

export const createQuery =
  <T>({ url, transformer }: QueryFactoryOptions<T>) =>
  (options: SWROptions = undefined): QueryFactoryResult<T> => {
    const { data: raw, error } = useSWR(url, fetcher, options);
    console.log({ raw });
    const data = raw && transformer(raw);

    const isLoading = !error && !raw;

    const isError = Boolean(error);

    return {
      data,
      isLoading,
      isError,
    };
  };
