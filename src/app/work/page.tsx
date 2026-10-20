import type {Metadata} from 'next';
import {WorkFilter} from '@/components/content';
import {pageMetadata} from '@/lib/seo';
export const metadata:Metadata=pageMetadata({title:'Portfolio — Web Projects & Design Concepts',description:'Explore CineVerse and FreelancerFlow personal projects, the Pure Roots identity concept, and original NEXT Studio design work. Every project shows its real status.',path:'/work'});
export default function Work(){return <div className="container"><div className="page-hero"><span className="eyebrow">SELECTED WORK</span><h1>Proof in the<br/>details.</h1><p>Working web projects, original identity explorations, and graphic studies. Each piece is labeled by its actual status.</p></div><WorkFilter/></div>}
