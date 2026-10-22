import Image from 'next/image';
import Link from 'next/link';
import {ArrowDown,ArrowUpRight} from 'lucide-react';
import {ClayButton} from './ui';

export function HeroAtmosphere(){return <section className="aurora-hero" aria-label="NEXT Studio introduction">
  <div className="aurora-light" aria-hidden="true"><i/><i/><i/></div>
  <div className="aurora-copy container">
    <span className="studio-signal"><i/>Independent minds. Shared ambition.</span>
    <h1>Make your next<br/><span>impossible to ignore.</span></h1>
    <p>Distinctive brands. Thoughtful websites. Useful digital products.<br className="desktop-break"/> We bring the design and the build together.</p>
    <div className="aurora-actions"><ClayButton href="/contact">Let’s build something</ClayButton><ClayButton href="/work" secondary>Discover our work</ClayButton></div>
    <div className="aurora-disciplines"><Link href="/services/web-development">Websites</Link><span>✦</span><Link href="/services/application-development">Applications</Link><span>✦</span><Link href="/services/graphic-design">Brand & graphic design</Link></div>
  </div>
  <div className="hero-work-strip container">
    <div className="hero-work-intro"><span className="eyebrow">IDEAS, MADE REAL</span><p>A glimpse of<br/>what comes next.</p><a href="#selected-work" aria-label="Scroll to selected work"><ArrowDown size={20}/></a></div>
    <Link href="/work/cineverse" className="hero-work-tile"><div><Image src="/portfolio/web/cineverse-wide.webp" alt="CineVerse movie discovery project" fill sizes="(max-width:600px) 45vw, 28vw"/></div><span>CineVerse <small>Digital experience</small><ArrowUpRight size={18}/></span></Link>
    <Link href="/work/pure-roots" className="hero-work-tile"><div><Image src="/portfolio/pure-roots/social-post.webp" alt="Pure Roots beverage identity concept" fill sizes="(max-width:600px) 45vw, 28vw"/></div><span>Pure Roots <small>Brand exploration</small><ArrowUpRight size={18}/></span></Link>
  </div>
</section>}
