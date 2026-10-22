import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {projects} from '@/data/site';
import {ProjectCard} from './content';
import {SectionHeading} from './ui';
import {Reveal} from './reveal';

export function GraphicShowcase(){const pieces=projects.filter(p=>['car-wash-study','double-exposure-study','smart-move-study'].includes(p.slug));return <section className="section container graphic-showcase" id="graphic-studies">
  <div className="section-top"><SectionHeading eyebrow="02 / THE VISUAL NOTEBOOK" title="A different way to see it."/><div className="section-aside"><p>Composition, color and a little curiosity. A selection of our graphic design studies.</p><Link href="/work#portfolio" className="section-link">Explore the collection <ArrowUpRight size={18}/></Link></div></div>
  <div className="graphic-showcase-grid">{pieces.map(p=><Reveal key={p.slug}><ProjectCard project={p}/></Reveal>)}</div>
</section>}
