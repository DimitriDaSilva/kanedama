import { createFetcher } from 'utils/createFetcher';
import { createFetchMock, createTransformerMock } from 'utils/testUtils';
import {
  mockSuccessResponse,
  TEST,
  EXPECTED,
  mockedTransformer,
} from './fixtures';

const globalRef: any = global;

globalRef.fetch = createFetchMock(mockSuccessResponse);

describe('createFetcher', () => {
  const transformer = createTransformerMock(mockedTransformer);

  it('should call transfomer function', async () => {
    const fetcher = createFetcher(transformer);
    await fetcher(TEST);
    expect(transformer).toHaveBeenCalled();
  });

  it('should call transfomer function', async () => {
    const fetcher = createFetcher(transformer);
    const result = await fetcher(TEST);
    expect(result).toStrictEqual(EXPECTED);
  });
});
