/// <reference types="cypress" />
const { isFileExist } = require('cy-verify-downloads');
var dayjs = require('dayjs')

dayjs().format()

module.exports = (on, config) => {
  on('task', { isFileExist })
}