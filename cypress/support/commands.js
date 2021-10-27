/// <reference types="cypress" />
import "cypress-real-events/support";
import { webTable } from "../support/components/webtable";
import selectors from "../support/selectors";

Cypress.Commands.add("assertSortBy", (firstLine, lastLine) => {
  webTable
    .getCompleteTable()
    .children(selectors.allLines)
    .eq(0)
    .contains(firstLine);
  webTable
    .getCompleteTable()
    .children(selectors.allLines)
    .eq(2)
    .contains(lastLine);
});

Cypress.Commands.add("leaveFirstLineOnly", () => {
  webTable.getDeleteBtn(3).click();
  webTable.getDeleteBtn(2).click();
});

Cypress.Commands.add("createNewLine", () => {
  webTable.getAddBtn().click();
  webTable.getFormFirstName().should("be.empty").type(selectors.dummyValue);
  webTable.getFormLastName().should("be.empty").type(selectors.dummyValue);
  webTable.getFormEmail().should("be.empty").type(`${selectors.dummyValue}@${selectors.dummyValue}.com`)
  webTable.getFormAge().should("be.empty").type("20");
  webTable.getFormSalary().should("be.empty").type("10000");
  webTable.getFormDepartment().should("be.empty").type(selectors.dummyValue);
  webTable.getFormSubmitBtn().click();
});

Cypress.Commands.add("createSecondPage", () => {
  cy.createNewLine();
  cy.createNewLine();
  cy.createNewLine();
  webTable.getRowsSelector().select("5 rows");
});

