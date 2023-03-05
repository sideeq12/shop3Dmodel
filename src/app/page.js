"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styled from 'styled-components'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Homepage = styled.section`
  background: yellow;
  color: #fff;
  /* width: 100vw; */
  width: 200vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`
const First_layer = styled.div`
  width: 100vw;
  height: 100vh;
  background: red;
`
const Second_layer = styled.div`
  width: 100vw;
  height: 100vh;
  background: blue;
`
gsap.to(".cover", {
  scrollTrigger : {
    trigger : ".cover",
    toggleActions : "play none reverse none"
  },
  xPercent : 400,
  duration : 4
})

export default function Home() {
  return (
    <Homepage className='cover'>
      <First_layer>
        someone
        </First_layer>
        <Second_layer>
          Layer oo
        </Second_layer>
      </Homepage>
  )
}
