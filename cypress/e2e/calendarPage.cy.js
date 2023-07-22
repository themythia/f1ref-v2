/* eslint-disable no-undef */
describe('calendar page spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('should visit every track on the calendar', () => {
    const lengthOfSeason = 22;
    cy.navigateToPageFromMenu('Calendar', '/calendar');
    cy.getByTestId('calendar-page-container').should('exist');
    cy.getByTestId('calendar-item').should('have.lengthOf', lengthOfSeason);

    for (let i = 0; i < lengthOfSeason; i++) {
      cy.getByTestId('calendar-item').eq(i).click();
      cy.location('pathname').should('be.equal', `/calendar/${i + 1}`);
      cy.getByTestId('loading-spinner').should('not.exist');
      cy.getByTestId('circuit-map').should('exist');
      cy.getByTestId('circuit-info').should('exist');
      cy.getByTestId('race-schedule').should('exist');

      cy.navigateToPageFromMenu('Calendar', '/calendar');
    }
  });
});
