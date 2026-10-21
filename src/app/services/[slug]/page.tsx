import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import Link from 'next/link';
import {BackButton,Breadcrumbs,ClayButton,SectionHeading} from '@/components/ui';
import {DirectQuote,PricingCard} from '@/components/content';
import {packages,projects,services} from '@/data/site';
import {serviceDetails} from '@/data/seo-content';
import {absoluteUrl,breadcrumbSchema,JsonLd,organizationId,pageMetadata} from '@/lib/seo';

type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return services.map(s=>({slug:s.slug}))}
const searchTitles:Record<string,string>={'web-development':'Business Website Development','application-development':'Web Application & MVP Development','graphic-design':'Graphic Design & Brand Identity',seo:'Technical & On-Page SEO Services','geo-aio':'GEO & AI Search Visibility Services'};
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const s=services.find(x=>x.slug===slug);if(!s)return {title:'Service not found',robots:{index:false}};const d=serviceDetails[slug];return pageMetadata({title:searchTitles[slug],description:d.intro,path:`/services/${slug}`})}

export default async function ServiceDetail({params}:Props){const {slug}=await params;const s=services.find(x=>x.slug===slug);if(!s)notFound();const d=serviceDetails[slug];const pkg=packages.find(p=>p.id===s.packageId)!;const path=`/services/${slug}`;return <div className="container">
  <JsonLd data={breadcrumbSchema([{name:'Home',path:'/'},{name:'Services',path:'/services'},{name:s.title,path}])}/>
  <JsonLd data={{'@context':'https://schema.org','@type':'Service','@id':`${absoluteUrl(path)}#service`,name:d.heading,description:d.intro,url:absoluteUrl(path),provider:{'@id':organizationId}}}/>
  <div className="page-hero"><Breadcrumbs items={[{label:'Home',href:'/'},{label:'Services',href:'/services'},{label:s.title}]}/><BackButton fallback="/services" label="Back to Services"/><div style={{height:32}}/><span className="eyebrow">{s.kicker}</span><h1>{d.heading}</h1><p>{d.intro}</p><ClayButton href={`/contact?service=${encodeURIComponent(s.title)}`}>Discuss Your Project</ClayButton></div>
  <div className="service-detail-grid"><div className="detail-panel"><SectionHeading eyebrow="WHO IT HELPS" title="A practical fit."/><p>{d.audience}</p><h3>Included in the starting scope</h3><ul>{s.deliverables.map(item=><li key={item}>{item}</li>)}</ul><p className="notice">{s.exclusions}</p></div><div className="detail-panel"><SectionHeading eyebrow="HOW WE WORK" title="From brief to handoff."/><ol className="seo-list">{d.process.map(step=><li key={step}>{step}</li>)}</ol><p>Final deliverables, revision rounds, timing and price are confirmed in a written quotation.</p><Link className="section-link" href="/payment-process">How projects and payment work ↗</Link></div></div>
  <section className="section"><SectionHeading eyebrow="RELEVANT WORK" title="See the approach in context."/>{d.proofContext&&<p>{d.proofContext}</p>}{d.projectSlugs.length?<div className="seo-related">{d.projectSlugs.map(projectSlug=>{const project=projects.find(p=>p.slug===projectSlug)!;return <Link key={project.slug} href={`/work/${project.slug}`}><strong>{project.title}</strong><span>{project.status} · {project.summary}</span></Link>})}</div>:<p>There is no published client case study for this service yet. We can discuss the scope and evidence available for your project directly.</p>}</section>
  <section className="section"><SectionHeading eyebrow="STARTING PRICE" title="A package to discuss."/><p>Starting at USD {pkg.usd.toLocaleString('en-US')} or PKR {pkg.pkr.toLocaleString('en-PK')}. Your final quote depends on the agreed scope. <Link className="text-link" href="/pricing">Compare all starting packages</Link> and their exclusions.</p><div className="pricing-grid"><PricingCard item={pkg}/></div></section>
  <section className="section"><SectionHeading eyebrow="COMMON QUESTIONS" title="Good to know."/><div className="seo-answers">{d.questions.map(([question,answer])=><div key={question}><h3>{question}</h3><p>{answer}</p></div>)}</div></section>
  <section className="section"><SectionHeading eyebrow="REQUEST A QUOTE" title="Tell us what you need."/><p>Send the service and package name in a WhatsApp draft, then add your goals, timing and preferred currency before you press Send. Or use the <Link className="text-link" href={`/contact?service=${encodeURIComponent(s.title)}`}>project brief form</Link> for a more detailed inquiry.</p><DirectQuote service={s.title} packageName={pkg.title}/></section>
</div>}
