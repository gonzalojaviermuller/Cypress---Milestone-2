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

  visit() {
    cy.visit("/upload-download");
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
export default new UploadDownload();
