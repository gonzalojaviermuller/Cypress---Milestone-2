/// <reference types="cypress" />
import {
    downloadBtn,
    selectFileBtn,
    uploadedFilePath
  } from "/cypress/support/selectors/uploadDownloadSelectors";
  
  export class UploadDownload {
    constructor() {
      this.dummyFile = "sampleFile.jpeg";
    }
  
    visitUploadDownload() {
      cy.visit("https://demoqa.com/upload-download");
    }
  
    getDownloadBtn() {
      return cy.get(downloadBtn);
    }
  
    getDownloadedFile() {
      const path = require("path");
      const downloadsFolder = Cypress.config("downloadsFolder");
      return cy.readFile(path.join(downloadsFolder, this.dummyFile));
    }
  
    getSelectFileBtn() {
      return cy.get(selectFileBtn);
    }
  
    getUplodedFilePath() {
      return cy.get(uploadedFilePath);
    }
  }
  export const uploadDownload = new UploadDownload();