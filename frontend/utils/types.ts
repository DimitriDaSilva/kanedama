import { PublicConfiguration } from 'swr/dist/types';

export type Transformer<T> = (data: any) => T;

export type SWROptions =
  | Partial<PublicConfiguration<any, any, (args_0: string) => any>>
  | undefined;
