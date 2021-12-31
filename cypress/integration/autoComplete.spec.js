/// <reference types="cypress" />
import autoComplete from "../support/components/autoCompletePage";

describe("Auto complete", () => {
  beforeEach("Setpup", () => {
    autoComplete.visit();
  });

  it("Should get multiple colours and delete them", () => {
    autoComplete
      .getMultipleInput()
      .should("be.empty")
      .type(`${autoComplete.colour1}{enter}`);
    autoComplete
      .getMultipleValues(1)
      .should("contain.text", autoComplete.colour1);
    autoComplete
      .getMultipleInput()
      .should("be.empty")
      .type(`${autoComplete.incompleteColour2}{enter}`);
    autoComplete
      .getMultipleValues(2)
      .should("contain.text", autoComplete.colour2);
    autoComplete
      .getMultipleInput()
      .type(`${autoComplete.incorrectColour}{enter}`);
    autoComplete.getMultipleValues(3).should("not.exist");
    autoComplete.getMultipleInput().blur().should("be.empty");
    autoComplete.getCloseElBtn(2).should("be.visible").click();
    autoComplete.getMultipleValues(2).should("not.exist");
    autoComplete.getCloseAllElBtn().should("be.visible").click();
    autoComplete.getMultipleValues(1).should("not.exist");
  });

  it("Should get a single colour", () => {
    autoComplete
      .getSingleInput()
      .should("be.empty")
      .type(`${autoComplete.colour1}{enter}`);
    autoComplete
      .getSingleValue()
      .should("be.visible")
      .should("have.text", autoComplete.colour1);
    autoComplete
      .getSingleInput()
      .should("be.empty")
      .type(`${autoComplete.incompleteColour2}{enter}`);
    autoComplete
      .getSingleValue()
      .should("be.visible")
      .should("have.text", autoComplete.colour2);
    autoComplete
      .getSingleInput()
      .type(`${autoComplete.incorrectColour}{enter}`)
      .blur();
    autoComplete
      .getSingleValue()
      .should("be.visible")
      .should("have.text", autoComplete.colour2);
  });
});
