const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false  // Ensure the browser is launched with a GUI
  });
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.waitForTimeout(5000);  // Wait for 5 seconds

  console.log(await page.title());
  await browser.close();
})();
