import {chromium} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const browser=await chromium.launch({channel:'chrome',headless:true});
const origin=process.env.TEST_ORIGIN||'http://localhost:3001';
fs.mkdirSync('artifacts',{recursive:true});
const context=await browser.newContext({viewport:{width:1440,height:900},reducedMotion:'reduce'});
const page=await context.newPage();
const errors=[];page.on('pageerror',e=>errors.push(e.message));
const results=[];
for(const route of ['/','/services','/services/web-development','/work','/work/cineverse','/work/freelancerflow','/work/pure-roots','/work/next-studio-identity','/work/new-year-study','/work/car-wash-study','/work/double-exposure-study','/work/smart-move-study','/pricing','/about','/contact','/privacy','/terms','/payment-process']){
 const response=await page.goto(origin+route,{waitUntil:'networkidle'});assert.equal(response.status(),200,route);
 assert.equal(await page.locator('h1').count(),1,route);
 const axe=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa']).analyze();
 results.push({route,violations:axe.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>n.target)}))});
}
await page.goto(origin+'/pricing',{waitUntil:'networkidle'});
await page.getByRole('button',{name:'PKR',exact:true}).first().click();await page.reload({waitUntil:'networkidle'});await page.waitForTimeout(150);
assert.equal(await page.getByRole('button',{name:'PKR',exact:true}).first().getAttribute('aria-pressed'),'true');
assert.ok((await page.locator('body').innerText()).includes('25,000'));
await page.goto(origin+'/contact',{waitUntil:'networkidle'});
await page.getByRole('button',{name:'Prepare WhatsApp Inquiry'}).click();assert.equal(await page.locator('#name').evaluate(e=>e===document.activeElement),true);
await page.locator('#name').fill('Test Person');await page.locator('#email').fill('test@example.com');await page.locator('#service').selectOption({index:1});await page.locator('#goals').fill('A considered business website with clear navigation.');await page.locator('#consent').check();
await page.evaluate(()=>{window.open=url=>{window.__draft=url;return null}});await page.getByRole('button',{name:'Prepare WhatsApp Inquiry'}).click();assert.ok((await page.evaluate(()=>window.__draft)).startsWith('https://wa.me/966592860289?text='));
await page.setViewportSize({width:390,height:844});await page.goto(origin,{waitUntil:'networkidle'});await page.getByRole('button',{name:'Open menu'}).click();assert.equal(await page.locator('dialog').evaluate(e=>e.open),true);await page.keyboard.press('Escape');assert.equal(await page.locator('dialog').evaluate(e=>e.open),false);
for(const route of ['/work','/pricing','/contact']){await page.goto(origin+route,{waitUntil:'networkidle'});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);await page.screenshot({path:`artifacts/${route.slice(1)}-mobile.png`,fullPage:true})}
fs.writeFileSync('artifacts/verification.json',JSON.stringify({errors,results,currencyPersistence:true,formValidation:true,whatsAppDraft:true,mobileMenu:true},null,2));
console.log(JSON.stringify({errors,results},null,2));await browser.close();assert.equal(errors.length,0);
