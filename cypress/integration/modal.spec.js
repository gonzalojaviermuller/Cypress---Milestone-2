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
    // Closing by close button
    modalDialogs.getCloseSmallModalBtn().click();
    modalDialogs.getSmallModalBtn().click();
    modalDialogs.getModalDocument().should("have.class", smallModalClass);
    // Closing by X button
    modalDialogs.getXModalBtn().click();
    modalDialogs.getSmallModalBtn().click();
    modalDialogs.getModalDocument().should("have.class", smallModalClass);
    // Closing by clicking backdrop
    modalDialogs.backdropClick();
  });

  it("Should open and close large modal", () => {
    modalDialogs.getLargeModalBtn().click();
    modalDialogs.getModalDocument().should("have.class", largeModalClass);
    // Closing by close button
    modalDialogs.getCloseLargeModalBtn().click();
    modalDialogs.getLargeModalBtn().click();
    modalDialogs.getModalDocument().should("have.class", largeModalClass);
    // Closing by X button
    modalDialogs.getXModalBtn().click();
    modalDialogs.getLargeModalBtn().click();
    modalDialogs.getModalDocument().should("have.class", largeModalClass);
    // Closing by clicking backdrop
    modalDialogs.backdropClick();
  });
});
