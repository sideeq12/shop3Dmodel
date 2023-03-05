"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styled from 'styled-components'
import  gsap from "gsap"
import  ScrollTrigger  from "gsap/dist/ScrollTrigger";
import { useEffect } from 'react'

const Cover = styled.div`
  #component{
    width: 100vw;
    height: 100vh;
  }
    .one{
      background: antiquewhite;
    }
    .two{
      background: aqua;
    }
    .three{
      background: aquamarine;
    }
    .four{
      background: chocolate;
    }
    .five{
      background-color: cyan;
    }
  

`


export default function Home() {
  
gsap.registerPlugin(ScrollTrigger);


useEffect(()=>{
  const components = document.querySelectorAll("#component");
  const container = document.querySelector("#container")

  gsap.to(components, {
    xPercent : -100*(components.length-1),
    ease : "none",
    scrollTrigger : {
      trigger : container,
      pin : true,
      scrub : 1,
      snap : 1/(components.length-1),
      end : ()=>"+=".container.offsetWidth
    }
  })
}, [])

  return (
    <Cover id='container' className='container'>
        <div id='component' className='one'>Primary</div>
        <div id='component' className='two'>secondary</div>
        <div id='component' className='three'>three</div>
        <div id='component' className='four'>fourth</div>
        <div id='component' className='five'>Fifth</div>
    </Cover>
     )
}
