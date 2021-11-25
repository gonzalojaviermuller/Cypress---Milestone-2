/// <reference types="cypress" />
import {
    framesContainer,
  } from "/cypress/support/selectors/iFrameSelectors";
  
  export class IFrames {
    constructor() {
      this.defaultText = "This is a sample page";
      this.dummyText = "Test";
    }
  
    visitIFrames() {
      cy.visit("https://demoqa.com/frames");
    }
  
    getFramesContainer() {
      return cy.get(framesContainer);
    }
  
    getIframeDocument(frame) {
      return this.getFramesContainer()
        .get(frame)
        .its("0.contentDocument")
        .should("exist");
    }
  
    getfIframeBody(frame) {
      return this.getIframeDocument(frame)
        .its("body")
        .should("be.visible")
        .then(cy.wrap);
    }
  }
  
  export const iFrames = new IFrames();
  