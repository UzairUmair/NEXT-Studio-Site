'use client';
import {createContext,useContext,useEffect,useState} from 'react';
import {useReducedMotion} from 'motion/react';
import type {Currency} from '@/data/site';
const Context=createContext<{currency:Currency,setCurrency:(v:Currency)=>void}>({currency:'USD',setCurrency:()=>{}});
export function CurrencyProvider({children}:{children:React.ReactNode}){const [currency,setCurrency]=useState<Currency>('USD');useEffect(()=>{const stored=localStorage.getItem('next-currency');if(stored==='USD'||stored==='PKR'){const id=window.setTimeout(()=>setCurrency(stored),0);return()=>window.clearTimeout(id)}},[]);function update(v:Currency){setCurrency(v);localStorage.setItem('next-currency',v)}return <Context.Provider value={{currency,setCurrency:update}}>{children}</Context.Provider>}
export function useCurrency(){return useContext(Context)}
export function CurrencySwitch(){const {currency,setCurrency}=useCurrency();const reduce=useReducedMotion();return <div className="currency-switch" role="group" aria-label="Preferred currency">{(['USD','PKR'] as const).map(item=><button key={item} type="button" aria-pressed={currency===item} className={currency===item?'selected':''} onClick={()=>setCurrency(item)} style={{transitionDuration:reduce?'0ms':undefined}}>{item}</button>)}</div>}

