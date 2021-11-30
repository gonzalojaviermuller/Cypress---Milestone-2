/// <reference types="cypress" />
import dayjs from "dayjs";
import {
  container,
  datePickerInput,
  dateAndTimePickerInput,
  nextMonthBtn,
  prevMonthBtn,
  monthContainer,
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

  getContainer() {
    return cy.get(container);
  }

  getMonthContainer() {
    return this.getContainer().get(monthContainer);
  }

  getDatePickerInput() {
    return this.getContainer().get(datePickerInput);
  }

  getDateAndTimePickerInput() {
    return this.getContainer().get(dateAndTimePickerInput);
  }

  getNextMonthBtn() {
    return this.getMonthContainer().get(nextMonthBtn);
  }

  getPrevMonthBtn() {
    return this.getMonthContainer().get(prevMonthBtn);
  }

  getMonthSelector() {
    return this.getMonthContainer().get(monthSelector);
  }

  getYearSelector() {
    return this.getMonthContainer().get(yearSelector);
  }

  getDayOfTable(day) {
    return this.getMonthContainer().get(daysContainer).contains(day);
  }

  getCurrentMonthDisplay() {
    return this.getMonthContainer().get(currentMonthDisplay);
  }

  getMonthDropdown() {
    return this.getMonthContainer().get(monthDropdown);
  }

  getYearDropdown() {
    return this.getMonthContainer().get(yearDropdown);
  }

  getMonthDropdownList(month) {
    return this.getMonthContainer().get(monthDropdownList).contains(month);
  }

  getYearDropdownList(year) {
    return this.getMonthContainer().get(yearDropdownList).contains(year);
  }

  getTimeListElement(time) {
    return this.getMonthContainer().get(timeList).contains(time);
  }
}

export default new DatePicker();
