'use client';
import {useState} from 'react';
import Image from 'next/image';
import {Pause,Play} from 'lucide-react';
const rows=[
 [{name:'Git',slug:'git',color:'#f05032'},{name:'React',slug:'react',color:'#61dafb'},{name:'Node.js',slug:'nodedotjs',color:'#5fa04e'},{name:'Firebase',slug:'firebase',color:'#ffca28'},{name:'GitHub',slug:'github',color:'#ffffff'}],
 [{name:'HTML',slug:'html5',color:'#e34f26'},{name:'JavaScript',slug:'javascript',color:'#f7df1e'},{name:'CSS',slug:'css',color:'#663399'},{name:'Next.js',slug:'nextdotjs',color:'#ffffff'},{name:'Tailwind CSS',slug:'tailwindcss',color:'#06b6d4'}],
 [{name:'GitHub',slug:'github',color:'#ffffff'},{name:'TypeScript',slug:'typescript',color:'#3178c6'},{name:'Tailwind CSS',slug:'tailwindcss',color:'#06b6d4'},{name:'React',slug:'react',color:'#61dafb'},{name:'Node.js',slug:'nodedotjs',color:'#5fa04e'}],
];
export function TechMarquee(){const [paused,setPaused]=useState(false);return <section className={`section tech-section ${paused?'is-paused':''}`} id="tech-stack" aria-labelledby="tech-heading">
 <div className="container tech-heading"><h2 id="tech-heading">The tools behind our work</h2><p>Modern technologies for thoughtful digital experiences.</p></div>
 <div className="tech-window">{rows.map((row,index)=><div className={`tech-track tech-track-${index}`} key={index}>{[0,1].map(copy=><div className="tech-group" key={copy} aria-hidden={copy===1?true:undefined}>{row.map(tool=><div className="tech-tile" key={tool.name} style={{'--tech-color':tool.color} as React.CSSProperties} title={tool.name}><Image src={`/tech/${tool.slug}.svg`} alt={tool.name} loading="eager" width={68} height={68}/><span>{tool.name}</span></div>)}</div>)}</div>)}</div>
 <div className="tech-controls"><button className="tech-motion-toggle" onClick={()=>setPaused(!paused)} aria-pressed={paused}>{paused?<Play size={14}/>:<Pause size={14}/>} {paused?'Resume animation':'Pause animation'}</button></div>
 </section>}
