import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import Link from 'next/link';
import {BackButton,ClayButton,SectionHeading} from '@/components/ui';
import {PricingCard,FAQ} from '@/components/content';
import {packages,services} from '@/data/site';
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return services.map(s=>({slug:s.slug}))}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const s=services.find(x=>x.slug===slug);return s?{title:s.title,description:s.description}:{title:'Service not found'}}
export default async function ServiceDetail({params}:Props){const {slug}=await params;const s=services.find(x=>x.slug===slug);if(!s)notFound();const pkg=packages.find(p=>p.id===s.packageId)!;return <div className="container"><div className="page-hero"><BackButton fallback="/services" label="Back to Services"/><div style={{height:32}}/><span className="eyebrow">{s.kicker}</span><h1>{s.title}.</h1><p>{s.description}</p><ClayButton href={`/contact?service=${encodeURIComponent(s.title)}`}>Discuss Your Project</ClayButton></div><div className="service-detail-grid"><div className="detail-panel"><SectionHeading eyebrow="WHAT WE CAN BUILD" title="Scope with purpose."/><ul>{s.deliverables.map(d=><li key={d}>{d}</li>)}</ul><p className="notice">{s.exclusions}</p></div><div className="detail-panel"><SectionHeading eyebrow="SELECTED CONTEXT" title="A starting point."/><p>{s.example}</p><p>We review your goals, then agree deliverables, revisions and a timeline before any work begins.</p><Link className="section-link" href="/work">Explore the portfolio ↗</Link></div></div><div className="section"><SectionHeading eyebrow="STARTING POINT" title="A package to discuss."/><div className="pricing-grid"><PricingCard item={pkg}/></div></div><div className="section"><SectionHeading eyebrow="COMMON QUESTIONS" title="Good to know."/><FAQ/></div></div>}
