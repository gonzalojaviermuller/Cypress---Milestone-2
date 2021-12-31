/// <reference types="cypress" />
import {
  Container,
  } from "/cypress/support/selectors/iFrameSelectors";
  
  export class IFrames {
    constructor() {
      this.defaultText = "This is a sample page";
      this.dummyText = "Test";
    }
  
    visit() {
      cy.visit("/frames");
    }
  
    getContainer() {
      return cy.get(Container);
    }
  
    getIframeDocument(frame) {
      return this.getFramesContainer()
        .get(frame)
        .its("0.contentDocument")
        .should("exist");
    }
  
    getIframeBody(frame) {
      return this.getIframeDocument(frame)
        .its("body")
        .should("be.visible")
        .then(cy.wrap);
    }
  }
  
  export default new IFrames();
  