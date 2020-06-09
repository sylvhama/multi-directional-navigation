Cypress.Commands.add("pressKey", (key = "") => {
  cy.focused().type(key, { delay: 250 });
});

Cypress.Commands.add("pressUp", () => {
  cy.pressKey("{uparrow}");
});

Cypress.Commands.add("pressDown", () => {
  cy.pressKey("{downarrow}");
});

Cypress.Commands.add("pressLeft", () => {
  cy.pressKey("{leftarrow}");
});

Cypress.Commands.add("pressRight", () => {
  cy.pressKey("{rightarrow}");
});

Cypress.Commands.add("pressEnter", () => {
  cy.pressKey("{enter}");
});

Cypress.Commands.add("pressHome", () => {
  cy.pressKey("{home}");
});

Cypress.Commands.add("pressEnd", () => {
  cy.pressKey("{end}");
});

Cypress.Commands.add("pressM", () => {
  cy.pressKey("m");
});
