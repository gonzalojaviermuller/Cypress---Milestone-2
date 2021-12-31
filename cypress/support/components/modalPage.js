/// <reference types="cypress" />
import {
  smallModalBtn,
  largeModalBt,
  modalIdentifier,
  closeLargeModalBtn,
  closeSmallModalBtn,
  xModalBtn,
  body,
  modalContainer,
  modalDocument,
  modalContent
} from "/cypress/support/selectors/modalSelectors.js";

export class ModalDialogs {
  visit() {
    cy.visit("/modal-dialogs");
  }

  getModalWindow(size) {
    return cy.get(modalIdentifier + size);
  }

  getSmallModalBtn() {
    return cy.get(smallModalBtn);
  }

  getLargeModalBtn() {
    return cy.get(largeModalBt);
  }

  getCloseLargeModalBtn() {
    return cy.get(closeLargeModalBtn);
  }

  getCloseSmallModalBtn() {
    return cy.get(closeSmallModalBtn);
  }

  getXModalBtn() {
    return cy.get(xModalBtn);
  }

  backdropClick() {
    return cy.get(body).click(0, 0);
  }

  getModalContainer() {
    return cy.get(modalContainer);
  }

  getModalDocument() {
    return cy.get(modalDocument);
  }

  getModalContent() {
    return cy.get(modalContent);
  }
}

export default new ModalDialogs();
