import {chromium} from '@playwright/test';
import fs from 'node:fs';
const origin=process.argv[2]||'http://localhost:3002';
const browser=await chromium.launch({channel:'chrome',headless:true});
const rows=[];
for(const viewport of [{name:'mobile',width:390,height:844},{name:'desktop',width:1440,height:900}]){
  const context=await browser.newContext({viewport,deviceScaleFactor:1});
  for(const route of ['/','/services/web-development','/work/cineverse']){
    const page=await context.newPage();
    await page.addInitScript(()=>{
      window.__vitals={lcp:0,cls:0};
      new PerformanceObserver(list=>{for(const entry of list.getEntries())window.__vitals.lcp=entry.startTime}).observe({type:'largest-contentful-paint',buffered:true});
      new PerformanceObserver(list=>{for(const entry of list.getEntries())if(!entry.hadRecentInput)window.__vitals.cls+=entry.value}).observe({type:'layout-shift',buffered:true});
    });
    try{const response=await page.goto(origin+route,{waitUntil:'networkidle',timeout:30000});await page.waitForTimeout(700);rows.push({origin,viewport:viewport.name,route,status:response.status(),...await page.evaluate(()=>window.__vitals)});}catch(error){rows.push({origin,viewport:viewport.name,route,error:String(error)})}finally{await page.close()}
  }
  await context.close();
}
await browser.close();
fs.mkdirSync('artifacts',{recursive:true});
fs.writeFileSync(`artifacts/vitals-${origin.includes('localhost')?'local':'live'}.json`,JSON.stringify(rows,null,2));
console.log(JSON.stringify(rows,null,2));
