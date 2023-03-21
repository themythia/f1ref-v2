/* eslint-disable no-undef */
describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('should visit every track on the calendar', () => {
    const lengthOfSeason = 23;
    cy.getByTestId('menu-button').click();
    cy.getByTestId('menu-container')
      .should('exist')
      .contains('Calendar')
      .should('exist')
      .click();
    cy.location('pathname').should('be.equal', '/calendar');

    cy.getByTestId('calendar-page-container').should('exist');
    cy.getByTestId('calendar-item').should('have.lengthOf', lengthOfSeason);

    for (let i = 0; i < lengthOfSeason; i++) {
      cy.getByTestId('calendar-item').eq(i).click();
      cy.location('pathname').should('be.equal', `/calendar/${i + 1}`);

      cy.getByTestId('menu-button').click();
      cy.getByTestId('menu-container')
        .should('exist')
        .contains('Calendar')
        .should('exist')
        .click();
      cy.location('pathname').should('be.equal', '/calendar');
    }
  });
});
