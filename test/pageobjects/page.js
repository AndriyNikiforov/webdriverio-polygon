/* eslint-disable class-methods-use-this */
module.exports = class Page {
  open(path) {
    return browser.url(`https://the-internet.herokuapp.com/${path}`);
  }

  screenshot(fileName) {
    return browser.saveScreenshot(`./screenshots/${fileName}.png`);
  }
};
