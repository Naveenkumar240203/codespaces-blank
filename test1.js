const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch(); // Headless by default
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.waitForTimeout(5000); // Waits for 5 seconds

    console.log(await page.title());
    await browser.close();
})();
