const pup = require("puppeteer");

async function run() {
  const browser = await pup.launch();
  const page = await browser.newPage();

  await page.goto("https://github.com");
  await page.screenshot({ path: "screenshots/github.png" });

  browser.close();
}

run();
