/// <reference types="cypress" />
import {
  singleInput,
  multipleInput,
  multipleSelectedEl,
  singleSelectedEl,
  closeElBtn,
  closeAllElBtn
} from "/cypress/support/selectors/autoCompleteSelectors";

export class AutoComplete {
  constructor() {
    this.colour1 = "Blue";
    this.colour2 = "Green";
    this.incompleteColour2 = "gre";
    this.lowerCaseColour3 = "black";
    this.incorrectColour = "Grey";
  }

  visit() {
    cy.visit("/auto-complete");
  }

  getSingleInput() {
    return cy.get(singleInput);
  }

  getMultipleInput() {
    return cy.get(multipleInput);
  }

  getSingleValue() {
    return cy.get(singleSelectedEl);
  }

  getMultipleValues(element) {
    return cy.get(`${multipleSelectedEl}:nth-child(${element})`);
  }

  getCloseElBtn(element) {
    return cy.get(`${multipleSelectedEl}:nth-child(${element}) ${closeElBtn}`);
  }

  getCloseAllElBtn() {
    return cy.get(closeAllElBtn);
  }
}

export default new AutoComplete();
