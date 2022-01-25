describe('main page', () => {
  before(() => {
    cy.intercept('GET', 'https://randomuser.me/api/', {
      fixture: 'user.json',
    });
    cy.intercept(
      'GET',
      'https://entreprise.data.gouv.fr/api/sirene/v3/unites_legales/852379890',
      {
        fixture: 'company.json',
      },
    );
    cy.intercept('GET', 'https://kata.getmansa.com/accounts', {
      fixture: 'accounts.json',
    });
    cy.visit('/');
  });

  it('should displays right information of user', () => {
    cy.getByDataCy('firstname').contains('John');
    cy.getByDataCy('lastname').contains('Doe');
    cy.getByDataCy('avatar')
      .invoke('attr', 'src')
      .then((src) =>
        expect(src).to.eq(
          'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
        ),
      );
  });

  it('should displays right information of company', () => {
    cy.getByDataCy('company-name').contains('DENOMINATION');
    cy.getByDataCy('siret').contains('SIRET');
    cy.getByDataCy('address').contains('GEO_ADRESSE');
  });

  it('should renders the right numbers of account', () => {
    cy.getByDataCy('account-card').should('have.length', 3);
  });
});
