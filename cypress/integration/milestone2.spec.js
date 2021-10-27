/// <reference types="cypress" />
import "cypress-real-events/support";
import { webTable } from "../support/components/webtable";
import selectors from "../support/selectors";

describe("SearchBar testing", () => {
  beforeEach("Setup", () => {
    webTable.visitWebTable();
  });

  it("No filter applied", () => {
    webTable.getSearchInput().clear();
    webTable.getAnyLineElement(0, 0).should("have.text", selectors.lineCierra);
    webTable.getAnyLineElement(1, 0).should("have.text", selectors.lineAlden);
    webTable.getAnyLineElement(2, 0).should("have.text", selectors.lineKierra);
  });

  it("Filter with matching elements applied", () => {
    webTable.getSearchInput().type(selectors.lineCierra);
    webTable.getAnyLineElement(0, 0).should("have.text", selectors.lineCierra);
    webTable.getAnyLine(1).should("not.have.text");
  });

  it("Filter without matching elements applied", () => {
    webTable.getSearchInput().type(selectors.dummyValue);
    webTable.getNoLinesMessage();
  });
});

describe("Sort by", () => {
  beforeEach("Setup", () => {
    webTable.visitWebTable();
  });

  it("Sort by First Name", () => {
    webTable.getAnySortByHeaderElement(0).click();
    webTable.getAnyLineElement(0, 0).should("have.text", selectors.lineAlden);
    webTable.getAnySortByHeaderElement(0).click();
    webTable.getAnyLineElement(0, 0).should("have.text", selectors.lineKierra);
  });

  it("Sort by Last Name", () => {
    webTable.getAnySortByHeaderElement(1).click();
    webTable.getAnyLineElement(0, 0).should("have.text", selectors.lineAlden);
    webTable.getAnySortByHeaderElement(1).click();
    webTable.getAnyLineElement(0, 0).should("have.text", selectors.lineCierra);
  });

  it("Sort by Age", () => {
    webTable.getAnySortByHeaderElement(2).click();
    webTable.getAnyLineElement(0, 0).should("have.text", selectors.lineKierra);
    webTable.getAnySortByHeaderElement(2).click();
    webTable.getAnyLineElement(0, 0).should("have.text", selectors.lineAlden);
  });

  it("Sort by Email", () => {
    webTable.getAnySortByHeaderElement(3).click();
    webTable.getAnyLineElement(0, 0).should("have.text", selectors.lineAlden);
    webTable.getAnySortByHeaderElement(3).click();
    webTable.getAnyLineElement(0, 0).should("have.text", selectors.lineKierra);
  });

  it("Sort by Salary", () => {
    webTable.getAnySortByHeaderElement(4).click();
    webTable.getAnyLineElement(0, 0).should("have.text", selectors.lineKierra);
    webTable.getAnySortByHeaderElement(4).click();
    webTable.getAnyLineElement(0, 0).should("have.text", selectors.lineAlden);
  });

  it("Sort by Department", () => {
    webTable.getAnySortByHeaderElement(5).click();
    webTable.getAnyLineElement(0, 0).should("have.text", selectors.lineAlden);
    webTable.getAnySortByHeaderElement(5).click();
    webTable.getAnyLineElement(0, 0).should("have.text", selectors.lineKierra);
  });
});

describe("Edit line", () => {
  beforeEach("Setup", () => {
    webTable.visitWebTable();
  });

  it("Edit option over any line, modify and submit", () => {
    webTable.getEditBtn().click();
    webTable.getFormFirstName().clear().type(selectors.dummyValue);
    webTable.getFormSubmitBtn().click();
    webTable.getAnySortByHeaderElement(0);
    webTable.getNewLine();
  });

  it("Exit after editting without submitting", () => {
    webTable.getEditBtn().click();
    webTable.getFormFirstName().clear().type(selectors.dummyValue);
    webTable.getFormCloseBtn().click();
    webTable.getNewLine().should("not.exist");
  });
});

describe("Delete line", () => {
  beforeEach("Setup", () => {
    webTable.visitWebTable();
  });

  it("2 or more lines", () => {
    webTable.getDeleteBtn(1).click();
    webTable.getFirstLine().should("not.exist");
  });

  it("1 line", () => {
    cy.leaveFirstLineOnly();
    webTable.getDeleteBtn(1).click();
    webTable.getNoLinesMessage();
  });
});

