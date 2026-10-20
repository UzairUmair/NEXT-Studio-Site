import fs from 'node:fs';
const origin=process.argv[2]||'https://nextstudio.us.ci';
const paths=['/','/services','/pricing','/work','/about','/contact','/payment-process','/privacy','/terms',...['web-development','application-development','graphic-design','seo','geo-aio'].map(s=>`/services/${s}`),...['cineverse','freelancerflow','pure-roots','next-studio-identity','new-year-study'].map(s=>`/work/${s}`),'/robots.txt','/sitemap.xml'];
const tag=(html,pattern)=>html.match(pattern)?.[1]?.replaceAll('&amp;','&')||'';
const rows=[];
for(const path of paths){try{const response=await fetch(origin+path,{redirect:'follow'});const html=await response.text();rows.push({path,status:response.status,finalUrl:response.url,title:tag(html,/<title>([^<]*)<\/title>/i),description:tag(html,/<meta name="description" content="([^"]*)"/i),canonical:tag(html,/<link rel="canonical" href="([^"]*)"/i),robots:tag(html,/<meta name="robots" content="([^"]*)"/i),h1:tag(html,/<h1[^>]*>(.*?)<\/h1>/is).replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim(),jsonld:(html.match(/type="application\/ld\+json"/g)||[]).length,contentType:response.headers.get('content-type')});}catch(error){rows.push({path,error:String(error)})}}
fs.mkdirSync('artifacts',{recursive:true});
const file=origin.includes('localhost')?'artifacts/local-audit.json':'artifacts/live-before-audit.json';
fs.writeFileSync(file,JSON.stringify(rows,null,2));
console.log(JSON.stringify(rows.map(({path,status,title,robots,canonical,error})=>({path,status,title,robots,canonical,error})),null,2));
