'use client';
import localFont from 'next/font/local';
import HeaderWidget from "../components/HeaderWidget";
import Hero from "@/components/Hero";
import AboutWidget from "@/components/AboutWidget";
import SectionWidget from "@/components/SectionWidget";
import FooterWidget from "@/components/FooterWidget";
import TestimoniesWidget from "@/components/TestimoniesWidget";
import SectionWidgetTop from "@/components/SectionWidgetTop";




const Futura = localFont({
  src:'./fonts/futura/futura-pt-book.otf',
});



export default function Home() {


  return (
      <main className={`${Futura.className} p-2`} >
   <Hero/>
   <SectionWidgetTop/>
   <AboutWidget/>
   <SectionWidget/>
   <TestimoniesWidget/>

   {/* 
   
  
   <FooterWidget/> */}
     </main>
  );
}
