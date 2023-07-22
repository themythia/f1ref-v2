/* eslint-disable no-undef */
describe('teams page spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('should visit every team and their drivers on the grid', () => {
    cy.navigateToPageFromMenu('Constructors', '/teams');
    cy.getByTestId('teams-page-container').should('exist');
    cy.getByTestId('team-item').should('have.lengthOf', 10);

    for (let i = 0; i < 10; i++) {
      cy.getByTestId('team-item').eq(i).click();
      cy.getByTestId('loading-spinner').should('not.exist');
      cy.getByTestId('team-page-container').should('exist');
      cy.getByTestId('team-logo').should('exist');
      cy.getByTestId('driver-item').should('have.lengthOf.at.least', 2);
      cy.getByTestId('team-info-toggle').should('exist');

      for (let j = 0; j < 2; j++) {
        cy.getByTestId('driver-item').eq(j).click();
        cy.location('pathname').should('contain', '/drivers/');
        cy.navigateToPageFromMenu('Constructors', '/teams');
        cy.getByTestId('team-item').eq(i).click();
      }

      cy.navigateToPageFromMenu('Constructors', '/teams');
    }
  });
});
