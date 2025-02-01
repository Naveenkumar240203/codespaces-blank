const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({  // Make sure the browser is launched with a GUI
  });
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.waitForTimeout(2000);  

  console.log(await page.title());
  await browser.close();
})();
