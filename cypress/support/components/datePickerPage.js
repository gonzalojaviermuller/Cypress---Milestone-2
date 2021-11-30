/// <reference types="cypress" />
import dayjs from "dayjs";
import {
  container,
  datePickerInput,
  dateAndTimePickerInput,
  nextMonthBtn,
  prevMonthBtn,
  monthContainer,
  monthDropSelector,
  yearDropSelector,
  currentMonthDisplay,
  monthReadDropSelector,
  yearReadDropSelector,
  monthReadDropList,
  yearReadDropList,
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

  getDropdownMonthSelector() {
    return this.getMonthContainer().get(monthDropSelector);
  }

  getDropdownYearSelector() {
    return this.getMonthContainer().get(yearDropSelector);
  }

  getDayOfTable(day) {
    return this.getMonthContainer().get(daysContainer).contains(day);
  }

  getCurrentMonthDisplay() {
    return this.getMonthContainer().get(currentMonthDisplay);
  }

  getReadDropMonthSelector() {
    return this.getMonthContainer().get(monthReadDropSelector);
  }

  getReadDropYearSelector() {
    return this.getMonthContainer().get(yearReadDropSelector);
  }

  getReadDropMonthList(month) {
    return this.getMonthContainer().get(monthReadDropList).contains(month);
  }

  getReadDropYearList(year) {
    return this.getMonthContainer().get(yearReadDropList).contains(year);
  }

  getTimeListElement(time) {
    return this.getMonthContainer().get(timeList).contains(time);
  }
}

export default new DatePicker();
