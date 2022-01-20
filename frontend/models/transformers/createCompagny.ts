import { Compagny } from 'models/Compagny';
import { Transformer } from 'utils/types';

export const createCompagny: Transformer<Compagny> = (compagny) => {
  const { denomination, siren, nic_siege, etablissements } =
    compagny.unite_legale;
  return {
    name: denomination,
    SIRET: `${siren} ${nic_siege}`,
    address: etablissements[0].geo_adresse,
  };
};
