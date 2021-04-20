/* eslint-disable class-methods-use-this */
const Page = require('./page');

class SecurePage extends Page {
  get flashAlert() {
    return $('#flash');
  }
}

module.exports = new SecurePage();
