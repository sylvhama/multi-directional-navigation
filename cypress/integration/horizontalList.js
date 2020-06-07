describe("/horizontal-list", () => {
  before(() => {
    cy.visit("/horizontal-list");
    cy.pressM();
  });

  it("navigates within the page", () => {
    cy.focused().should("contain", "B1");
    cy.pressLeft();
    cy.focused().should("contain", "B1");
    cy.pressRight();
    cy.focused().should("contain", "B2");
    cy.pressRight();
    cy.focused().should("contain", "B3");
    cy.pressEnd();
    cy.focused().should("contain", "B20");
    cy.pressRight();
    cy.focused().should("contain", "B20");
    cy.pressLeft();
    cy.focused().should("contain", "B19");
    cy.pressLeft();
    cy.focused().should("contain", "B18");
    cy.pressHome();
    cy.focused().should("contain", "B1");
  });
});
