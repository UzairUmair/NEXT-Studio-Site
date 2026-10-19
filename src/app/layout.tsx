import type {Metadata} from 'next';
import './globals.css';
import {CurrencyProvider} from '@/components/currency';
import {Header,Footer,FloatingActions} from '@/components/layout';
export const metadata:Metadata={title:{default:'NEXT Studio — Build What’s NEXT',template:'%s | NEXT Studio'},description:'Web development, web applications, graphic design, SEO and AI-search visibility — designed to move your business forward.',robots:{index:false,follow:false},openGraph:{title:'NEXT Studio — Build What’s NEXT',description:'Thoughtful websites, web applications and visual identities.',images:['/portfolio/identity/neon-workspace.webp']}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><CurrencyProvider><Header/><main id="main">{children}</main><Footer/><FloatingActions/></CurrencyProvider></body></html>}
