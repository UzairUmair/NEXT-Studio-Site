import type {Metadata} from 'next';
import {CurrencySwitch} from '@/components/currency';
import {PricingCard,FAQ} from '@/components/content';
import {SectionHeading} from '@/components/ui';
import {packages} from '@/data/site';
import {pageMetadata} from '@/lib/seo';
export const metadata:Metadata=pageMetadata({title:'Pricing — Websites, Apps, Branding & SEO',description:'Review indicative USD and PKR starting prices for NEXT Studio websites, MVPs, brand identity, SEO and GEO/AIO work. Request a written, scope-based quote.',path:'/pricing'});
export default function Pricing(){return <div className="container"><div className="page-hero"><span className="eyebrow">PRICING</span><h1>Start with<br/>clarity.</h1><p>Choose a preferred currency and explore starting packages. Every engagement receives a scope-based quotation before any invoice.</p><CurrencySwitch/></div><div className="pricing-grid">{packages.map(p=><PricingCard key={p.id} item={p}/>)}</div><div className="section"><div className="notice">No payment is taken on this website. An invoice is provided after scope approval. Hosting, domains, premium tools, integrations, content and ongoing support are separate unless your quote states otherwise.</div></div><div className="section"><SectionHeading eyebrow="PRICING QUESTIONS" title="Before you begin."/><FAQ/></div></div>}
