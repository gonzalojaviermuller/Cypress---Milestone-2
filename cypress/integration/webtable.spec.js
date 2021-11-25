/// <reference types="cypress" />
import { webTable } from "../support/components/webtablePage";

beforeEach("Setup", () => {
  webTable.visitWebTable();
});

describe("SearchBar testing", () => {
  it("No filter applied", () => {
    webTable.getSearchInput().clear();
    webTable.getTableCell(1, 1).should("have.text", webTable.lineCierra);
    webTable.getTableCell(2, 1).should("have.text", webTable.lineAlden);
    webTable.getTableCell(3, 1).should("have.text", webTable.lineKierra);
  });

  it("Filter with matching elements applied", () => {
    webTable.getSearchInput().type(webTable.lineCierra);
    webTable.getTableCell(1, 1).should("have.text", webTable.lineCierra);
    webTable.getTableCell(2, 1).should("not.have.text");
  });

  it("Filter without matching elements applied", () => {
    webTable.getSearchInput().type(webTable.dummyValue);
    webTable.getNoLinesMessage();
  });
});

describe("Sort by", () => {
  it("Sort by First Name", () => {
    const column = 1;
    // desc sorting
    webTable.getSortByHeader(column).click();
    webTable.getArrayFromColumn(column).then(columnContent => {
      let actualContent = columnContent.slice();
      cy.wrap(actualContent).should("deep.eq", columnContent.sort());
    });
    // asc sorting
    webTable.getSortByHeader(column).click();
    webTable.getArrayFromColumn(column).then(columnContent => {
      let actualContent = columnContent.slice();
      cy.wrap(actualContent).should("deep.eq", columnContent.sort().reverse());
    });
  });

  it("Sort by Last Name", () => {
    const column = 2;
    // desc sorting
    webTable.getSortByHeader(column).click();
    webTable.getArrayFromColumn(column).then(columnContent => {
      let actualContent = columnContent.slice();
      cy.wrap(actualContent).should("deep.eq", columnContent.sort());
    });
    // asc sorting
    webTable.getSortByHeader(column).click();
    webTable.getArrayFromColumn(column).then(columnContent => {
      let actualContent = columnContent.slice();
      cy.wrap(actualContent).should("deep.eq", columnContent.sort().reverse());
    });
  });

  it("Sort by Age", () => {
    const column = 3;
    // desc sorting
    webTable.getSortByHeader(column).click();
    webTable.getArrayFromColumn(column).then(columnContent => {
      let actualContent = columnContent.slice();
      cy.wrap(actualContent).should(
        "deep.eq",
        columnContent.sort((a, b) => {
          return a - b;
        })
      );
    });
    // asc sorting
    webTable.getSortByHeader(column).click();
    webTable.getArrayFromColumn(column).then(columnContent => {
      let actualContent = columnContent.slice();
      cy.wrap(actualContent).should(
        "deep.eq",
        columnContent
          .sort((a, b) => {
            return a - b;
          })
          .reverse()
      );
    });
  });

  it("Sort by Email", () => {
    const column = 4;
    // desc sorting
    webTable.getSortByHeader(column).click();
    webTable.getArrayFromColumn(column).then(columnContent => {
      let actualContent = columnContent.slice();
      cy.wrap(actualContent).should("deep.eq", columnContent.sort());
    });
    // asc sorting
    webTable.getSortByHeader(column).click();
    webTable.getArrayFromColumn(column).then(columnContent => {
      let actualContent = columnContent.slice();
      cy.wrap(actualContent).should("deep.eq", columnContent.sort().reverse());
    });
  });

  it("Sort by Salary", () => {
    const column = 5;
    // desc sorting
    webTable.getSortByHeader(column).click();
    webTable.getArrayFromColumn(column).then(columnContent => {
      let actualContent = columnContent.slice();
      console.log(actualContent);
      console.log(columnContent.sort());
      cy.wrap(actualContent).should(
        "deep.eq",
        columnContent.sort((a, b) => {
          return a - b;
        })
      );
    });
    // asc sorting
    webTable.getSortByHeader(column).click();
    webTable.getArrayFromColumn(column).then(columnContent => {
      let actualContent = columnContent.slice();
      console.log(actualContent);
      cy.wrap(actualContent).should(
        "deep.eq",
        columnContent
          .sort((a, b) => {
            return a - b;
          })
          .reverse()
      );
    });
  });

  it("Sort by Department", () => {
    const column = 6;
    // desc sorting
    webTable.getSortByHeader(column).click();
    webTable.getArrayFromColumn(column).then(columnContent => {
      let actualContent = columnContent.slice();
      console.log(actualContent);
      cy.wrap(actualContent).should("deep.eq", columnContent.sort());
    });
    // asc sorting
    webTable.getSortByHeader(column).click();
    webTable.getArrayFromColumn(column).then(columnContent => {
      let actualContent = columnContent.slice();
      console.log(actualContent);
      cy.wrap(actualContent).should("deep.eq", columnContent.sort().reverse());
    });
  });
});

