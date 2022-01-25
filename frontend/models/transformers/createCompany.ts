import { Company } from 'models/Company';
import { Transformer } from 'utils/types';

export const createCompagny: Transformer<Company> = (company) => {
  const { denomination, siren, nic_siege, etablissements } =
    company.unite_legale;
  return {
    name: denomination,
    SIRET: `${siren} ${nic_siege}`,
    address: etablissements[0].geo_adresse,
  };
};
