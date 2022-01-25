import React from 'react';
import { SWRConfig } from 'swr';

export const createFetchMock = (mockSuccessResponse: object) => {
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);

  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });
  return jest.fn().mockImplementation(() => mockFetchPromise);
};

export const createTransformerMock = (implementation: (data: any) => any) =>
  jest
    .fn()
    .mockReturnValue('default')
    .mockImplementation(implementation)
    .mockName('transformer');

export const SWRNoCache = ({ children }: any) => {
  return (
    <SWRConfig value={{ provider: () => new Map() }}>{children}</SWRConfig>
  );
};
