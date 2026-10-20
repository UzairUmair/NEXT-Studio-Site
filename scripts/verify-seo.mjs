import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const origin=process.env.TEST_ORIGIN||'http://localhost:3002';
const browser=await chromium.launch({channel:'chrome',headless:true});
const context=await browser.newContext({javaScriptEnabled:false,viewport:{width:1440,height:900},reducedMotion:'reduce'});
const page=await context.newPage();
const sitemapResponse=await fetch(`${origin}/sitemap.xml`);
const sitemap=await sitemapResponse.text();
const routes=[...sitemap.matchAll(/<loc>(https:\/\/nextstudio\.us\.ci(?:\/[^<]*)?)<\/loc>/g)].map(match=>new URL(match[1]).pathname);
const rows=[];
try {
  assert.equal(sitemapResponse.status,200);
  assert.ok(sitemapResponse.headers.get('content-type')?.includes('xml'));
  const parsed=await page.evaluate(xml=>{const doc=new DOMParser().parseFromString(xml,'application/xml');return {errors:doc.querySelectorAll('parsererror').length,urls:doc.querySelectorAll('urlset > url > loc').length}},sitemap);
  assert.equal(parsed.errors,0,'sitemap XML parser error');
  assert.equal(parsed.urls,routes.length,'sitemap route count');
  assert.equal(new Set(routes).size,routes.length);
  const robots=await fetch(`${origin}/robots.txt`);
  assert.equal(robots.status,200);
  assert.match(await robots.text(),/Sitemap: https:\/\/nextstudio\.us\.ci\/sitemap\.xml/);
  for(const route of routes){
    const response=await page.goto(`${origin}${route}`,{waitUntil:'domcontentloaded'});
    const data=await page.evaluate(()=>({title:document.title,description:document.querySelector('meta[name="description"]')?.content,canonical:document.querySelector('link[rel="canonical"]')?.href,robots:document.querySelector('meta[name="robots"]')?.content,h1:[...document.querySelectorAll('h1')].map(x=>x.textContent.trim()),og:document.querySelector('meta[property="og:image"]')?.content,jsonld:[...document.querySelectorAll('script[type="application/ld+json"]')].map(x=>JSON.parse(x.textContent))}));
    assert.equal(response.status(),200,route);
    assert.ok(data.title?.length>15,route);
    assert.ok(data.description?.length>50,route);
    assert.equal(new URL(data.canonical).pathname,route,route);
    assert.doesNotMatch(data.robots||'',/noindex|nofollow/,route);
    assert.equal(data.h1.length,1,route);
    assert.ok(data.og,route);
    assert.ok(data.jsonld.some(x=>x['@type']==='Organization'),route);
    rows.push({route,status:response.status(),...data,jsonld:data.jsonld.map(x=>x['@type'])});
  }
  await page.goto(`${origin}/services/does-not-exist`);
  assert.equal((await page.request.get(`${origin}/services/does-not-exist`)).status(),404);
  const mobile=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'});
  const mobilePage=await mobile.newPage();
  fs.mkdirSync('artifacts',{recursive:true});
  for(const route of ['/','/services/web-development','/work/cineverse','/pricing','/contact']){
    await mobilePage.goto(`${origin}${route}`,{waitUntil:'networkidle'});
    assert.ok(await mobilePage.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`overflow: ${route}`);
    await mobilePage.screenshot({path:`artifacts/seo-${route==='/'?'home':route.slice(1).replaceAll('/','-')}-mobile.png`,fullPage:true});
  }
  fs.writeFileSync('artifacts/seo-verification.json',JSON.stringify({origin,routes:rows},null,2));
  console.log(`SEO checks passed for ${rows.length} sitemap routes; mobile overflow checked on 5 routes.`);
  await mobile.close();
}finally{await browser.close()}
