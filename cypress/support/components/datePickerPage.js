/// <reference types="cypress" />
import dayjs from "dayjs";
import {
  datePickerInput,
  dateAndTimePickerInput,
  nextMonthBtn,
  prevMonthBtn,
  monthSelector,
  yearSelector,
  currentMonthDisplay,
  monthDropdown,
  yearDropdown,
  monthDropdownList,
  yearDropdownList,
  timeList,
  daysContainer
} from "/cypress/support/selectors/datePickerSelectors";

export class DatePicker {
  constructor() {
    this.prevMonthWithYear = dayjs().subtract(1, "month").format("MMMM YYYY");
    this.prevYear = dayjs().subtract(1, "year").year();
    this.currentYear = dayjs().format("YYYY");
    this.currentMonth = dayjs().format("MMMM");
    this.prevMonth = dayjs().subtract(1, "month").format("MMMM");
    this.prevMonthNumber = dayjs().subtract(1, "month").format("MM");
    this.day = 15;
    this.time = "11:30";
  }

  visit() {
    cy.visit("/date-picker");
  }

  getDatePickerInput() {
    return cy.get(datePickerInput);
  }

  getDateAndTimePickerInput() {
    return cy.get(dateAndTimePickerInput);
  }

  getNextMonthBtn() {
    return cy.get(nextMonthBtn);
  }

  getPrevMonthBtn() {
    return cy.get(prevMonthBtn);
  }

  getMonthSelector() {
    return cy.get(monthSelector);
  }

  getYearSelector() {
    return cy.get(yearSelector);
  }

  getDayOfTable(day) {
    return cy.get(daysContainer).contains(day);
  }

  getCurrentMonthDisplay() {
    return cy.get(currentMonthDisplay);
  }

  getMonthDropdown() {
    return cy.get(monthDropdown);
  }

  getYearDropdown() {
    return cy.get(yearDropdown);
  }

  getMonthDropdownList(month) {
    return cy.get(monthDropdownList).contains(month);
  }

  getYearDropdownList(year) {
    return cy.get(yearDropdownList).contains(year);
  }

  getTimeListElement(time) {
    return cy.get(timeList).contains(time);
  }
}

export default new DatePicker();
