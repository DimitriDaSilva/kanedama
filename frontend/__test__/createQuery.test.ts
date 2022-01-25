import { createQuery } from 'utils/createQuery';
import {
  createFetchMock,
  createTransformerMock,
  SWRNoCache,
} from 'utils/testUtils';
import '@testing-library/jest-dom/extend-expect';
import { renderHook } from '@testing-library/react-hooks';
import * as SWR from 'swr';
import { EXPECTED, mockedTransformer, mockSuccessResponse } from './fixtures';

const globalRef: any = global;

globalRef.fetch = createFetchMock(mockSuccessResponse);

jest.spyOn(SWR, 'default');

const EXPECTED_URL = 'EXPECTED_URL';

describe('createQuery', () => {
  const transformer = createTransformerMock(mockedTransformer);

  const useTest = createQuery({
    url: EXPECTED_URL,
    transformer,
  });

  const { result } = renderHook(() => useTest({}), { wrapper: SWRNoCache });

  it('should be call swr with right arguments', () => {
    expect(SWR.default).toHaveBeenCalledWith(
      EXPECTED_URL,
      expect.any(Function),
      {},
    );
  });

  it('should return transformer data', () => {
    const { data } = result.current;
    expect(data).toEqual(EXPECTED);
  });

  it('should be loaded', () => {
    const { isLoading } = result.current;
    expect(isLoading).toBeFalsy();
  });

  it('should not have error', () => {
    const { isError } = result.current;
    expect(isError).toBeFalsy();
  });
});

describe('createQuery with error', () => {
  const useTest = createQuery({
    url: EXPECTED_URL,
    transformer: () => {
      throw new Error('TEST ERROR');
    },
  });

  const { result } = renderHook(() => useTest({}), { wrapper: SWRNoCache });

  it('should be call swr with right arguments', () => {
    expect(SWR.default).toHaveBeenCalledWith(
      EXPECTED_URL,
      expect.any(Function),
      {},
    );
  });

  it('should return no data', () => {
    const { data } = result.current;
    expect(data).toBe(undefined);
  });

  it('should not be loading', () => {
    const { isLoading } = result.current;
    expect(isLoading).toBeFalsy();
  });

  it('should have error', () => {
    const { isError } = result.current;
    expect(isError).toBeTruthy();
  });
});
