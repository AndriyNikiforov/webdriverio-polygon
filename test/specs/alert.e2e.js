/* eslint-disable no-undef */
const AlertPage = require('../pageobjects/alert.page');

describe('Alert test', () => {
  it('Open first', async () => {
    await AlertPage.open();

    await AlertPage.openAlert();
    expect(AlertPage.resultText).toHaveText('You successfully clicked an alert');

    await AlertPage.openConfirmAlert();
    expect(AlertPage.resultText).toHaveText('You clicked: Ok');

    await AlertPage.openPromptAlert();
    expect(AlertPage.resultText).toHaveText('You entered: dev/null');
  });
});
