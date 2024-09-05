"use client"

import React from 'react'
import { Hind } from "next/font/google";
import TimeLine from './TimeLine';
import { Fade } from 'react-awesome-reveal';

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
})

const AboutMe = () => {
  return (
    <div id='about' className='lg:min-h-screen bg-[#E0F3FD] w-full py-[100px] sm:py-[130px]'>
      <div className="container lg:px-24 sm:px-10 px-4 mb-6 mx-auto overflow-hidden">
        <Fade duration={1500} direction='left'>
          <div className='flex flex-col gap-5 items-start mb-5'>
            <div className="text-[#47AEDE] font-recoletaBlack text-3xl md:text-3xl lg:text-5xl xl:text-5xl">
              Sobre mim
            </div>
            <p className={`max-w-2xl font-[300] text-[13px] sm:text-base text-[#47626D] leading-6 sm:leading-8 ${hind.className}`}>
              Sou um Desenvolvedor Frontend, formado em Análise e Desenvolvimento de Sistemas. Minha jornada começou como ilustrador, mas logo descobri minha paixão pela programação. Ao longo dos anos, me aprofundei em tecnologias como HTML, CSS, JavaScript e React. Esta linha do tempo mostra a evolução da minha carreira, desde os primeiros passos até o presente.
            </p>
          </div>
        </Fade>

        <TimeLine />
      </div>
    </div>
  )
}

export default AboutMe