describe("Custom keys", () => {
  context("directions", () => {
    before(() => {
      cy.visit("/?up=4&right=2&down=3&left=1");
      cy.pressM();
    });

    it("navigates within the page", () => {
      cy.focused().should("contain", "A1");
      cy.pressKey("1");
      cy.focused().should("contain", "A1");
      cy.pressKey("2");
      cy.focused().should("contain", "A2");
      cy.pressKey("3");
      cy.focused().should("contain", "A6");
      cy.pressKey("1");
      cy.focused().should("contain", "A5");
      cy.pressKey("4");
      cy.focused().should("contain", "A1");
      cy.pressKey("2").pressKey("2").pressKey("2").pressKey("2");
      cy.focused().should("contain", "A4");
      cy.pressKey("1")
        .pressKey("1")
        .pressKey("3")
        .pressKey("3")
        .pressKey("3")
        .pressKey("2");
      cy.focused().should("contain", "A14");
    });
  });

  context("mute", () => {
    before(() => {
      cy.visit("/?mute=1");
    });

    it("mutes and unmutes", () => {
      cy.contains("mute").should("be.visible");
      cy.contains("unmute").should("not.be.visible");

      cy.pressKey("1");

      cy.contains("unmute").should("be.visible");
    });
  });

  context("fast skip", () => {
    before(() => {
      cy.visit("/horizontal-list?leftSkip=1&rightSkip=2");
      cy.pressM();
    });

    it("fast skips", () => {
      cy.pressKey("2");
      cy.focused().should("contain", "B20");
      cy.pressKey("1");
      cy.focused().should("contain", "B1");
    });
  });
});
