/// <reference types="cypress" />
import { tabs } from "../support/components/tabsPage.js";
import {
  visibleTabClass,
  visibleTabContentClass,
  disabledClassTab
} from "../support/selectors/tabsSelector";

describe("Tabs", () => {
  beforeEach("Setup", () => {
    tabs.visitTabs();
  });

  it("Starting tab/What tab", () => {
    tabs.getTabContent("whatTab").should("have.class", visibleTabContentClass);
    tabs.getTabHandler("OriginTab").click();
    tabs.getTabHandler("whatTab").should("not.have.class", visibleTabClass);
    tabs.getTabHandler("whatTab").click().should("have.class", visibleTabClass);
  });

  it("Origin tab", () => {
    tabs
      .getTabHandler("OriginTab")
      .click()
      .should("have.class", visibleTabClass);
    tabs
      .getTabContent("OriginTab")
      .should("have.class", visibleTabContentClass);
  });

  it("Use tab", () => {
    tabs.getTabHandler("useTab").click().should("have.class", visibleTabClass);
    tabs.getTabContent("useTab").should("have.class", visibleTabContentClass);
  });

  it("More tab", () => {
    tabs.getTabHandler("moreTab").should("have.class", disabledClassTab);
  });
});
