/// <reference types="cypress" />
import webTable from "../support/components/webtablePage";

beforeEach("Setup", () => {
  webTable.visit();
});

describe("SearchBar testing", () => {
  it("Should show all results", () => {
    webTable.getSearchInput().clear();
    webTable.getTableCell(1, 1).should("have.text", webTable.lineCierra);
    webTable.getTableCell(2, 1).should("have.text", webTable.lineAlden);
    webTable.getTableCell(3, 1).should("have.text", webTable.lineKierra);
  });

  it("Should filter only one result", () => {
    webTable.getSearchInput().type(webTable.lineCierra);
    webTable.getTableCell(1, 1).should("have.text", webTable.lineCierra);
    webTable.getTableCell(2, 1).should("not.have.text");
  });

  it("Should filter without results", () => {
    webTable.getSearchInput().type(webTable.dummyValue);
    webTable.getNoLinesMessage();
  });
});

describe("Sort by", () => {
  it("Should sort by First Name", () => {
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

  it("Should sort by Last Name", () => {
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

  it("Should sort by Age", () => {
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

  it("Should sort by Email", () => {
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

  it("Should sort by Salary", () => {
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

  it("Should sort by Department", () => {
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
  it("Should modify and submit a line", () => {
    webTable.getEditBtn(1).click();
    webTable.getFormField("firstName").clear().type(webTable.dummyValue);
    webTable.getFormSubmitBtn().click();
    webTable.getTableCell(1, 1).should("contain.text", webTable.dummyValue);
  });

  it("Should modify a line without submitting", () => {
    webTable.getEditBtn(1).click();
    webTable.getFormField("firstName").clear().type(webTable.dummyValue);
    webTable.getFormCloseBtn().click();
    webTable.getTableCell(1, 1).should("not.contain.text", webTable.dummyValue);
  });
});

describe("Delete line", () => {
  it("Should delete a line", () => {
    webTable.getDeleteBtn(1).click();
    webTable.getDeleteBtn(1).should("not.exist");
  });

  it("Should delete the only existing line", () => {
    webTable.leaveFirstLineOnly();
    webTable.getDeleteBtn(1).click();
    webTable.getNoLinesMessage().should("be.visible");
  });
});

describe("Prev/Next page", () => {
  it("Should try to get to Next/Prev page and fail", () => {
    webTable.getPreviousBtn().should("be.disabled");
    webTable.getNextBtn().should("be.disabled");
  });

  it("Should get to Next page and then Prev page", () => {
    webTable.createSecondPage();
    webTable.getNextBtn().click();
    webTable.getPageJumpInput().should("have.value", "2");
    webTable.getPreviousBtn().click();
    webTable.getPageJumpInput().should("have.value", "1");
  });
});

describe("Page Jump", () => {
  it("Should try to get to next page and fail", () => {
    webTable.getPageJumpInput().type("2{enter}");
    webTable.getPageJumpInput().should("have.value", "1");
    webTable.getTableCell(1, 1).should("have.text", webTable.lineCierra);
  });

  it("Should get to second page", () => {
    webTable.createSecondPage();
    webTable.getPageJumpInput().type("2{enter}");
    webTable.getPageJumpInput().should("have.value", "2");
    webTable.getTableCell(1, 1).should("have.text", webTable.dummyValue);
  });
});

describe("Rows displayed", () => {
  it("Should display 5 rows of lines", () => {
    const option = 5;
    webTable.getRowsSelector(option);
    webTable.getAllRows().its("length").should("eq", option);
  });

  it("Should display 10 rows of lines", () => {
    const option = 10;
    webTable.getRowsSelector(option);
    webTable.getAllRows().its("length").should("eq", option);
  });

  it("Should display 20 rows of lines", () => {
    const option = 20;
    webTable.getRowsSelector(option);
    webTable.getAllRows().its("length").should("eq", option);
  });

  it("Should display 25 rows of lines", () => {
    const option = 25;
    webTable.getRowsSelector(option);
    webTable.getAllRows().its("length").should("eq", option);
  });

  it("Should display 50 rows of lines", () => {
    const option = 50;
    webTable.getRowsSelector(option);
    webTable.getAllRows().its("length").should("eq", option);
  });

  it("Should display 100 rows of lines", () => {
    const option = 100;
    webTable.getRowsSelector(option);
    webTable.getAllRows().its("length").should("eq", option);
  });
});

describe("Add new line", () => {
  it("Should create a new line", () => {
    webTable.createNewLine();
    webTable.getTableCell(4, 1).should("have.text", webTable.dummyValue);
  });

  it("Should find previous unsubmitted changes in Add form", () => {
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
  it("Should submit with empty fields", () => {
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

  it("Should submit with incorrectly completed fields", () => {
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
