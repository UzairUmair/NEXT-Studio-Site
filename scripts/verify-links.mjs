import {chromium} from '@playwright/test';
import fs from 'node:fs';
import assert from 'node:assert/strict';
const browser=await chromium.launch({channel:'chrome',headless:true});
fs.mkdirSync('artifacts',{recursive:true});
const context=await browser.newContext();const page=await context.newPage();
const origin='http://localhost:3002',seen=new Set(),queue=['/'],broken=[],errors=[];
page.on('pageerror',e=>errors.push(e.message));
while(queue.length){const path=queue.shift();if(seen.has(path))continue;seen.add(path);const response=await page.goto(origin+path,{waitUntil:'networkidle'});if(response.status()!==200)broken.push({path,status:response.status()});
 for(const img of await page.locator('img').all()){await img.scrollIntoViewIfNeeded();await img.evaluate(el=>el.decode().catch(()=>{}));}
 const media=await page.locator('img').evaluateAll(imgs=>imgs.filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src));if(media.length)broken.push({path,media});
 for(const href of await page.locator('a[href]').evaluateAll(links=>links.map(a=>a.getAttribute('href')))){if(href.startsWith('/')&&!href.startsWith('//')){const target=href.split(/[?#]/)[0];if(!seen.has(target))queue.push(target)}}
}
const missing=await page.goto(origin+'/missing-page');assert.equal(missing.status(),404);
await page.goto(origin+'/work',{waitUntil:'networkidle'});await page.getByRole('button',{name:'Websites & Apps',exact:true}).click();assert.equal(await page.locator('.project-card').count(),2);await page.getByRole('button',{name:'Branding',exact:true}).click();assert.equal(await page.locator('.project-card').count(),2);
const nojs=await browser.newContext({javaScriptEnabled:false});const staticPage=await nojs.newPage();await staticPage.goto(origin);assert.ok(await staticPage.locator('h1').isVisible());assert.ok(await staticPage.getByRole('link',{name:'Start a project',exact:true}).first().isVisible());
fs.writeFileSync('artifacts/link-verification.json',JSON.stringify({routes:[...seen],broken,errors,unknownRoute404:true,filters:true,noJavaScriptContent:true},null,2));console.log({routes:seen.size,broken,errors});await browser.close();assert.equal(broken.length,0);assert.equal(errors.length,0);
