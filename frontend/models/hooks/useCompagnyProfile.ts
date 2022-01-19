import { createQuery } from 'utils/createQuery';
import { createCompagny } from 'models/transformers/createCompagny';
import { Compagny } from 'models/Compagny';

const url =
  'https://entreprise.data.gouv.fr/api/sirene/v3/unites_legales/852379890';

export const useCompagnyProfile = createQuery<Compagny>({
  url,
  transformer: createCompagny,
});
