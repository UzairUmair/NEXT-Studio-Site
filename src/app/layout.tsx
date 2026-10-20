import type { Metadata } from 'next';
import './globals.css';
import './premium.css';
import {CurrencyProvider} from '@/components/currency';
import {Header,Footer,FloatingActions} from '@/components/layout';
import {absoluteUrl,JsonLd,organizationId,siteName,siteOrigin} from '@/lib/seo';
const isPreview=process.env.VERCEL_ENV==='preview';
export const metadata:Metadata={metadataBase:new URL(siteOrigin),applicationName:siteName,title:{default:'NEXT Studio — Websites, Apps, Branding & Search',template:'%s | NEXT Studio'},description:'NEXT Studio creates business websites, web applications, brand identities and practical search improvements. Explore real projects and request a quote.',robots:{index:!isPreview,follow:!isPreview},openGraph:{type:'website',siteName,title:'NEXT Studio — Websites, Apps, Branding & Search',description:'An independent digital studio for websites, apps, branding and search.',url:siteOrigin,images:[{url:absoluteUrl('/og/next-studio.webp'),width:1200,height:630,alt:'NEXT Studio identity and digital work'}]},twitter:{card:'summary_large_image'},verification:{google:process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION||undefined}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><JsonLd data={{'@context':'https://schema.org','@type':'Organization','@id':organizationId,name:siteName,url:siteOrigin,logo:absoluteUrl('/brand/logo-web.webp'),contactPoint:{'@type':'ContactPoint',contactType:'project inquiries',telephone:'+966592860289',url:'https://wa.me/966592860289'}}}/><a className="skip-link" href="#main">Skip to content</a><CurrencyProvider><Header/><main id="main">{children}</main><Footer/><FloatingActions/></CurrencyProvider></body></html>}
