"use client";
import HeaderMeWidget from "./HeaderMeWidget";
import HeaderWidget from "./HeaderWidget";

export default function Hero(){
    return (
        <section className="h-screen min-h-[840px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('./images/pattern.svg')" }}>

<HeaderWidget/>
<HeaderMeWidget/>


        </section>
    )
}