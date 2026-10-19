import type { Metadata } from 'next';
import './globals.css';
import './premium.css';
import {CurrencyProvider} from '@/components/currency';
import {Header,Footer,FloatingActions} from '@/components/layout';
const configuredUrl=process.env.NEXT_PUBLIC_SITE_URL;
const siteUrl=configuredUrl&&/^https:\/\//.test(configuredUrl)?new URL(configuredUrl):undefined;
export const metadata:Metadata={metadataBase:siteUrl,title:{default:'NEXT Studio — Built for what’s NEXT',template:'%s | NEXT Studio'},description:'Thoughtful websites, web applications, distinctive identities, SEO and AI-search readiness.',robots:{index:!!siteUrl,follow:!!siteUrl},openGraph:{title:'NEXT Studio — Built for what’s NEXT',description:'Digital craft. A forward point of view.',...(siteUrl?{images:['/portfolio/identity/neon-workspace.webp']}: {})}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><CurrencyProvider><Header/><main id="main">{children}</main><Footer/><FloatingActions/></CurrencyProvider></body></html>}
