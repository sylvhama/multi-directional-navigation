describe("/horizontal-list", () => {
  beforeEach(() => {
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

  it("remembers previous focused id", () => {
    cy.pressRight().pressRight();
    cy.focused().should("contain", "B3");
    cy.pressDown();
    cy.focused().should("contain", "Source code");
    cy.pressUp();
    cy.focused().should("contain", "B3");
    cy.pressUp();
    cy.pressRight().pressRight();
    cy.focused().should("contain", "Modal");
    cy.pressDown();
    cy.focused().should("contain", "B3");
  });
});
