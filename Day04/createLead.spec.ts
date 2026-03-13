import {test,chromium} from '@playwright/test'
test('Create a lead', async({page}) =>{

await page.goto('http://leaftaps.com/opentaps/control/main')
await page.locator('[id ="username"]').fill("democsr")
await page.locator('[id ="password"]').fill("crmsfa")
await page.locator('[class="decorativeSubmit"]').click()
await page.waitForTimeout(3000)
await page.locator('[class="crmsfa"]').click() // click CRM/SFA Logo
//await page.locator('[id="ext-gen528"]').click() // click Create Leads from left menu list
await page.locator('text=Create Lead').nth(0).click()
await page.locator('[id="createLeadForm_companyName"]').fill("TestComp1")
await page.locator('[id="createLeadForm_firstName"]').fill("Prabu1")
await page.locator('[id="createLeadForm_lastName"]').fill("Das1")
await page.locator('[id="createLeadForm_personalTitle"]').fill("Mr")
await page.locator('[id="createLeadForm_generalProfTitle"]').fill("Director")
await page.locator('[id="createLeadForm_annualRevenue"]').fill("100000000")
await page.locator('[id="createLeadForm_departmentName"]').fill("Quality")
await page.locator('[id="createLeadForm_primaryPhoneNumber"]').fill("9000000001")
await page.locator('[class="smallSubmit"]').click()
await page.waitForTimeout(3000)
console.log (`${await page.title()}`)
})
