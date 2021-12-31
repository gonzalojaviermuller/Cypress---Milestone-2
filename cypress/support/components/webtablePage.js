/// <reference types="cypress" />
import {
  tableContainer,
  tableRow,
  tableColumn,
  deleteBtn,
  formFirstName,
  formLastName,
  formEmail,
  formAge,
  formSalary,
  formDepartment,
  addBtn,
  editBtn,
  formSubmitBtn,
  searchInput,
  formCloseBtn,
  previousBtn,
  nextBtn,
  rowsSelector,
  pageJumpInput,
  headerCell
} from "/cypress/support/selectors/webTableSelectors";

export class WebTable {
  constructor() {
    this.dummyValue = "Test";
    this.dummyNumberValue = "90";
    this.noLinesMessage = "No rows found";
    this.lineCierra = "Cierra";
    this.lineAlden = "Alden";
    this.lineKierra = "Kierra";
  }

  visit() {
    cy.visit("/webtables");
  }

  getTableContainer() {
    return cy.get(tableContainer);
  }

  getTableRow(row) {
    return cy.get(`${tableRow}:nth-child(${row})`);
  }

  getTableCell(row, column) {
    return cy.get(
      `${tableRow}:nth-child(${row}) ${tableColumn}:nth-child(${column})`
    );
  }

  getTableColumn(column) {
    return cy.get(`${tableColumn}:nth-child(${column})`);
  }

  getNoLinesMessage() {
    return this.getTableContainer().contains(this.noLinesMessage);
  }

  getDeleteBtn(row) {
    return cy.get(deleteBtn + `${row}`);
  }

  getEditBtn(row) {
    return this.getTableRow(row).get(editBtn);
  }

  getFormField(field) {
    let fieldNAme = {
      firstName: () => {
        return formFirstName;
      },
      lastName: () => {
        return formLastName;
      },
      email: () => {
        return formEmail;
      },
      age: () => {
        return formAge;
      },
      salary: () => {
        return formSalary;
      },
      department: () => {
        return formDepartment;
      }
    };
    return cy.get(`${fieldNAme[field]()}`);
  }

  getAddBtn() {
    return cy.get(addBtn);
  }

  getFormSubmitBtn() {
    return cy.get(formSubmitBtn);
  }
  getFormCloseBtn() {
    return cy.get(formCloseBtn);
  }

  getSortByHeader(column) {
    return cy.get(`${headerCell}:nth-child(${column})`);
  }

  getArrayFromColumn(column) {
    let columnContent = [];
    return new Cypress.Promise(resolve => {
      this.getTableColumn(column)
        .each($el => {
          columnContent.push($el.text());
        })
        .then(() => {
          columnContent = columnContent.filter(str => {
            return str.trim();
          });
          resolve(columnContent);
        });
    });
  }

  leaveFirstLineOnly() {
    this.getDeleteBtn(3).click();
    this.getDeleteBtn(2).click();
  }

  createNewLine() {
    this.getAddBtn().click();
    this.getFormField("firstName").should("be.empty").type(this.dummyValue);
    this.getFormField("lastName").should("be.empty").type(this.dummyValue);
    this.getFormField("email")
      .should("be.empty")
      .type(`${this.dummyValue}@${this.dummyValue}.com`);
    this.getFormField("age").should("be.empty").type(this.dummyNumberValue);
    this.getFormField("salary").should("be.empty").type(this.dummyNumberValue);
    this.getFormField("department").should("be.empty").type(this.dummyValue);
    this.getFormSubmitBtn().click();
  }

  createSecondPage() {
    this.createNewLine();
    this.createNewLine();
    this.createNewLine();
    this.getRowsSelector(5);
  }

  getSearchInput() {
    return cy.get(searchInput);
  }

  getPreviousBtn() {
    return cy.get(previousBtn);
  }

  getNextBtn() {
    return cy.get(nextBtn);
  }

  getPageJumpInput() {
    return cy.get(pageJumpInput);
  }

  getRowsSelector(option) {
    return cy.get(rowsSelector).select(`${option} rows`);
  }

  getAllRows() {
    return cy.get(tableRow);
  }
}

export default new WebTable();
