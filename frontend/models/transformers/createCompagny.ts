import { Compagny } from 'models/Compagny';

export const createCompagny = (compagny: any): Compagny => {
  const { denomination, siren, nic_siege, etablissements } =
    compagny.unite_legale;
  return {
    name: denomination,
    SIRET: `${siren} ${nic_siege}`,
    address: etablissements[0].geo_adresse,
  };
};
