'use client';
import Image from "next/image";
import localFont from 'next/font/local';
import { motion,AnimatePresence } from "framer-motion";
import { useState } from "react";
import HeaderWidget from "../components/HeaderWidget";
import Hero from "@/components/Hero";
import AboutWidget from "@/components/AboutWidget";





const Futura = localFont({
  src:'./fonts/futura/futura-pt-book.otf',
});



export default function Home() {


  return (
      <main className={`${Futura.className} p-2`}>
   <Hero/>
   <AboutWidget/>
     </main>
  );
}
