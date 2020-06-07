describe("Routing", () => {
  before(() => {
    cy.visit("/");
    cy.pressM();
  });

  it("visits each page", () => {
    cy.pressUp().pressRight();
    cy.focused().click();
    cy.url().should("include", "/horizontal-list");

    cy.pressUp().pressRight().pressRight();
    cy.focused().click();
    cy.url().should("include", "/modal");

    cy.pressUp();
    cy.focused().click();
    cy.url().should("eq", Cypress.config().baseUrl);
  });
});
