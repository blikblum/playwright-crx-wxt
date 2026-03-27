import { crx } from 'playwright-crx'


export async function testPlaywright() {
  console.log('Testing Playwright...')
  const crxApp = await crx.start({ slowMo: 500 });
  
  const page = await crxApp.newPage()
  await page.goto('https://example.com');

  console.log(await page.title()) // Should print "Example Domain"  
}
