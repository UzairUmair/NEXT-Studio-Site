'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowUp, ArrowUpRight, MessageCircle } from 'lucide-react';
import { CurrencySwitch, useCurrency } from './currency';
import { quoteUrl } from '@/data/site';

const links = [['Work','/work'],['Services','/services'],['Pricing','/pricing'],['About','/about'],['Contact','/contact']];

export function Header() {
  const pathname = usePathname();
  const home = pathname === '/';
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (open) {
      element.showModal();
      const previous = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = previous; element.close(); };
    }
    element.close();
  }, [open]);
  function close() { setOpen(false); toggle.current?.focus(); }
  return <>
    <header className={`site-header ${home ? 'home-header' : 'inner-header'}`}>
      <div className="header-inner">
        <div className="brand-group">
          <Link href="/" className="logo-link" aria-label="NEXT Studio home"><Image src="/brand/logo-web.webp" alt="NEXT Studio" width={800} height={238} priority /></Link>
          <CurrencySwitch />
        </div>
        <nav className="nav-pills" aria-label="Main navigation">
          {links.map(([label,href]) => <Link key={href} href={href} className={pathname===href||pathname.startsWith(href+'/')?'active':''} aria-current={pathname===href?'page':undefined}>{label}</Link>)}
        </nav>
        <Link href="/contact" className="talk-pill"><span aria-hidden="true" className="status-dot"/>Let’s talk<ArrowUpRight size={16}/></Link>
        <button ref={toggle} className="menu-toggle" aria-label="Open menu" aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(true)}><Menu size={21}/></button>
      </div>
    </header>
    <dialog ref={dialog} id="mobile-menu" aria-label="Navigation" className="mobile-dialog" onCancel={close} onClick={e=>{if(e.target===dialog.current)close()}}>
      <div className="mobile-menu">
        <div className="menu-head"><span>NEXT / NAVIGATION</span><button onClick={close} className="menu-toggle" aria-label="Close menu"><X/></button></div>
        <nav aria-label="Mobile navigation">{links.map(([label,href],i)=><Link key={href} href={href} onClick={close}><span>0{i+1}</span>{label}<ArrowUpRight/></Link>)}</nav>
        <p>Clear scope. Honest timelines.<br/>Direct communication.</p>
        <Link className="clay-button" href="/contact" onClick={close}>Start a project <ArrowUpRight size={18}/></Link>
      </div>
    </dialog>
  </>;
}

export function Footer() { return <footer className="footer"><div className="container footer-grid"><div className="footer-brand"><Image src="/brand/logo-web.webp" alt="NEXT Studio" width={200} height={60}/><p>Digital craft.<br/>A forward point of view.</p></div><div><b>Explore</b><Link href="/work">Selected work</Link><Link href="/services">Services</Link><Link href="/pricing">Pricing</Link><Link href="/about">The studio</Link></div><div><b>Get in touch</b><Link href="/contact">Start a project ↗</Link><a href="https://wa.me/966592860289" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} NEXT Studio</span><span>Independent by design.</span><Link href="/payment-process">How payment works ↗</Link></div></footer>; }

export function FloatingActions() {
  const [show,setShow]=useState(false);
  const {currency}=useCurrency();
  useEffect(()=>{const scroll=()=>setShow(window.scrollY>600);window.addEventListener('scroll',scroll,{passive:true});return()=>window.removeEventListener('scroll',scroll)},[]);
  return <div className="floating-actions"><a className="float-chat" href={quoteUrl('A new project',undefined,currency)} target="_blank" rel="noopener noreferrer" aria-label="Discuss a project on WhatsApp"><MessageCircle size={21}/><span>Let’s connect</span></a>{show&&<button className="to-top" aria-label="Scroll to top" onClick={()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}><ArrowUp size={18}/></button>}</div>;
}