describe("Edit line", () => {
  it("Edit option over any line, modify and submit", () => {
    webTable.getEditBtn(1).click();
    webTable.getFormField("firstName").clear().type(webTable.dummyValue);
    webTable.getFormSubmitBtn().click();
    webTable.getTableCell(1, 1).should("contain.text", webTable.dummyValue);
  });

  it("Exit after editting without submitting", () => {
    webTable.getEditBtn(1).click();
    webTable.getFormField("firstName").clear().type(webTable.dummyValue);
    webTable.getFormCloseBtn().click();
    webTable.getTableCell(1, 1).should("not.contain.text", webTable.dummyValue);
  });
});

describe("Delete line", () => {
  it("2 or more lines", () => {
    webTable.getDeleteBtn(1).click();
    webTable.getDeleteBtn(1).should("not.exist");
  });

  it("1 line", () => {
    webTable.leaveFirstLineOnly();
    webTable.getDeleteBtn(1).click();
    webTable.getNoLinesMessage().should("be.visible");
  });
});

describe("Prev/Next page", () => {
  it("Only 1 page", () => {
    webTable.getPreviousBtn().should("be.disabled");
    webTable.getNextBtn().should("be.disabled");
  });

  it("With 2 pages", () => {
    webTable.createSecondPage();
    webTable.getNextBtn().click();
    webTable.getPageJumpInput().should("have.value", "2");
    webTable.getPreviousBtn().click();
    webTable.getPageJumpInput().should("have.value", "1");
  });
});

describe("Page Jump", () => {
  it("Only 1 page", () => {
    webTable.getPageJumpInput().type("2{enter}");
    webTable.getPageJumpInput().should("have.value", "1");
    webTable.getTableCell(1, 1).should("have.text", webTable.lineCierra);
  });

  it("With 2 pages", () => {
    webTable.createSecondPage();
    webTable.getPageJumpInput().type("2{enter}");
    webTable.getPageJumpInput().should("have.value", "2");
    webTable.getTableCell(1, 1).should("have.text", webTable.dummyValue);
  });
});

describe("Rows displayed", () => {
  it("5 rows option selected", () => {
    const option = 5;
    webTable.getRowsSelector(option);
    webTable.getAllRows().its("length").should("eq", option);
  });

  it("10 rows option selected", () => {
    const option = 10;
    webTable.getRowsSelector(option);
    webTable.getAllRows().its("length").should("eq", option);
  });

  it("20 rows option selected", () => {
    const option = 20;
    webTable.getRowsSelector(option);
    webTable.getAllRows().its("length").should("eq", option);
  });

  it("25 rows option selected", () => {
    const option = 25;
    webTable.getRowsSelector(option);
    webTable.getAllRows().its("length").should("eq", option);
  });

  it("50 rows option selected", () => {
    const option = 50;
    webTable.getRowsSelector(option);
    webTable.getAllRows().its("length").should("eq", option);
  });

  it("100 rows option selected", () => {
    const option = 100;
    webTable.getRowsSelector(option);
    webTable.getAllRows().its("length").should("eq", option);
  });
});

describe("Add new line", () => {
  it("First Add", () => {
    webTable.createNewLine();
    webTable.getTableCell(4, 1).should("have.text", webTable.dummyValue);
  });

  it("Add after non-submitted changes", () => {
    webTable.getAddBtn().click();
    webTable
      .getFormField("firstName")
      .should("be.empty")
      .type(webTable.dummyValue);
    webTable.getFormCloseBtn().click();
    webTable.getAddBtn().click();
    webTable
      .getFormField("firstName")
      .click()
      .should("have.value", webTable.dummyValue);
  });
});

describe("Registration Form", () => {
  it("Submit with empty fields", () => {
    webTable.getAddBtn().click();
    webTable.getFormSubmitBtn().click();
    webTable
      .getFormField("salary")
      .should("have.css", "border-color", "rgb(220, 53, 69)");
    webTable.getFormField("salary").type("4");
    webTable
      .getFormField("salary")
      .should("have.css", "border-color", "rgb(40, 167, 69)");
  });

  it("Submit with incorrectly completed fields", () => {
    webTable.getAddBtn().click();
    webTable.getFormField("salary").type(webTable.dummyValue);
    webTable.getFormSubmitBtn().click();
    webTable
      .getFormField("salary")
      .should("have.css", "border-color", "rgb(220, 53, 69)");
    webTable.getFormField("salary").clear().type("4");
    webTable
      .getFormField("salary")
      .should("have.css", "border-color", "rgb(40, 167, 69)");
  });
});
