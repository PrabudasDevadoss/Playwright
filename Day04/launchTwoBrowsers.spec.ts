import {test, chromium, firefox} from '@playwright/test'
test ('open Redbus in Edge browser', async() =>{
    const browser = await chromium.launch({channel:'msedge'})
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://www.redbus.in')
    console.log (`Page title is : ${await page.title()}`)
    console.log (`Page url is : ${await page.url()}`)
}
)
test ('open Flipkart in FireFox browser', async() =>{
    const browser = await firefox.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://www.flipkart.com')
    console.log (`Page title is : ${await page.title()}`)
    console.log (`Page url is : ${await page.url()}`)
}
)
test ('launch google in chrome', async({page}) => {

    await page.goto('https://www.google.com')
    console.log (`Page title is : ${await page.title()}`)
    console.log (`Page url is : ${await page.url()}`)

}

)