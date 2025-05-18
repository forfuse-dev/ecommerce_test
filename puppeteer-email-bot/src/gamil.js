const puppeteer = require("puppeteer");
const path = require("path");
const { generateEmail } = require("./utils/emailGenerator");

function generateRandomPassword(length = 12) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const filePath = `file:${path.join(__dirname, "signup.html")}`;
  await page.goto(filePath);

  const email = generateEmail();
  const password = generateRandomPassword();

  await page.type("#email", email);
  await page.type("#password", password);
  await page.click("#create-account");

  await page.waitForSelector(".success-message");

  console.log("Email created successfully:", email);
  console.log("Password:", password);

  await browser.close();
})();
