'use client';
import Link from 'next/link';
import {ArrowLeft,ArrowUpRight} from 'lucide-react';
import type {ReactNode,PointerEvent} from 'react';
export function ClayButton({href,children,secondary=false,external=false,className=''}:{href:string,children:ReactNode,secondary?:boolean,external?:boolean,className?:string}){
  function highlight(event:PointerEvent<HTMLAnchorElement>){if(event.pointerType!=='mouse'||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const rect=event.currentTarget.getBoundingClientRect();event.currentTarget.style.setProperty('--pointer-x',`${event.clientX-rect.left}px`);event.currentTarget.style.setProperty('--pointer-y',`${event.clientY-rect.top}px`)}
  return <span className="button-wrap"><Link onPointerMove={highlight} className={`clay-button ${secondary?'secondary':''} ${className}`} href={href} target={external?'_blank':undefined} rel={external?'noopener noreferrer':undefined}>{children}<ArrowUpRight size={19} aria-hidden="true" className="button-arrow"/></Link></span>;
}
export function BackButton({fallback='/work',label='Back to Work'}:{fallback?:string,label?:string}){return <Link className="back-button" href={fallback}><ArrowLeft size={18} aria-hidden="true"/>{label}</Link>}
export function SectionHeading({eyebrow,title,copy}:{eyebrow:string,title:string,copy?:string}){return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy&&<p>{copy}</p>}</div>}
