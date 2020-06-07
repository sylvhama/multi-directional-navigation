describe("/modal", () => {
  before(() => {
    cy.visit("/modal");
    cy.pressM();
  });

  it("navigates within the page", () => {
    cy.focused().should("contain", "Open modal");
    cy.pressEnter();
    cy.focused().should("contain", "⚠️");
    cy.pressUp();
    cy.pressLeft();
    cy.pressDown();
    cy.focused().should("contain", "⚠️");
    cy.pressRight();
    cy.focused().should("contain", "Close modal");
    cy.pressUp();
    cy.pressRight();
    cy.pressDown();
    cy.focused().should("contain", "Close modal");
    cy.pressEnter();
    cy.focused().should("contain", "Open modal");
  });
});