describe("Prev/Next page", () => {
  beforeEach("Setup", () => {
    webTable.visitWebTable();
  });

  it("Only 1 page", () => {
    webTable.getPreviousBtn().should("be.disabled");
    webTable.getNextBtn().should("be.disabled");
  });

  it("With 2 pages", () => {
    cy.createSecondPage();
    webTable.getNextBtn().click();
    webTable.getPageJumpInput().should("have.value", "2");
    webTable.getPreviousBtn().click();
    webTable.getPageJumpInput().should("have.value", "1");
  });
});

describe("Page Jump", () => {
  beforeEach("Setup", () => {
    webTable.visitWebTable();
  });

  it("Only 1 page", () => {
    webTable.getPageJumpInput().type("2");
    webTable.getPageJumpInput().should("have.value", "1");
  });

  it("With 2 pages", () => {
    cy.createSecondPage();
    webTable.getPageJumpInput().type("2");
    webTable.getPageJumpInput().should("have.value", "2");
  });
});

describe("Rows displayed", () => {
  beforeEach("Setup", () => {
    webTable.visitWebTable();
  });

  it("5 rows option selected", () => {
    webTable.getRowsSelector().select("5 rows");
    webTable
      .getCompleteTable()
      .find(selectors.anyLine)
      .its("length")
      .should("eq", 5);
  });

  it("10 rows option selected", () => {
    webTable.getRowsSelector().select("10 rows");
    webTable
      .getCompleteTable()
      .find(selectors.anyLine)
      .its("length")
      .should("eq", 10);
  });

  it("20 rows option selected", () => {
    webTable.getRowsSelector().select("20 rows");
    webTable
      .getCompleteTable()
      .find(selectors.anyLine)
      .its("length")
      .should("eq", 20);
  });

  it("25 rows option selected", () => {
    webTable.getRowsSelector().select("25 rows");
    webTable
      .getCompleteTable()
      .find(selectors.anyLine)
      .its("length")
      .should("eq", 25);
  });

  it("50 rows option selected", () => {
    webTable.getRowsSelector().select("50 rows");
    webTable
      .getCompleteTable()
      .find(selectors.anyLine)
      .its("length")
      .should("eq", 50);
  });

  it("100 rows option selected", () => {
    webTable.getRowsSelector().select("100 rows");
    webTable
      .getCompleteTable()
      .find(selectors.anyLine)
      .its("length")
      .should("eq", 100);
  });
});

describe("Add new line", () => {
  beforeEach("Setup", () => {
    webTable.visitWebTable();
  });

  it("First Add", () => {
    cy.createNewLine();
    webTable.getNewLine();
  });

  it("Add after non-submitted changes", () => {
    webTable.getAddBtn().click();
    webTable.getFormFirstName().should("be.empty").type(selectors.dummyValue);
    webTable.getFormCloseBtn().click();
    webTable.getAddBtn().click();
    webTable.getFormFirstName().click().should("have.value", selectors.dummyValue);
  });
});

describe("Registration Form", () => {
  beforeEach("Setup", () => {
    webTable.visitWebTable();
    webTable.getAddBtn().click();
    webTable.getFormFirstName();
  });

  it("Submit with empty fields", () => {
    webTable.getFormSubmitBtn().click();
    webTable
      .getFormSalary()
      .should("have.css", "border-color", "rgb(220, 53, 69)");
    webTable.getFormSalary().type("4");
    webTable
      .getFormSalary()
      .should("have.css", "border-color", "rgb(40, 167, 69)");
  });

  it("Submit with incorrectly completed fields", () => {
    webTable.getFormSalary().type(selectors.dummyValue);
    webTable.getFormSubmitBtn().click();
    webTable
      .getFormSalary()
      .should("have.css", "border-color", "rgb(220, 53, 69)");
    webTable.getFormSalary().clear().type("4");
    webTable
      .getFormSalary()
      .should("have.css", "border-color", "rgb(40, 167, 69)");
  });
});
