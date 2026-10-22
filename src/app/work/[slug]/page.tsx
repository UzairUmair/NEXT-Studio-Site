import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {BackButton,Breadcrumbs,ClayButton,SectionHeading} from '@/components/ui';
import {ProjectCard} from '@/components/content';
import {projects,services} from '@/data/site';
import {projectDetails} from '@/data/seo-content';
import {absoluteUrl,breadcrumbSchema,JsonLd,pageMetadata} from '@/lib/seo';
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
const caseTitles:Record<string,string>={cineverse:'CineVerse — Movie Discovery Personal Project',freelancerflow:'FreelancerFlow — Productivity App Concept','pure-roots':'Pure Roots — Brand Identity Concept','next-studio-identity':'NEXT Studio — In-House Brand Identity','new-year-study':'New Year — Typography Study'};
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const p=projects.find(x=>x.slug===slug);if(!p)return {title:'Project not found',robots:{index:false}};return pageMetadata({title:caseTitles[slug]||p.title,description:`${p.summary} ${p.description}`,path:`/work/${slug}`,image:p.cover})}
export default async function WorkDetail({params}:Props){const {slug}=await params;const p=projects.find(x=>x.slug===slug);if(!p)notFound();const d=projectDetails[slug];const next=projects[(projects.findIndex(x=>x.slug===slug)+1)%projects.length];const related=services.find(s=>s.slug===d.relatedService)!;const path=`/work/${slug}`;return <div className="container">
  <JsonLd data={breadcrumbSchema([{name:'Home',path:'/'},{name:'Work',path:'/work'},{name:p.title,path}])}/>
  <JsonLd data={{'@context':'https://schema.org','@type':'CreativeWork',name:p.title,description:p.description,url:absoluteUrl(path),image:absoluteUrl(p.cover),genre:p.category,additionalProperty:{'@type':'PropertyValue',name:'Project status',value:p.status}}}/>
  <div className="page-hero"><Breadcrumbs items={[{label:'Home',href:'/'},{label:'Work',href:'/work'},{label:p.title}]}/><BackButton/><div style={{height:33}}/><span className="eyebrow">{p.category.toUpperCase()} / {p.status.toUpperCase()}</span><h1>{p.title}: {p.status.toLowerCase()}</h1><p>{p.summary}</p></div>
  <div className={`case-hero-image ${p.category==='graphic'?'graphic-full':''}`}><Image src={p.cover} alt={d.imageAlt} fill sizes="(max-width: 1200px) 100vw, 1200px" priority/></div>
  <div className="case-info"><div><SectionHeading eyebrow="THE PROJECT" title="Context & direction."/><p>{p.description}</p><h3>Goal</h3><p>{d.goal}</p><h3>Scope and role</h3><p>{d.scope}</p>{d.approach&&<><h3>Approach</h3><p>{d.approach}</p></>}{d.evidenceLimit&&<><h3>What the evidence shows</h3><p>{d.evidenceLimit}</p></>}<h3>Outcome</h3><p>{d.outcome}</p>{p.sourceUrl&&<a className="section-link" href={p.sourceUrl} target="_blank" rel="noopener noreferrer">Founder’s original case study ↗</a>}{p.liveUrl&&<div style={{marginTop:24}}><ClayButton href={p.liveUrl} external>Visit Live Project</ClayButton></div>}</div><aside><b>Status</b><span>{p.status}</span><b>Category</b><span>{p.category}</span>{p.technologies&&<><b>Documented stack</b><div className="chip-row">{p.technologies.map(t=><span className="chip" key={t}>{t}</span>)}</div></>}</aside></div>
  <section className="section"><SectionHeading eyebrow="DESIGN DECISIONS" title="What shapes the work."/><div className="decision-grid">{p.decisions.map((decision,index)=><div key={decision}><span>0{index+1}</span><p>{decision}</p></div>)}</div></section>
  {p.gallery.length>0&&<section className="section"><SectionHeading eyebrow="MORE TO SEE" title="A closer look."/>{p.gallery.map(gallery=><div className="case-gallery" key={gallery}><Image src={gallery} alt={d.galleryAlt||`Additional ${p.title} presentation`} fill sizes="(max-width: 1200px) 100vw, 1200px"/></div>)}</section>}
  <section className="section"><SectionHeading eyebrow="RELATED SERVICE" title="Build something of your own."/><p>Explore how NEXT Studio approaches <Link className="text-link" href={`/services/${related.slug}`}>{related.title.toLowerCase()}</Link>, or share a brief for a scoped quotation.</p><ClayButton href={`/contact?service=${encodeURIComponent(related.title)}`}>Discuss a Project</ClayButton></section>
  <section className="section"><SectionHeading eyebrow="UP NEXT" title="Keep exploring."/><div className="projects-grid"><ProjectCard project={next}/></div></section>
</div>}
