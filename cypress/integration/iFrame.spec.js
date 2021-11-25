/// <reference types="cypress" />
import { iFrames } from "../support/components/iFramePage";
import {
  iframeSampleText,
  bigIframe,
  smallIframe
} from "../support/selectors/iFrameSelectors";

describe("Iframes", () => {
  beforeEach("Setup", () => {
    iFrames.visitIFrames();
  });

  it("Big Iframe", () => {
    iFrames
      .getfIframeBody(bigIframe)
      .find(iframeSampleText)
      .should("have.text", iFrames.defaultText);
    iFrames
      .getfIframeBody(bigIframe)
      .find(iframeSampleText)
      .invoke("text", iFrames.dummyText);
    iFrames
      .getfIframeBody(bigIframe)
      .find(iframeSampleText)
      .should("have.text", iFrames.dummyText);
  });

  it("Small Iframe", () => {
    iFrames
      .getfIframeBody(smallIframe)
      .find(iframeSampleText)
      .should("have.text", iFrames.defaultText);
    iFrames
      .getfIframeBody(smallIframe)
      .find(iframeSampleText)
      .invoke("text", iFrames.dummyText);
    iFrames
      .getfIframeBody(smallIframe)
      .find(iframeSampleText)
      .should("have.text", iFrames.dummyText);
  });
});
