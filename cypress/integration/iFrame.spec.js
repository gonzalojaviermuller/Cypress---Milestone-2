/// <reference types="cypress" />
import iFrames from "../support/components/iFramePage";
import {
  iframeSampleText,
  bigIframe,
  smallIframe
} from "../support/selectors/iFrameSelectors";

describe("Iframes", () => {
  beforeEach("Setup", () => {
    iFrames.visit();
  });

  it("Should access big Iframe and change text", () => {
    iFrames
      .getIframeBody(bigIframe)
      .find(iframeSampleText)
      .should("have.text", iFrames.defaultText);
    iFrames
      .getIframeBody(bigIframe)
      .find(iframeSampleText)
      .invoke("text", iFrames.dummyText);
    iFrames
      .getIframeBody(bigIframe)
      .find(iframeSampleText)
      .should("have.text", iFrames.dummyText);
  });

  it("Should access small Iframe and change text", () => {
    iFrames
      .getIframeBody(smallIframe)
      .find(iframeSampleText)
      .should("have.text", iFrames.defaultText);
    iFrames
      .getIframeBody(smallIframe)
      .find(iframeSampleText)
      .invoke("text", iFrames.dummyText);
    iFrames
      .getIframeBody(smallIframe)
      .find(iframeSampleText)
      .should("have.text", iFrames.dummyText);
  });
});
