/// <reference types="cypress" />
import selectors from "/cypress/support/selectors.js";

export class WebTable {
  visitWebTable() {
    cy.visit("https://demoqa.com/webtables");
  }

  getSearchInput() {
    return cy.get(selectors.searchInput);
  }

  getFirstLine() {
    return cy.contains(selectors.lineCierra);
  }

  getSecondLine() {
    return cy.contains(selectors.lineAlden);
  }

  getThirdLine() {
    return cy.contains(selectors.lineKierra);
  }

  getNoLinesMessage() {
    return cy.contains(selectors.noLinesMessage);
  }

  getAnySortByHeaderElement(value) {
    return cy.get(selectors.sortByHeader).eq(`${value}`);
  }

  getCompleteTable() {
    return cy.get(selectors.completeTable);
  }

  getAnyLine(value) {
    return cy.get(selectors.anyLine).eq(value);
  }

  getAnyLineElement(line, element) {
    return cy.get(selectors.anyLine).eq(line).find(selectors.anyLineElement).eq(element);
  }

  getEditBtn() {
    return cy.get(selectors.editBtn);
  }

  getFormFirstName() {
    return cy.get(selectors.formFirstName);
  }

  getFormLastName() {
    return cy.get(selectors.formLastName);
  }

  getFormEmail() {
    return cy.get(selectors.formEmail);
  }

  getFormAge() {
    return cy.get(selectors.formAge);
  }

  getFormSalary() {
    return cy.get(selectors.formSalary);
  }

  getFormDepartment() {
    return cy.get(selectors.formDepartment);
  }

  getFormSubmitBtn() {
    return cy.get(selectors.formSubmitBtn);
  }

  getEditedLine() {
    return cy.contains(selectors.editedLine);
  }

  getFormCloseBtn() {
    return cy.get(selectors.formCloseBtn);
  }

  getDeleteBtn(liineNumber) {
    return cy.get(selectors.deleteBtn + `${liineNumber}`);
  }

  getPreviousBtn() {
    return cy.get(selectors.previousBtn);
  }

  getNextBtn() {
    return cy.get(selectors.nextBtn);
  }

  getAddBtn() {
    return cy.get(selectors.addBtn);
  }

  getRowsSelector() {
    return cy.get(selectors.rowsSelector)
  }

  getPageJumpInput() {
    return cy.get(selectors.pageJumpInput);
  }

  getNewLine() {
    return cy.contains(selectors.dummyValue)
  }
}

export const webTable = new WebTable();