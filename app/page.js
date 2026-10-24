"use client";

import NavBar from "./navbar";
import Image from "next/image";
import {useEffect, useRef, useState} from 'react';
import Link from "next/link";

const cards = [
  {
    name: "P'22 Diwali Rigid Box",
    descr: "3 jars, 100g each: almonds, cashews and raisins, with a dry fruit chocolate box, Diwali card and diya, perfect for the ocassion",
    price: "Starts from ₹699",
    image: "p18.jpeg",
  },
  {
    name: "Kids Diwali Big Blue Wooden Basket",
    descr: "1 Cadbury Gems pack, 1 Cadbury Shots box, Nestlé milk chocolate, Snickers, Cadbury Milkina chocolate, peri peri popcorn pack, 4 pc P'22 dry fruit chocolate pack",
    price: "₹660",
    image: "p13.jpeg",
  },
  {
    name: "Healthy Snacking Basket",
    descr: "Mom Makhana cheese cheddar, Mom Makhana cream & onion, Beyond Snack banana chips, ragi jowar chips, Farmley dry fruit pack, P'22 dry fruit chocolates",
    price: "₹440",
    image: "p6.jpeg",
  },
  {
    name: "Diwali Box Set Of 2 Jars",
    descr: "Box set of 2 jars: honey oatmeal cookie and assorted chocolate",
    price: "Starts from ₹550",
    image: "p24.jpeg",
  },
  {
    name: "Dry Fruit Diwali Tray Box",
    descr: "500g of premium almonds and cashews in a peacock-print Diwali tray box",
    price: "Starts from ₹750",
    image: "p22.jpeg",
  },
  {
    name: "Dry Fruit Chocolates With Diya",
    descr: "16 pcs dry fruit chocolates with diya",
    price: "Starts from ₹499",
    image: "p19.jpeg",
  },
  {
    name: "The Golden Lotus Diwali Box",
    descr: "3 jars, 100g each: cookies, dry fruit and chocolate, with 2 golden diyas",
    price: "Starts from ₹650",
    image: "p16.jpeg",
  },
  {
    name: "Diwali Peacock Theme Rigid Box With Diya",
    descr: "Rigid box with 4 big jars, 200g each: cashew, California almonds, milk chocolate and dark chocolate, with 1 diya and a Diwali card",
    price: "Starts from ₹800",
    image: "p11.jpeg",
  },
  {
    name: "The Classic Diwali Box",
    descr: "1 mix dry fruit jar 100g, 1 cookie jar, 8 pcs assorted chocolate box, diya, Diwali card",
    price: "₹800",
    image: "p15.jpeg",
  },
  {
    name: "Diwali Peacock Theme Rigid Box",
    descr: "Rigid box with 4 big jars, 200g each: cashew, California almonds, milk chocolate and dark chocolate, with 2 diyas and a Diwali card",
    price: "Starts from ₹880",
    image: "p9.jpeg",
  },
  {
    name: "Guilt-Free Diwali Delights Box",
    descr: "Eat Better Co date & chocolate almond snacks, Farmley Date Bites, Farmley Peri Peri Party Mix, almond chocolate bar, tealight candles with a diya set, in a premium black gift box",
    price: "₹770",
    image: "p1.jpeg",
  },
  {
    name: "Dryfruit Loaded Chocolate Box",
    descr: "30 pcs dry fruit loaded chocolates in an emerald gift box with a lotus diya",
    price: "Starts from ₹660",
    image: "p2.jpeg",
  },
  {
    name: "The Festive Gift Box",
    descr: "1 diya set, 200g mix dry fruit jar, 1 playing cards set",
    price: "₹750",
    image: "p3.jpeg",
  },
  {
    name: "Assorted Chocolate Box",
    descr: "12 pcs assorted chocolate box",
    price: "₹290",
    image: "p4.jpeg",
  },
  {
    name: "Dry Fruit Chocolate Box",
    descr: "9 pcs dry fruit chocolate box",
    price: "₹250",
    image: "p5.jpeg",
  },
  {
    name: "Diwali Snacking Basket",
    descr: "Haldiram's Mexican nachos 90g pack, Netflix popcorn, Farmley trail mix pack, dry fruit chocolates pack of 4, 4700BC salted caramel popcorn, Paper Boat mango drink, Little Hearts biscuit pack",
    price: "₹575",
    image: "p7.jpeg",
  },
  {
    name: "Dry Fruit Chocolates",
    descr: "20 pcs dry fruit chocolates with light and Diwali card",
    price: "₹550",
    image: "p12.jpeg",
  },
  {
    name: "Festive Bloom Gift Box",
    descr: "3 big cookie jars, 200g tea cake, assorted chocolate box",
    price: "₹1250",
    image: "p14.jpeg",
  },
  {
    name: "Diwali Box Set",
    descr: "Box set of 2 dry fruit jars, 200g each, in a peacock-print gift box",
    price: "Starts from ₹650",
    image: "p28.jpeg",
  },
  {
    name: "Royal Trio Hamper Box",
    descr: "3 jars, 200g each: cashew, dry fruit chocolate and almond, in a lotus-print gift box",
    price: "Starts from ₹750",
    image: "p26.jpeg",
  },
  {
    name: "Royal Quartet Hamper Box",
    descr: "4 jars of almonds, raisins, and dark and milk chocolate, in a peacock and lotus print Diwali box",
    price: "₹1050",
    image: "p30.jpeg",
  },
];

