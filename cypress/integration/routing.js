describe("Routing", () => {
  before(() => {
    cy.visit("/");
    cy.pressM();
  });

  // We press up twice to make the test not flaky until I find better solution :/
  it("visits each page", () => {
    cy.pressUp().pressUp().pressRight();
    cy.focused().click();
    cy.url().should("include", "/horizontal-list");

    cy.pressUp().pressUp().pressRight().pressRight();
    cy.focused().click();
    cy.url().should("include", "/modal");

    cy.pressUp().pressUp();
    cy.focused().click();
    cy.url().should("eq", Cypress.config().baseUrl);
  });
});
