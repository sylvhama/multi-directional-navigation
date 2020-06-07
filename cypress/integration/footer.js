describe("Footer anchor", () => {
  context("/", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.pressM();
    });

    it("focuses footer anchor from first column", () => {
      cy.pressDown().pressDown().pressDown().pressDown();

      cy.focused()
        .should("have.attr", "href")
        .and("eq", "https://github.com/sylvhama/multi-directional-navigation");
    });

    it("focuses footer anchor from third column", () => {
      cy.pressRight()
        .pressRight()
        .pressDown()
        .pressDown()
        .pressDown()
        .pressDown();

      cy.focused()
        .should("have.attr", "href")
        .and("eq", "https://github.com/sylvhama/multi-directional-navigation");
    });
  });

  context("/horizontal-list", () => {
    beforeEach(() => {
      cy.visit("/horizontal-list");
      cy.pressM();
    });

    it("focuses footer anchor", () => {
      cy.pressDown();

      cy.focused()
        .should("have.attr", "href")
        .and("eq", "https://github.com/sylvhama/multi-directional-navigation");
    });
  });

  context("/modal", () => {
    beforeEach(() => {
      cy.visit("/modal");
      cy.pressM();
    });

    it("focuses footer anchor", () => {
      cy.pressDown();

      cy.focused()
        .should("have.attr", "href")
        .and("eq", "https://github.com/sylvhama/multi-directional-navigation");
    });
  });
});
