import type {MetadataRoute} from 'next';
import {absoluteUrl} from '@/lib/seo';
export default function robots():MetadataRoute.Robots{return process.env.VERCEL_ENV==='preview'?{rules:{userAgent:'*',disallow:'/'}}:{rules:{userAgent:'*',allow:'/'},sitemap:absoluteUrl('/sitemap.xml')}}
