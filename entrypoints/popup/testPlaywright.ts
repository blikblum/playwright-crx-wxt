import { chromium } from 'playwright-crx'

export async function testPlaywright() {
  const browser = await chromium.launch({
    headless: false,
  })
  const page = await browser.newPage()
  await page.goto('https://www.example.com')

  console.log(await page.title()) // Should print "Example Domain"

  await browser.close()
}
