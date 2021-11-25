/// <reference types="cypress" />
import uploadDownload from "../support/components/uploadDownloadPage";


describe("Download/Upload", () => {
  beforeEach("Setup", () => {
    uploadDownload.visit();
  });

  it("Download", () => {
    uploadDownload.getDownloadBtn().click();
    uploadDownload.getDownloadedFile().should("exist");
  });

  it("Upload", () => {
    uploadDownload
      .getSelectFileBtn()
      .attachFile(`../fixtures/${uploadDownload.dummyFile}`);
    uploadDownload
      .getUplodedFilePath()
      .should("contain", uploadDownload.dummyFile);
  });
});