function Card({ name, descr, image, price, index }) {
  const ref = useRef(null)
  const [flipped, setFlipped] = useState(false)
  const isReversed = index % 2 === 1

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setFlipped(true)
      },
      { threshold: 0.7 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="card-flip">
      <div className={`card-inner ${flipped ? 'flipped' : ''}`}>

        <div className="card-back">
          <span className="font-cormorant text-white/20 tracking-widest text-sm">
            PATISSERIE 22
          </span>
        </div>

        <div className={`card-front border border-white/10 p-6 flex justify-between items-center bg-transparent md:grid md:grid-cols-[1fr_1.5fr] md:gap-8 gap-4 backdrop-blur-md ${isReversed ? '[direction:rtl]' : ''}`}>

          <div className="w-full flex flex-col gap-4 [direction:ltr]">
            <h3 className="text-3xl text-[#F0EDE6] md:text-5xl font-cormorant italic">
              {name}
            </h3>
            
            <span className="text-2xl font-cormorant md:text-sm tracking-wider text-[#0D0D0D]">
              {price}
            </span>

            <p className="text-xs font-inter md:text-sm tracking-wider text-[#FFFFFF]/60">
              {descr}
            </p>
          </div>

          <div className="w-full md:h-64 [direction:ltr]">
            <img
              src={image}
              alt={name}
              className="rounded-sm w-full h-full md:object-contain md:rounded-lg object-cover"
            />
          </div>

        </div>

      </div>
    </div>
  )
}


export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#8119bf]">
      <NavBar/>
      <Image
        src={"/decor.png"}
        width={450}
        height={450}
        alt="decoration"
        className="mt-20"
      />
      <div
        className="h-64 w-64 bg-[#FFB547]/30 z-0 blur-[60px] -mt-64 mx-auto"
      />
      <section id="home" className="z-0 px-2 min-h-screen w-full flex flex-col -mt-[280px] z-20">
        <div className="z-30 mx-auto mt-20">

        <h1 className="opacity-0 text-7xl animate-fade-left font-cormorant text-[#f3e6cf]">DIWALI
        </h1> <span className="opacity-0 animate-fade-up [animation-delay:0.5s] block font-cormorant text-4xl uppercase tracking-tight text-[#E6C26E] ml-24 ">
          hampers
        </span>
              
        <p className="opacity-0 animate-fade-right [animation-delay:0.8s] text-[#fff7ea] font-inter font-extralight mt-2 ml-[40%] text-sm mx-auto tracking-widest">
          &mdash; By Patisserie'22
        </p>
       </div> 
        <Image
          src={"/hero.png"}
          height={120}
          width={120}
          alt="Earthern lamp"
          className="mx-auto -mt-6 z-10"
        />
        
        <a href={"#fav"} className="text-[#d9c9b0] font-inter tracking-wide font-extralight mx-auto text-sm border-2 px-2 py-2 rounded-lg bg-[#72159e] shadow-[0_0_15px_rgba(226,213,195,0.1)] mt-2 border border-[#FFB547]/70">Explore Collection ↓</a>

      </section>
      <div className="opacity-0 animate-fade-up [animation-delay:1400ms] flex items-center gap-6 -mt-60 px-4">
  <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#FFFFFF]/50" />

  <h2 className="text-[#FFFFFF]/50 tracking-wider font-inter text-sm whitespace-nowrap">
    Our Hampers
  </h2>

  <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#FFFFFF]/50" />
</div>

<section id="fav" className="w-full h-fit px-4 py-16 mt-8 flex flex-col md:mt-24">

  <div>
    {cards.map((card, index) => (
      <Card key={card.name} {...card} index={index} />
    ))}
  </div>

  <div className="mt-12 flex flex-col text-white">
    <h1 className="text-4xl leading-relaxed mx-auto font-cormorant text-[#C9A96E]">
      Good to Know
    </h1>
    <ol className="list-decimal list-outside font-inter text-sm text-white/80 font-light leading-loose tracking-wider pl-5 -mb-40">
      <li>Orders must be placed in advance.</li>
      <li>Box colour/design may slightly differ from the pictures</li>
      <li>Hamper contents can vary slightly based on availability</li>
      <li>Final order and delivery details are confirmed on WhatsApp</li>
    </ol>
  </div>

</section>
<footer id="cont" className="bg-[#C9A96E] mt-44 py-10 px-6 text-center text-[#0A1510]">
  <p className="font-cormorant mb-1 text-2xl text-[#0A1510] tracking-wider">PATISSERIE'<span className="text-4xl"> 22</span></p>
  <p className="text-[9px] text-[#1A3024] font-inter tracking-widest mb-6">FRESHLY BAKED · EGGLESS · DELHI</p>
  <div className="flex justify-center gap-6 text-blue-500/80 mb-6 font-inter text-sm tracking-widest">
    <a href="https://instagram.com/patisserie22_" target="_blank" rel="noopener noreferrer">Instagram</a>
    <a href="https://wa.me/+917011352004" target="_blank" rel="noopener noreferrer">WhatsApp</a>
  </div>

  <p className="font-cormorant text-xs tracking-widest text-[#0A1510]/60">© PATISSERIE'<span className="text-lg"> 22</span>  · {new Date().getFullYear()}</p>

</footer>
</div>

);
}