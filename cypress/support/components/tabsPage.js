/// <reference types="cypress" />
import {
    tabsContainer,
    whatTabHandler,
    originTabHandler,
    useTabHandler,
    moreTabHandler,
    whatTabContent,
    originTabContent,
    useTabContent
  } from "/cypress/support/selectors/tabsSelector";
  
  export class Tabs {
    visitTabs() {
      cy.visit("https://demoqa.com/tabs");
    }
  
    getTabsContainer() {
      return cy.get(tabsContainer);
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
      return this.getTabsContainer().get(`${tabHandler[tabName]()}`);
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
      return this.getTabsContainer().get(`${tabContent[tabName]()}`);
    }
  }
  
  export const tabs = new Tabs();
  