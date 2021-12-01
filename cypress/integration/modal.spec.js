/// <reference types="cypress" />
import modalDialogs from "../support/components/modalPage";
import {
  largeModalClass,
  smallModalClass
} from "../support/selectors/modalSelectors";

describe("Modals", () => {
  beforeEach("Setup", () => {
    modalDialogs.visit();
  });

  it("Should open and close small modal", () => {
    modalDialogs.getSmallModalBtn().click();
    modalDialogs.getModalDocument().should("have.class", smallModalClass);
    modalDialogs.getModalContent().should("be.visible");
    // Closing by close button
    modalDialogs.getCloseSmallModalBtn().click();
    modalDialogs.getModalContent().should("not.exist");
    modalDialogs.getSmallModalBtn().click();
    modalDialogs.getModalDocument().should("have.class", smallModalClass);
    modalDialogs.getModalContent().should("be.visible");
    // Closing by X button
    modalDialogs.getXModalBtn().click();
    modalDialogs.getModalContent().should("not.exist");
    modalDialogs.getSmallModalBtn().click();
    modalDialogs.getModalDocument().should("have.class", smallModalClass);
    modalDialogs.getModalContent().should("be.visible");
    // Closing by clicking backdrop
    modalDialogs.backdropClick();
    modalDialogs.getModalContent().should("not.exist");
  });

  it("Should open and close large modal", () => {
    modalDialogs.getLargeModalBtn().click();
    modalDialogs.getModalDocument().should("have.class", largeModalClass);
    modalDialogs.getModalContent().should("be.visible");
    // Closing by close button
    modalDialogs.getCloseLargeModalBtn().click();
    modalDialogs.getModalContent().should("not.exist");
    modalDialogs.getLargeModalBtn().click();
    modalDialogs.getModalDocument().should("have.class", largeModalClass);
    modalDialogs.getModalContent().should("be.visible");
    // Closing by X button
    modalDialogs.getXModalBtn().click();
    modalDialogs.getModalContent().should("not.exist");
    modalDialogs.getLargeModalBtn().click();
    modalDialogs.getModalDocument().should("have.class", largeModalClass);
    modalDialogs.getModalContent().should("be.visible");
    // Closing by clicking backdrop
    modalDialogs.backdropClick();
    modalDialogs.getModalContent().should("not.exist");
  });
});
