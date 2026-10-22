import {WhatsAppCTA} from '@/components/whatsapp-cta';
import Image from 'next/image';
import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {HeroAtmosphere} from '@/components/hero-atmosphere';
import {GraphicShowcase} from '@/components/graphic-showcase';
import {TechMarquee} from '@/components/tech-marquee';
import {StudioProcess} from '@/components/studio-process';
import {SectionHeading} from '@/components/ui';
import {DirectQuote,FAQ,PricingCard,ProjectCard,ServiceCard} from '@/components/content';
import {CurrencySwitch} from '@/components/currency';
import {Reveal} from '@/components/reveal';
import {packages,projects,services} from '@/data/site';
import type {Metadata} from 'next';
import {JsonLd,siteOrigin} from '@/lib/seo';
export const metadata:Metadata={alternates:{canonical:siteOrigin+'/'}};
export default function Home(){return <>
  <JsonLd data={{'@context':'https://schema.org','@type':'WebSite',name:'NEXT Studio',url:siteOrigin+'/'}}/>
  <HeroAtmosphere/>
  <section className="section container selected-section" id="selected-work"><Reveal><div className="section-top"><SectionHeading eyebrow="01 / SELECTED WORK" title="A point of view. In every pixel."/><div className="section-aside"><p>Personal projects. Original identities.<br/>Ideas made tangible.</p><Link className="section-link" href="/work">Explore all work <ArrowUpRight size={18}/></Link></div></div></Reveal><div className="selected-grid"><Reveal><ProjectCard project={projects[0]} large/></Reveal><Reveal className="offset-project"><ProjectCard project={projects[2]}/></Reveal></div><Reveal><article className="project-ribbon"><Link className="ribbon-image" href="/work/freelancerflow"><Image src={projects[1].cover} alt="FreelancerFlow productivity interface mockup" fill sizes="(max-width:768px) 100vw, 50vw"/></Link><div><span className="eyebrow">WEB APPLICATION / PERSONAL PROJECT</span><h3>Less admin.<br/>More headspace.</h3><p>FreelancerFlow explores a calmer workspace for independent work.</p><Link className="section-link" href="/work/freelancerflow">Meet FreelancerFlow <ArrowUpRight size={18}/></Link></div></article></Reveal></section>
  <GraphicShowcase/>
  <section className="section container home-services" id="services"><Reveal><div className="section-top"><SectionHeading eyebrow="03 / WHAT WE BUILD" title="Different disciplines. Shared ambition."/><p className="section-aside">From the way your brand looks to the way your digital experience works.</p></div></Reveal><div className="service-grid">{services.map((s,i)=><Reveal key={s.slug}><ServiceCard service={s} index={i}/></Reveal>)}</div></section>
  <TechMarquee/>
  <StudioProcess/>
  <section className="section container"><Reveal><div className="section-top"><SectionHeading eyebrow="05 / A PLACE TO START" title="Ambition, with a clear scope."/><div className="section-aside"><p>Independently set starting prices.<br/>A personal quote for your project.</p><CurrencySwitch/></div></div></Reveal><div className="pricing-grid">{[packages[0],packages[1],packages[4]].map(p=><PricingCard key={p.id} item={p}/>)}</div><div className="pricing-bottom"><span>Final scope, timeline and revision rounds are agreed before invoicing.</span><Link className="section-link" href="/pricing">All seven packages <ArrowUpRight size={18}/></Link></div></section>
  <section className="section container studio-section"><Reveal><div className="studio-composition"><div className="studio-visual"><Image src="/portfolio/identity/neon-workspace-2.webp" alt="NEXT Studio brand presentation in a creative workspace" fill sizes="(max-width:768px) 100vw, 58vw"/><span>IN-HOUSE IDENTITY EXPLORATION</span></div><div className="studio-copy"><span className="eyebrow">06 / THE STUDIO</span><h2>Small details.<br/>A distinct<br/>perspective.</h2><p>We bring visual thinking and front-end craft together. The portfolio is a transparent collection of personal projects, studio work and design concepts.</p><Link className="section-link" href="/about">Get to know NEXT <ArrowUpRight size={18}/></Link></div></div></Reveal></section>
  <section className="section container faq-section"><SectionHeading eyebrow="GOOD TO KNOW" title="Before the first hello."/><FAQ/></section>
  <section className="container"><Reveal><div className="finale"><span className="eyebrow">THE NEXT CHAPTER IS YOURS</span><div className="finale-heading"><h2>Your next<br/><span>starts here.</span></h2><WhatsAppCTA/></div><div className="finale-bottom"><p>An idea, a challenge, a fresh start.<br/>Let’s give it a thoughtful direction.</p><DirectQuote service="A new project"/></div></div></Reveal></section>
</>}
