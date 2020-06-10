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

    // We press up twice to make the test not flaky until I find better solution :/
    cy.pressUp().pressUp();
    cy.focused().click();
    cy.url().should("eq", Cypress.config().baseUrl);
  });
});
