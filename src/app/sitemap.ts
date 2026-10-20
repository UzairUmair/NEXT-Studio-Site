import type {MetadataRoute} from 'next';
import {projects,services} from '@/data/site';
import {absoluteUrl} from '@/lib/seo';
export default function sitemap():MetadataRoute.Sitemap{const paths=['/','/services','/work','/pricing','/about','/contact','/payment-process','/privacy','/terms',...services.map(s=>`/services/${s.slug}`),...projects.map(p=>`/work/${p.slug}`)];return paths.map(path=>({url:absoluteUrl(path),...(path.startsWith('/work/')?{images:[absoluteUrl(projects.find(p=>path.endsWith(`/${p.slug}`))!.cover)]}:{})}))}
