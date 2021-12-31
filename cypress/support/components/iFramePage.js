/// <reference types="cypress" />

export class IFrames {
  constructor() {
    this.defaultText = "This is a sample page";
    this.dummyText = "Test";
  }

  visit() {
    cy.visit("/frames");
  }

  getIframeDocument(frame) {
    return cy.get(frame).its("0.contentDocument").should("exist");
  }

  getIframeBody(frame) {
    return this.getIframeDocument(frame)
      .its("body")
      .should("be.visible")
      .then(cy.wrap);
  }
}

export default new IFrames();
