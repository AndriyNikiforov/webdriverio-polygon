/* eslint-disable class-methods-use-this */
const Page = require('./page');

class LoginPage extends Page {
  get inputUsername() {
    return $('#username');
  }

  get inputPassword() {
    return $('#password');
  }

  get btnSubmit() {
    return $('button[type="submit"]');
  }

  async login(username, password) {
    await (await this.inputUsername).setValue(username);
    await (await this.inputPassword).setValue(password);
    await (await this.btnSubmit).click();
  }

  open() {
    return super.open('login');
  }
}

module.exports = new LoginPage();
