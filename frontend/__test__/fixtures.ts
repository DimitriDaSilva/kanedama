export const TEST = 'TEST';

export const EXPECTED = { TEST: 'TESTED' };

export const mockSuccessResponse = { TEST };

export const mockedTransformer = ({ TEST }: any) => ({
  TEST: TEST + 'ED',
});
