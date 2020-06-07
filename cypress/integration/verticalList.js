describe("/", () => {
  before(() => {
    cy.visit("/");
    cy.pressM();
  });

  it("navigates within the page", () => {
    cy.focused().should("contain", "A1");
    cy.pressLeft();
    cy.focused().should("contain", "A1");
    cy.pressRight();
    cy.focused().should("contain", "A2");
    cy.pressDown();
    cy.focused().should("contain", "A6");
    cy.pressLeft();
    cy.focused().should("contain", "A5");
    cy.pressUp();
    cy.focused().should("contain", "A1");
    cy.pressRight().pressRight().pressRight().pressRight();
    cy.focused().should("contain", "A4");
    cy.pressLeft().pressLeft().pressDown().pressDown().pressDown().pressRight();
    cy.focused().should("contain", "A14");
  });
});
