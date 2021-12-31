/// <reference types="cypress" />
import {
  Container,
  whatTabHandler,
  originTabHandler,
  useTabHandler,
  moreTabHandler,
  whatTabContent,
  originTabContent,
  useTabContent
} from "/cypress/support/selectors/tabsSelector";

export class Tabs {
  visit() {
    cy.visit("/tabs");
  }

  getContainer() {
    return cy.get(Container);
  }

  getTabHandler(tabName) {
    const tabHandler = {
      whatTab: () => {
        return whatTabHandler;
      },
      OriginTab: () => {
        return originTabHandler;
      },
      useTab: () => {
        return useTabHandler;
      },
      moreTab: () => {
        return moreTabHandler;
      }
    };
    return this.getContainer().get(`${tabHandler[tabName]()}`);
  }

  getTabContent(tabName) {
    const tabContent = {
      whatTab: () => {
        return whatTabContent;
      },
      OriginTab: () => {
        return originTabContent;
      },
      useTab: () => {
        return useTabContent;
      },
      moreTab: () => {
        return null;
      }
    };
    return this.getContainer().get(`${tabContent[tabName]()}`);
  }
}

export default new Tabs();
