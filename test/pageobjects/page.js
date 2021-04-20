module.exports = class Page {
  open(path) {
    return browser.url(`https://the-internet.herokuapp.com/${path}`);
  }

  async screenshot(fileName) {
    return await browser.saveScreenshot(`./screenshots/${fileName}.png`);
  }
}
