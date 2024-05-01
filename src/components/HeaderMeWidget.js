"use client";
import Image from "next/image";
import localFont from 'next/font/local'


const Futura = localFont({
    src:'../app/fonts/futura/futura-pt-heavy.otf',
  });

export default function HeaderMeWidget(){
return <>
<div className="flex flex-col gap-0 mt-40 lg:mt-10 justify-center items-center h-[60%] lg:h-[60%] py-[80px] lg:py-[96px] z-[-2]">
<div className=" max-w-[848px] w-full mx-auto mt-[40px] flex flex-col justify-center items-center ">
    <a href="#testimonials" className="transition-all hover:scale-95 hover:shadow-md hover:shadow-blue-600/10 mb-2 lg:mb-10 flex flex-nowrap bg-white/10 items-center gap-x-4 px-4 py-1 rounded-full border border-1 border-white/20" 

 >
        <div className="flex justify-between">
           <Image width={100} height={100}   src="https://assets-global.website-files.com/65675497339de7489174ba89/656766c15b1339ff60443249_Man.webp" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 24px, 32px" srcSet="https://assets-global.website-files.com/65675497339de7489174ba89/656766c15b1339ff60443249_Man-p-500.webp 500w, https://assets-global.website-files.com/65675497339de7489174ba89/656766c15b1339ff60443249_Man-p-800.webp 800w, https://assets-global.website-files.com/65675497339de7489174ba89/656766c15b1339ff60443249_Man.webp 1000w" alt="" className="size-10 rounded-full" />
           <Image width={100} height={100}   src="https://assets-global.website-files.com/65675497339de7489174ba89/656766c06315ff339fdf340a_Woman-3.webp" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 24px, 32px" srcSet="https://assets-global.website-files.com/65675497339de7489174ba89/656766c06315ff339fdf340a_Woman-3-p-500.webp 500w, https://assets-global.website-files.com/65675497339de7489174ba89/656766c06315ff339fdf340a_Woman-3-p-800.webp 800w, https://assets-global.website-files.com/65675497339de7489174ba89/656766c06315ff339fdf340a_Woman-3.webp 1000w" alt="" className="size-10 rounded-full -mx-4" />
           <Image width={100} height={100}   src="https://assets-global.website-files.com/65675497339de7489174ba89/656766c0ccd23842c8a1090f_Man-8.webp" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 24px, 32px" srcSet="https://assets-global.website-files.com/65675497339de7489174ba89/656766c0ccd23842c8a1090f_Man-8-p-500.webp 500w, https://assets-global.website-files.com/65675497339de7489174ba89/656766c0ccd23842c8a1090f_Man-8-p-800.webp 800w, https://assets-global.website-files.com/65675497339de7489174ba89/656766c0ccd23842c8a1090f_Man-8.webp 1000w" alt="" className="size-10 rounded-full -mx-2" />
        </div>
        <div className="w-auto flex gap-x-3 items-center">
            <div className="">What Others Say About Me</div>
           <Image width={100} height={100} className="size-4"   src="https://assets-global.website-files.com/65675497339de7489174ba89/65676a663ec7c67855c2f433_Arrow%20Right.svg" loading="lazy" alt="" />
        </div> 
    </a>

    <h1 id="scroll-in-h1" className={`${Futura.className} mb-8 text-center text-white tracking-[-1.2px] uppercase mt-0 font-semibold text-3xl  lg:leading-[92%]`}>
        <span className="hero-h1 text-blue-600">
            <span className="tricksword">
                <span className="letter">G</span>
                <span className="letter">r</span>
                <span className="letter">o</span>
                <span className="letter">w</span>
            </span>
        </span>
        <span className="hero-h1">
            <span className="tricksword">
                <span className="letter">P</span>
                <span className="letter">R</span>
                <span className="letter">O</span>
                <span className="letter">F</span>
                <span className="letter">I</span>
                <span className="letter">T</span>
            </span>
        </span>
        <span className="hero-h1">
            <span className="tricksword">
                <span className="letter">W</span>
                <span className="letter">i</span>
                <span className="letter">t</span>
                <span className="letter">h</span>
            </span>
        </span>
        <span className="hero-h1">
            <span className="tricksword">
                <span className="letter">M</span>
                <span className="letter">Y</span>
            </span>
        </span>
        <span className="hero-h1">
            <span className="tricksword">
                <span className="letter">S</span>
                <span className="letter">t</span>
                <span className="letter">r</span>
                <span className="letter">a</span>
                <span className="letter">t</span>
                <span className="letter">e</span>
                <span className="letter">g</span>
                <span className="letter">y</span>
            </span>
        </span>
        <span className="hero-h1">
            <span className="tricksword">
                <span className="letter">F</span>
                <span className="letter">i</span>
                <span className="letter">r</span>
                <span className="letter">s</span>
                <span className="letter">t</span>
            </span>
        </span>
        <span className="hero-h1">
            <span className="tricksword">
                <span className="letter">A</span>
                <span className="letter">p</span>
                <span className="letter">p</span>
                <span className="letter">r</span>
                <span className="letter">o</span>
                <span className="letter">a</span>
                <span className="letter">c</span>
                <span className="letter">h</span>
            </span>
        </span>
    </h1>

    <p  className="text-[18px] text-center max-w-[320px] lg:max-w-[500px] mx-auto mb-40">Forge &apos; s sales and marketing solutions are strategically assigned each month to adapt quickly and hit your goals.</p> 

    <a  target="_blank" className="bg-white px-6 py-4 rounded-xl text-black font-bold text-xl cursor-pointer hover:bg-opacity-95 transition-all hover:scale-[9">Book a Free Consultation</a>

</div>



</div>


</>
}