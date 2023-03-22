/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add(
  'getByTestId',
  (selector, options = { timeout: 10000 }) => {
    return cy.get(`[data-testid=${selector}]`, options);
  }
);

Cypress.Commands.add('navigateToPageFromMenu', (menuButton, pathname) => {
  cy.getByTestId('menu-button').click();
  cy.getByTestId('menu-container')
    .should('exist')
    .contains(menuButton)
    .should('exist')
    .click();
  cy.location('pathname').should('be.equal', pathname);
});
