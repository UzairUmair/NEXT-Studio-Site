import type {Metadata} from 'next';
import {ServiceCard} from '@/components/content';
import {SectionHeading} from '@/components/ui';
import {services} from '@/data/site';
import {pageMetadata} from '@/lib/seo';
export const metadata:Metadata=pageMetadata({title:'Websites, Apps, Branding & Search Services',description:'Compare NEXT Studio website development, web application, brand identity, technical SEO and AI-search-readiness services. See scope, examples and starting prices.',path:'/services'});
export default function Services(){return <div className="container"><div className="page-hero"><span className="eyebrow">WHAT WE DO</span><h1>Ideas into<br/>experiences.</h1><p>Five connected disciplines for businesses ready to look sharper, work smarter, and communicate clearly.</p></div><div className="service-grid">{services.map((s,i)=><ServiceCard key={s.slug} service={s} index={i}/>)}</div><div className="section"><SectionHeading eyebrow="OUR APPROACH" title="Start with the right question." copy="Each engagement starts by defining what the work needs to achieve. Deliverables, revisions and timing are then written into a quotation."/></div></div>}
