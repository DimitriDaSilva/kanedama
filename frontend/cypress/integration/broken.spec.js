describe('main page, but broken', () => {
  it('should have everything broken', () => {
    cy.intercept('GET', 'https://randomuser.me/api/', {
      fixture: 'broken.json',
    });
    cy.intercept(
      'GET',
      'https://entreprise.data.gouv.fr/api/sirene/v3/unites_legales/852379890',
      {
        fixture: 'broken.json',
      },
    );
    cy.intercept('GET', 'https://kata.getmansa.com/accounts', {
      fixture: 'broken.json',
    });
    cy.visit('/');
    cy.getByDataCy('error-view-company').should('exist');
    cy.getByDataCy('error-view-accounts').should('exist');
    cy.getByDataCy('error-view-user').should('exist');
  });
});
