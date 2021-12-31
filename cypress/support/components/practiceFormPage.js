/// <reference types="cypress" />
import dayjs from "dayjs";
import {
  firstNameInput,
  lastNameInput,
  emailInput,
  genderInput,
  userNumberInput,
  dateOfBirthInput,
  monthDropdown,
  yearDropdown,
  addressInput,
  daysContainer,
  subjectsInput,
  hobbiesInput,
  selectFileBtn,
  stateBtn,
  cityBtn,
  textValue,
  cityOption,
  getSubmitBtn,
  modalContent,
  tableRow,
  tableColumn
} from "/cypress/support/selectors/practiceFormSelectors";

export class PracticeForm {
  constructor() {
    this.testValue = "Test";
    this.testEmail = "Test@test.com";
    this.testGender = "Female";
    this.testPhoneNumber = "3512315656";
    this.year = dayjs().subtract(20, "year").year();
    this.month = dayjs().format("MMMM");
    this.monthAbbrev = dayjs().format("MMM");
    this.day = 15;
    this.testSubject = "Arts";
    this.testHobbies = "Reading";
    this.testFile = "sampleFile.jpeg";
    this.testAddress = "4429 George Street";
    this.testState = "Uttar Pradesh";
    this.testCity = "Agra";
    this.testBirthDate = `${this.day} ${this.month},${this.year}`;
    this.currentBirthDate = dayjs().format("DD MMMM,YYYY");
    this.greenBorder = "rgb(40, 167, 69)";
    this.redBorder = "rgb(220, 53, 69)";
    this.expectedValues = [
      `${this.testValue} ${this.testValue}`,
      this.testEmail,
      this.testGender,
      this.testPhoneNumber,
      this.testBirthDate,
      this.testSubject,
      this.testHobbies,
      this.testFile,
      this.testAddress,
      `${this.testState} ${this.testCity}`
    ];
    this.expectedValues2 = [
      `${this.testValue} ${this.testValue}`,
      this.testEmail,
      this.testGender,
      this.testPhoneNumber,
      this.currentBirthDate,
      "",
      "",
      "",
      "",
      ""
    ];
  }

  visit() {
    cy.visit("/automation-practice-form");
  }

  getFormField(field, element) {
    let fieldNAme = {
      firstName: () => {
        return cy.get(firstNameInput);
      },
      lastName: () => {
        return cy.get(lastNameInput);
      },
      email: () => {
        return cy.get(emailInput);
      },
      gender: () => {
        return cy.get(`${genderInput}${element}`).parent();
      },
      mobile: () => {
        return cy.get(userNumberInput);
      },
      date: () => {
        return cy.get(dateOfBirthInput);
      },
      subject: () => {
        return cy.get(subjectsInput);
      },
      hobbies: () => {
        return cy.get(`${hobbiesInput}${element}`).parent();
      },
      address: () => {
        return cy.get(addressInput);
      }
    };
    return fieldNAme[field]();
  }

  getGenderCheckbox(element) {
    return cy.get(`${genderInput}${element}`);
  }

  getYearDropdown() {
    return cy.get(yearDropdown);
  }

  getMonthDroppdown() {
    return cy.get(monthDropdown);
  }

  getDayOfTable(day) {
    return cy.get(daysContainer).contains(day);
  }

  getHobbiesCheckbox(element) {
    return cy.get(`${hobbiesInput}${element}`);
  }

  getSelectFileBtn() {
    return cy.get(selectFileBtn);
  }

  getStateBtn() {
    return cy.get(stateBtn);
  }

  getCityBtn() {
    return cy.get(cityBtn);
  }

  getStateValue() {
    return cy.get(textValue);
  }

  getCityOption(option) {
    return cy.get(`${cityOption}${option}`);
  }

  getCityValue() {
    return cy.get(cityBtn).find(textValue);
  }

  getSubmitBtn() {
    return cy.get(getSubmitBtn);
  }

  getModalContent() {
    return cy.get(modalContent);
  }

  getTableCell(row, column) {
    return cy.get(
      `${tableRow}:nth-child(${row}) ${tableColumn}:nth-child(${column})`
    );
  }

  checkTableValues(values) {
    let i = 1;

    while (i <= 10) {
      this.getTableCell(i, 2).should("have.text", values[i - 1]);
      i++;
    }
  }
}
export default new PracticeForm();
