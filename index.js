const screens = require("./data");
const pup = require("puppeteer");
const imgDir = "screenshots/";
const ext = ".png";

async function shoot() {
  const browser = await pup.launch({ headless: false });
  const page = await browser.newPage();

  await page.setViewport({
    width: 1600,
    height: 1000
  });

  process.stdout.write("\nShooting:\n---------\n");

  for (let i = 0; i < screens.length; i++) {
    process.stdout.write("- " + screens[i].name + "...");

    await page.goto(screens[i].url);
    await page.screenshot({
      path: imgDir + screens[i].name + ext,
      fullPage: true
    });

    process.stdout.write(" 📸\n");
  }
  browser.close();
}

shoot();
