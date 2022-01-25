import { createQuery } from 'utils/createQuery';
import { createCompagny } from 'models/transformers/createCompany';
import { Company } from 'models/Company';
import url from 'constants/urls';

export const useCompagny = createQuery<Company>({
  url: url.COMPAGNY,
  transformer: createCompagny,
});
