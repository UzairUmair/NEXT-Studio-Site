'use client';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { Currency } from '@/data/site';
const Context=createContext<{currency:Currency,setCurrency:(v:Currency)=>void}>({currency:'USD',setCurrency:()=>{}});
export function CurrencyProvider({children}:{children:React.ReactNode}) {
  const [currency,setCurrency]=useState<Currency>('USD');
  useEffect(()=>{let id:number|undefined;try{const stored=localStorage.getItem('next-currency');if(stored==='USD'||stored==='PKR')id=window.setTimeout(()=>setCurrency(stored),0)}catch{}return()=>window.clearTimeout(id)},[]);
  const update=useCallback((v:Currency)=>{setCurrency(v);try{localStorage.setItem('next-currency',v)}catch{}},[]);
  const value=useMemo(()=>({currency,setCurrency:update}),[currency,update]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
export function useCurrency(){return useContext(Context)}
export function CurrencySwitch(){const {currency,setCurrency}=useCurrency();return <div className={`currency-switch currency-${currency.toLowerCase()}`} role="group" aria-label="Preferred currency"><span className="currency-indicator" aria-hidden="true"/>{(['USD','PKR'] as const).map(item=><button key={item} type="button" aria-pressed={currency===item} onClick={()=>setCurrency(item)}>{item}</button>)}</div>}
