/* eslint-disable no-undef */
describe('drivers page spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('should visit every driver on the grid', () => {
    cy.navigateToPageFromMenu('Drivers', '/drivers');
    cy.getByTestId('drivers-page-container').should('exist');
    cy.getByTestId('driver-item').should('have.lengthOf.at.least', 22);

    for (let i = 0; i < 20; i++) {
      cy.getByTestId('driver-item').eq(i).click();
      cy.getByTestId('loading-spinner').should('not.exist');
      cy.getByTestId('driver-page-container').should('exist');
      cy.getByTestId('driver-image').should('exist');
      cy.getByTestId('race-title').should('exist');
      cy.getByTestId('driver-bio').should('exist');
      cy.getByTestId('driver-info-toggle').should('exist');
      cy.navigateToPageFromMenu('Drivers', '/drivers');
    }
  });
});
