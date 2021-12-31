/// <reference types="cypress" />
import uploadDownload from "../support/components/uploadDownloadPage";

describe("Download/Upload", () => {
  beforeEach("Setup", () => {
    uploadDownload.visit();
  });

  it("Should donwload file", () => {
    uploadDownload.getDownloadBtn().click();
    uploadDownload.getDownloadedFile().should("exist");
  });

  it("Should select file to upload", () => {
    uploadDownload
      .getSelectFileBtn()
      .attachFile(`../fixtures/${uploadDownload.dummyFile}`);
    uploadDownload
      .getUplodedFilePath()
      .should("contain", uploadDownload.dummyFile);
  });
});
