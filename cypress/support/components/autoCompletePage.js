/// <reference types="cypress" />
import {
    singleContainer,
    multipleContainer,
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
  
    visitAutoComplete() {
      cy.visit("https://demoqa.com/auto-complete");
    }
  
    getMultipleContainer() {
      return cy.get(multipleContainer);
    }
  
    getSingleContainer() {
      return cy.get(singleContainer);
    }
  
    getSingleInput() {
      return this.getSingleContainer().get(singleInput);
    }
  
    getMultipleInput() {
      return this.getMultipleContainer().get(multipleInput);
    }
  
    getSingleValue() {
      return this.getSingleContainer().get(singleSelectedEl);
    }
  
    getMultipleValues(element) {
      return this.getMultipleContainer().get(
        `${multipleSelectedEl}:nth-child(${element})`
      );
    }
  
    getCloseElBtn(element) {
      return this.getMultipleContainer().get(
        `${multipleSelectedEl}:nth-child(${element}) ${closeElBtn}`
      );
    }
  
    getCloseAllElBtn() {
      return this.getMultipleContainer().get(closeAllElBtn);
    }
  }
  
  export const autoComplete = new AutoComplete();
  