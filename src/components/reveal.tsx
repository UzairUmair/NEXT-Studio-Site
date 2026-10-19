'use client';
import {useEffect,useRef} from 'react';
import {useReducedMotion,animate} from 'motion/react';
export function Reveal({children,className=''}:{children:React.ReactNode,className?:string}) {
  const ref=useRef<HTMLDivElement>(null);const reduced=useReducedMotion();
  useEffect(()=>{const node=ref.current;if(!node||reduced)return;const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){animate(node,{opacity:[.65,1],y:[18,0]},{duration:.55,ease:[.2,.75,.25,1]});observer.disconnect()}},{threshold:.12});observer.observe(node);return()=>observer.disconnect()},[reduced]);
  return <div ref={ref} className={className}>{children}</div>;
}
