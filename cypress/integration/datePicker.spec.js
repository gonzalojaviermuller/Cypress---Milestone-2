/// <reference types="cypress" />
import dayjs from "dayjs";
import datePicker from "../support/components/datePickerPage";
import {
  selectedTime,
  selectedDay
} from "../support/selectors/datePickerSelectors";

beforeEach("Setup", () => {
  datePicker.visit();
});

describe("Date only Selector", () => {
  beforeEach("Date", () => {
    const today = dayjs().format("MM/DD/YYYY");
    datePicker.getDatePickerInput().should("contain.value", today);
  });

  it("Should select a date by using dropdowns", () => {
    datePicker.getDatePickerInput().click();
    datePicker.getDropdownMonthSelector().select(datePicker.prevMonth);
    datePicker
      .getCurrentMonthDisplay()
      .should("contain.text", datePicker.prevMonth);
    datePicker.getDropdownYearSelector().select(`${datePicker.prevYear}`);
    datePicker
      .getCurrentMonthDisplay()
      .should("contain.text", datePicker.prevYear);
    datePicker.getDayOfTable(datePicker.day).click();
    datePicker
      .getDatePickerInput()
      .should("have.value", `${datePicker.prevMonthNumber}/${datePicker.day}/${datePicker.prevYear}`);
  });

  it("Should type a date on Input", () => {
    datePicker
      .getDatePickerInput()
      .clear()
      .type(
        `${datePicker.prevMonth}/${datePicker.day}/${datePicker.prevYear}{enter}`
      );
    datePicker.getDatePickerInput().click();
    datePicker
      .getCurrentMonthDisplay()
      .should("contain.text", `${datePicker.prevMonth} ${datePicker.prevYear}`);
    datePicker.getDayOfTable(datePicker.day).should("have.class", selectedDay);
  });

  it("Should use the prev/next buttons", () => {
    datePicker.getDatePickerInput().click();
    datePicker.getPrevMonthBtn().click();
    datePicker
      .getCurrentMonthDisplay()
      .should(
        "contain.text",
        `${datePicker.prevMonth} ${datePicker.currentYear}`
      );
    datePicker.getNextMonthBtn().click();
    datePicker
      .getCurrentMonthDisplay()
      .should(
        "contain.text",
        `${datePicker.currentMonth} ${datePicker.currentYear}`
      );
  });
});

describe("Date and Time selector", () => {
  beforeEach("Date", () => {
    const today = dayjs().format("MMMM DD, YYYY h:mm A");
    datePicker.getDateAndTimePickerInput().should("contain.value", today);
  });

  it("Should select a date by using dropdowns", () => {
    datePicker.getDateAndTimePickerInput().click();
    datePicker.getReadDropMonthSelector().click();
    datePicker.getReadDropMonthList(datePicker.prevMonth).click();
    datePicker
      .getCurrentMonthDisplay()
      .should("contain.text", datePicker.prevMonth);
    datePicker.getReadDropYearSelector().click();
    datePicker.getReadDropYearList(datePicker.prevYear).click();
    datePicker.getDayOfTable(datePicker.day).click();
    datePicker.getTimeListElement(datePicker.time).click();
    datePicker
      .getDateAndTimePickerInput()
      .should(
        "contain.value",
        `${datePicker.prevMonth} ${datePicker.day}, ${datePicker.prevYear} ${datePicker.time} AM`
      );
  });

  it("Should type a date on Input", () => {
    datePicker
      .getDateAndTimePickerInput()
      .clear()
      .type(
        `${datePicker.prevMonth} ${datePicker.day}, ${datePicker.prevYear} ${datePicker.time}{enter}`
      );
    datePicker.getDateAndTimePickerInput().click();
    datePicker
      .getCurrentMonthDisplay()
      .should("contain.text", `${datePicker.prevMonth} ${datePicker.prevYear}`);
    datePicker.getDayOfTable(datePicker.day).should("have.class", selectedDay);
    datePicker
      .getTimeListElement(datePicker.time)
      .should("have.class", selectedTime);
  });

  it("Should use the prev/next buttons", () => {
    datePicker.getDateAndTimePickerInput().click();
    datePicker.getPrevMonthBtn().click();
    datePicker
      .getCurrentMonthDisplay()
      .should(
        "contain.text",
        `${datePicker.prevMonth} ${datePicker.currentYear}`
      );
    datePicker.getNextMonthBtn().click();
    datePicker
      .getCurrentMonthDisplay()
      .should(
        "contain.text",
        `${datePicker.currentMonth} ${datePicker.currentYear}`
      );
  });
});
