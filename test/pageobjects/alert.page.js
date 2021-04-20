const Page = require('./page');

class AlertPage extends Page {
  get buttonAlert() {
    return $('//button[contains(text(), "Click for JS Alert")]');
  }

  get buttonConfirm() {
    return $('//button[contains(text(), "Click for JS Confirm")]');
  }

  get buttonPrompt() {
    return $('//button[contains(text(),"Click for JS Prompt")]');
  }

  get resultText() {
    return $('#result');
  }

  async openAlert() {
    await (await this.buttonAlert).waitForDisplayed({
      timeout: 5000
    });
    await (await this.buttonAlert).click();
    await browser.acceptAlert();

    browser.waitUntil(() => {
      const text = $('#result').getText();
      return text === 'You successfully clicked an alert';
    }, {
      timeout: 5000,
      timeoutMsg: 'Not found the message'
    });
  }

  async openConfirmAlert() {
    await (await this.buttonConfirm).waitForDisplayed({
      timeout: 5000,
    });
    await (await this.buttonConfirm).click();
    await browser.acceptAlert();

    browser.waitUntil(() => {
      const text = $('#result').getText();
      return text === 'You clicked: Ok';
    }, {
      timeout: 5000,
      timeoutMsg: 'Not found the message'
    });
  }

  async openPromptAlert() {
    await (await this.buttonPrompt).waitForDisplayed({
      timeout: 5000,
    });
    await (await this.buttonPrompt).click();
    await browser.sendAlertText('dev/null');
    await browser.acceptAlert();

    browser.waitUntil(() => {
      const text = $('#result').getText();
      return text === 'You entered: dev/null';
    }, {
      timeout: 5000,
      timeoutMsg: 'Not found the message'
    });
  }

  open() {
    return super.open('javascript_alerts');
  }
}

module.exports = new AlertPage();
