/// <reference types="cypress" />
import tabs from "../support/components/tabsPage.js";
import {
  visibleTabClass,
  visibleTabContentClass,
  disabledClassTab
} from "../support/selectors/tabsSelector";

describe("Tabs testing", () => {
  beforeEach("Setup", () => {
    tabs.visit();
  });

  it("Checks if 'What' Tab is shown by default when page loads", () => {
    tabs.getTabContent("whatTab").should("have.class", visibleTabContentClass);
    tabs.getTabHandler("OriginTab").click();
    tabs.getTabHandler("whatTab").should("not.have.class", visibleTabClass);
    tabs.getTabHandler("whatTab").click().should("have.class", visibleTabClass);
  });

  it("Checks if 'Origin' tab is shown when clicked", () => {
    tabs
      .getTabHandler("OriginTab")
      .click()
      .should("have.class", visibleTabClass);
    tabs
      .getTabContent("OriginTab")
      .should("have.class", visibleTabContentClass);
  });

  it("Checks if 'Use' tab is shown when clicked", () => {
    tabs.getTabHandler("useTab").click().should("have.class", visibleTabClass);
    tabs.getTabContent("useTab").should("have.class", visibleTabContentClass);
  });

  it("Check if 'More' tab is disabled", () => {
    tabs.getTabHandler("moreTab").should("have.class", disabledClassTab);
  });
});
