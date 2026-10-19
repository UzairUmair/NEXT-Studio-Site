'use client';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {ArrowLeft,ArrowUpRight} from 'lucide-react';
import {motion,useReducedMotion} from 'motion/react';
import type {ReactNode} from 'react';

export function ClayButton({href,children,secondary=false,external=false,className=''}:{href:string,children:ReactNode,secondary?:boolean,external?:boolean,className?:string}){
 const reduce=useReducedMotion();
 return <motion.div className="button-wrap" whileHover={reduce?undefined:{y:-3,scale:1.02}} whileTap={reduce?undefined:{y:2,scale:.97}} transition={{duration:.19}}><Link className={`clay-button ${secondary?'secondary':''} ${className}`} href={href} target={external?'_blank':undefined} rel={external?'noopener noreferrer':undefined}>{children}<ArrowUpRight size={19} aria-hidden="true" className="button-arrow"/></Link></motion.div>
}
export function BackButton({fallback='/work',label='Back to Work'}:{fallback?:string,label?:string}){const router=useRouter();return <button className="back-button" onClick={()=>{if(typeof window!=='undefined'&&document.referrer&&new URL(document.referrer).origin===window.location.origin&&window.history.length>1)router.back();else router.push(fallback)}}><ArrowLeft size={18} aria-hidden="true"/>{label}</button>}
export function SectionHeading({eyebrow,title,copy}:{eyebrow:string,title:string,copy?:string}){return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy&&<p>{copy}</p>}</div>}
