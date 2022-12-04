import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Slide1 from '../components/Slide1'
import Slide2 from '../components/Slide2'
import Slide3 from '../components/Slide3'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [counter, setCounter] = useState<number>(1);
  
  function loop(count: number) {
    if (count>3){
      return count=1;
    }
    if (count<1) {
      return count = 2;
    }
    return count;
  }

  useEffect(()=>{
    const interval = setInterval(
      ()=> setCounter(count=>loop(count+1))
    ,5000);
    return ()=> clearInterval(interval)
  })

  return (
    <div className="">
      <Head>
        <title>Example Professional Website</title>
        <meta name="description" content="SEO CONTENT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between items-center pl-7 bg-gray-100">
        <div className="">
          <a className="text-2xl text-weborange" href="/">Website</a>
        </div>
        <div className="flex items-center">
          <nav>
            <ul className="flex mx-7">
              <li>
                <button className="p-5 hover:bg-white duration-500">Locations</button>
              </li>
              <li>
                <button className="p-5 hover:bg-white duration-500">Offers</button>
              </li>
              <li>
                <button className="p-5 hover:bg-white duration-500">About</button>
              </li>
              <li>
                <button className="p-5 hover:bg-white duration-500">The Journal</button>
              </li>
              <li>
                <button className="p-5 hover:bg-white font-bold duration-500">Login</button>
              </li>
            </ul>
          </nav>
          <a className="py-5 hover:bg-webdarkorange duration-500 px-11 bg-weborange font-bold text-white" href="#">Book Now</a>
        </div>
      </header>

      <main className="duration-1000 opacity-0">
        {counter == 1 && <Slide1 />}
        {counter == 2 && <Slide2 />}
        {counter == 3 && <Slide3 />}
      </main>

      <footer className="">
        <p>Copyright © 2022 Getaway House, Inc. All rights reserved.</p>
      </footer>
    </div>
  )
}
