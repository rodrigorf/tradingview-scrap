const config = require('config');
const puppeteer = require('puppeteer')

let scrape = async () => {
  const browser = await puppeteer.launch()
  const [page] = await browser.pages();
  
  let xpathCCIData = config.get('scraping.xpPath');
  await page.goto(config.get('scraping.url'))
  
  await page.waitForTimeout(1000);
  await page.waitForXPath(xpathCCIData);
  let elHandle = await page.$x(xpathCCIData);
  let result = await page.evaluate(el => el.textContent, elHandle[0]);
  
  browser.close()
  return result.replace(/\s/g, "")
}
scrape().then((value) => {
  console.log("CCI:", value)
})