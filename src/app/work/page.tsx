import type {Metadata} from 'next';
import {WorkFilter} from '@/components/content';
export const metadata:Metadata={title:'Selected Work',description:'Browse personal web projects, NEXT Studio identity work and clearly labeled design concepts.'};
export default function Work(){return <div className="container"><div className="page-hero"><span className="eyebrow">SELECTED WORK</span><h1>Proof in the<br/>details.</h1><p>Working web projects, original identity explorations, and graphic studies. Each piece is labeled by its actual status.</p></div><WorkFilter/></div>}
