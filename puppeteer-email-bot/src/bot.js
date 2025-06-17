const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const randomName = require("random-name");
const fsa = require("async-file");
puppeteer.use(StealthPlugin());
const get = require("readline-sync");

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      ignoreHTTPSErrors: true,
      slowMo: 0,
      args: ["--window-size=1400,900", "--disable-gpu"],
    });
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
    );
    let firstName = randomName.first().toString();
    let lastName = randomName.last().toString();
    let numbers = Math.floor(Math.random() * 1000);
    let userName =
      randomName.first().toString() + randomName.last().toString() + numbers;
    const email = "gmail.com";
    const passWord = Math.random().toString(36).slice(-10) + "ok";
    await page.goto(
      "https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp"
    );

    await page.waitForTimeout(1000);
    console.log("[*] Google Mail Automation Registration Account");
    console.log("[*] Author: RJD");
    await page.setViewport({ width: 1366, height: 695 });
    console.log("[*] Trying to Fill Identity (with random identity)");

    await page.waitForSelector(".rFrNMe #firstName");
    await page.click(".rFrNMe #firstName");
    await page.type(".rFrNMe #firstName", `${firstName}`);

    await page.type(".rFrNMe #lastName", `${lastName}`);

    await page.waitForSelector(
      "#collectNameNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-RLmnJb"
    );
    await page.click(
      "#collectNameNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-RLmnJb"
    );

    await page.waitForTimeout(1000);

    await page.waitForSelector("#month");
    await page.click("#month");

    await page.waitForSelector('li[data-value="4"]');
    await page.click('li[data-value="4"]');

    await page.waitForSelector("#day");
    await page.type("#day", "24");

    await page.waitForSelector("#year");
    await page.type("#year", "1999");

    await page.waitForSelector("#gender");
    await page.click("#gender");

    await page.waitForSelector('li[data-value="3"]');
    await page.click('li[data-value="3"]');

    // ...existing code...
    // Wait for the "Next" button and click it (the one with text "Next")
    await page.waitForSelector('button[jsname="LgbsSe"] span.VfPpkd-vQzf8d');
    const nextButtons = await page.$$(
      'button[jsname="LgbsSe"] span.VfPpkd-vQzf8d'
    );
    for (const btn of nextButtons) {
      const text = await btn.evaluate((el) => el.innerText);
      if (text && text.trim() === "Next") {
        // Click the parent button element
        const parentBtn = await btn.evaluateHandle((el) =>
          el.closest("button")
        );
        await parentBtn.click();
        break;
      }
    }

    await page.waitForTimeout(1000);
    // Click the first radio option and save the email value
    await page.waitForSelector('[role="radiogroup"] [role="radio"]');
    const radios = await page.$$('[role="radiogroup"] [role="radio"]');
    if (radios.length > 0) {
      await radios[0].click();
      const email = await radios[0].evaluate((el) => {
        const labelledby = el.getAttribute("aria-labelledby");
        if (!labelledby) return "";
        const label = document.getElementById(labelledby);
        return label ? label.textContent.trim() : "";
      });
      console.log("[*] Selected email:", email);
    }

    // Wait for the "Next" button and click it (the one with text "Next")
    await page.waitForSelector('button[jsname="LgbsSe"] span.VfPpkd-vQzf8d');
    const nextButtons2 = await page.$$(
      'button[jsname="LgbsSe"] span.VfPpkd-vQzf8d'
    );
    for (const btn of nextButtons2) {
      const text = await btn.evaluate((el) => el.innerText);
      if (text && text.trim() === "Next") {
        // Click the parent button element
        const parentBtn = await btn.evaluateHandle((el) =>
          el.closest("button")
        );
        await parentBtn.click();
        break;
      }
    }

    await page.waitForTimeout(1000);
    console.log("passWord", passWord);
    // Password
    await page.waitForSelector('#passwd .whsOnd[name="Passwd"]');
    await page.type('#passwd .whsOnd[name="Passwd"]', `${passWord}`);

    await page.waitForSelector('#confirm-passwd .whsOnd[name="PasswdAgain"]');
    await page.type(
      '#confirm-passwd .whsOnd[name="PasswdAgain"]',
      `${passWord}`
    );

    // Wait for the "Next" button and click it (the one with text "Next")
    await page.waitForSelector('button[jsname="LgbsSe"] span.VfPpkd-vQzf8d');
    const nextButtons3 = await page.$$(
      'button[jsname="LgbsSe"] span.VfPpkd-vQzf8d'
    );
    for (const btn of nextButtons3) {
      const text = await btn.evaluate((el) => el.innerText);
      if (text && text.trim() === "Next") {
        // Click the parent button element
        const parentBtn = await btn.evaluateHandle((el) =>
          el.closest("button")
        );
        await parentBtn.click();
        break;
      }
    }

    // console.log("[*] Process to Verification by OTP");

    // let number = get.question("[*] Number Phone: ");
    // await page.waitForSelector("#phoneNumberId");
    // const input = await page.$("#phoneNumberId");
    // await input.click({ clickCount: 3 });
    // await page.keyboard.press("Backspace");
    // await page.type("#phoneNumberId", `${number}`);

    // await page.click(
    //   "#view_container > div > div > div.pwWryf.bxPAYd > div > div.zQJV3 > div > div.qhFLie > div > div > button > div.VfPpkd-RLmnJb"
    // );

    await page
      .waitForSelector("#code")
      .then(() => {
        (async () => {
          await page.waitForSelector("#code");
          let otp = get.question("[*] Code OTP: ");
          await page.type("#code", `${otp}`);
          await page.click(
            "#view_container > div > div > div.pwWryf.bxPAYd > div > div.zQJV3 > div.dG5hZc > div.qhFLie > div > div > button > div.VfPpkd-RLmnJb"
          );

          await page.waitForTimeout(2000);
          await page
            .waitForSelector(".F8Czgd #month")
            .then(() => {
              (async () => {
                await page.waitForSelector(
                  "#view_container > div > div > div.pwWryf.bxPAYd > div > div.zQJV3 > div.dG5hZc > div.daaWTb > div > div > button > div.VfPpkd-RLmnJb"
                );
                await page
                  .click(
                    "#view_container > div > div > div.pwWryf.bxPAYd > div > div.zQJV3 > div.dG5hZc > div.daaWTb > div > div > button > div.VfPpkd-RLmnJb"
                  )
                  .then(() => {
                    (async () => {
                      let finishTime = new Date().getTime() + 10 * 1000;

                      await autoScroll(page, finishTime);
                      await page.waitForTimeout(10000);

                      await page.waitForSelector(
                        "#termsofserviceNext > div.ZFr60d.CeoRYc"
                      );
                      await page.click(
                        "#termsofserviceNext > div.ZFr60d.CeoRYc"
                      );

                      console.log(
                        `[*] Success: ${userName}|${passWord} | Result saved! resultSuccess.txt`
                      );

                      fsa.appendFile(
                        "resultSuccess.txt",
                        `${userName}+${email} |${passWord}\n`,
                        { encoding: "utf8" }
                      );
                      browser.close();
                    })();
                  })
                  .catch((e) => {
                    console.log(`[*] Automation is Failed, Run again!`);
                    browser.close();
                  });
              })();
            })
            .catch((e) => {
              console.log(`[*] OTP is Wrong`);
              browser.close();
            });
        })();
      })
      .catch((e) => {
        console.log(`[*] Check your Phone Number or It's Used Too Many Times!`);
        browser.close();
      });
  } catch (e) {
    console.log("[*] Error to Open URL");
  }
})();

async function autoScroll(page, finishTime) {
  await page.evaluate(async (finishTime) => {
    await new Promise((resolve, reject) => {
      var totalHeight = 0;
      var distance = 100;
      var timer = setInterval(() => {
        var scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight || new Date().getTime() > finishTime) {
          clearInterval(timer);
          resolve();
        }
      }, 120);
    });
  }, finishTime);
}
