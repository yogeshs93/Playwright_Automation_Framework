export default class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginLink = "#login2";
        this.usernameInput = '#loginusername';
        this.passwordInput = '#loginpassword';
        this.loginButton = '//button[normalize-space()="Log in"]';
    }

    async gotoLoginPage() {
        await this.page.goto("https://www.demoblaze.com/index.html");
    }

    async login(userName, passWord) {
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.usernameInput).fill(userName);
        await this.page.locator(this.passwordInput).fill(passWord);
        await this.page.locator(this.loginButton).click();
    }
}