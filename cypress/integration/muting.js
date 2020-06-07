describe("Muting", () => {
  context("without localStorage", () => {
    before(() => {
      cy.clearLocalStorage();
      cy.visit("/");
    });

    it("mutes and unmutes", () => {
      cy.contains("mute").should("be.visible");
      cy.contains("unmute").should("not.be.visible");

      cy.pressM();

      cy.contains("unmute").should("be.visible");
    });
  });

  context("with localStorage", () => {
    before(() => {
      localStorage.setItem("isMuted", true);
      cy.visit("/");
    });

    it("mutes and unmutes", () => {
      cy.contains("unmute").should("be.visible");

      cy.pressM();

      cy.contains("mute").should("be.visible");
      cy.contains("unmute").should("not.be.visible");
    });
  });
});
