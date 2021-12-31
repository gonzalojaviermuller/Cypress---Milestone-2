/// <reference types="cypress" />
import practiceForm from "../support/components/practiceFormPage";

describe("Form fields completing", () => {
  beforeEach("Setup", () => {
    practiceForm.visit();
  });

  it("Should complete all fields and submit", () => {
    practiceForm
      .getFormField("firstName")
      .should("be.empty")
      .type(practiceForm.testValue);
    practiceForm
      .getFormField("lastName")
      .should("be.empty")
      .type(practiceForm.testValue);
    practiceForm
      .getFormField("email")
      .should("be.empty")
      .type(practiceForm.testEmail);
    practiceForm.getFormField("gender", 2).click();
    practiceForm.getGenderCheckbox(2).should("be.checked");
    practiceForm
      .getFormField("mobile")
      .should("be.empty")
      .type(practiceForm.testPhoneNumber);
    practiceForm
      .getFormField("date")
      .click()
      .then(() => {
        practiceForm.getYearDropdown().select(`${practiceForm.year}`);
        practiceForm.getMonthDroppdown().select(practiceForm.month);
        practiceForm.getDayOfTable(practiceForm.day).click();
      });
    practiceForm
      .getFormField("date")
      .should(
        "have.value",
        `${practiceForm.day} ${practiceForm.monthAbbrev} ${practiceForm.year}`
      );
    practiceForm
      .getFormField("subject")
      .should("be.empty")
      .type(`${practiceForm.testSubject}{enter}`);
    practiceForm.getFormField("hobbies", 2).click();
    practiceForm.getHobbiesCheckbox(2).should("be.checked");
    practiceForm
      .getSelectFileBtn()
      .attachFile(`../fixtures/${practiceForm.testFile}`);
    practiceForm
      .getFormField("address")
      .should("be.empty")
      .type(practiceForm.testAddress);
    practiceForm.getStateBtn().click().contains(practiceForm.testState).click();
    practiceForm.getStateValue().should("have.text", practiceForm.testState);
    practiceForm
      .getCityBtn()
      .click()
      .then(() => {
        practiceForm.getCityOption(0).click();
      });
    practiceForm.getCityValue().should("have.text", practiceForm.testCity);
    // Submit click
    practiceForm.getSubmitBtn().should("be.visible").click();
    practiceForm.getModalContent().should("be.visible");
    practiceForm
      .getTableCell(1, 2)
      .should(
        "have.text",
        `${practiceForm.testValue} ${practiceForm.testValue}`
      );
    practiceForm.getTableCell(2, 2).should("have.text", practiceForm.testEmail);
    practiceForm
      .getTableCell(3, 2)
      .should("have.text", practiceForm.testGender);
    practiceForm
      .getTableCell(4, 2)
      .should("have.text", practiceForm.testPhoneNumber);
    practiceForm
      .getTableCell(5, 2)
      .should("have.text", practiceForm.testBirthDate);
    practiceForm
      .getTableCell(6, 2)
      .should("have.text", practiceForm.testSubject);
    practiceForm
      .getTableCell(7, 2)
      .should("have.text", practiceForm.testHobbies);
    practiceForm.getTableCell(8, 2).should("have.text", practiceForm.testFile);
    practiceForm
      .getTableCell(9, 2)
      .should("have.text", practiceForm.testAddress);
    practiceForm
      .getTableCell(10, 2)
      .should(
        "have.text",
        `${practiceForm.testState} ${practiceForm.testCity}`
      );
    // Added as an alternative, will remove after consulting
    practiceForm.checkTableValues(practiceForm.expectedValues);
  });

  it("Should submit with empty fields", () => {
    practiceForm.getSubmitBtn().click();
    practiceForm
      .getFormField("firstName")
      .should("have.css", "border-color", practiceForm.redBorder)
      .type(practiceForm.testValue)
      .should("have.css", "border-color", practiceForm.greenBorder);
    practiceForm
      .getFormField("lastName")
      .should("have.css", "border-color", practiceForm.redBorder)
      .type(practiceForm.testValue)
      .should("have.css", "border-color", practiceForm.greenBorder);
    practiceForm
      .getFormField("email")
      .should("be.empty")
      .type(practiceForm.testEmail);
    practiceForm.getFormField("gender", 2).click();
    practiceForm
      .getFormField("mobile")
      .should("be.empty")
      .type(practiceForm.testPhoneNumber);
    practiceForm.getSubmitBtn().click();
    practiceForm.getModalContent().should("be.visible");
    practiceForm
      .getTableCell(1, 2)
      .should(
        "have.text",
        `${practiceForm.testValue} ${practiceForm.testValue}`
      );
    practiceForm.getTableCell(2, 2).should("have.text", practiceForm.testEmail);
    practiceForm
      .getTableCell(3, 2)
      .should("have.text", practiceForm.testGender);
    practiceForm
      .getTableCell(4, 2)
      .should("have.text", practiceForm.testPhoneNumber);
    practiceForm
      .getTableCell(5, 2)
      .should("have.text", practiceForm.currentBirthDate);
    practiceForm.getTableCell(6, 2).should("not.have.text");
    practiceForm.getTableCell(7, 2).should("not.have.text");
    practiceForm.getTableCell(8, 2).should("not.have.text");
    practiceForm.getTableCell(9, 2).should("not.have.text");
    practiceForm.getTableCell(10, 2).should("not.have.text");
    // Added as an alternative, will remove after consulting
    practiceForm.checkTableValues(practiceForm.expectedValues2);
  });
});
