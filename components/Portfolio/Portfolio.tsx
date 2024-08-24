import React from 'react'
import { Hind } from "next/font/google";
import Slider3D from './Slider3d';

const hind = Hind({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"]
})

const Portfolio = () => {

    return (
        <div className='lg:min-h-screen w-full py-[100px] sm:py-[130px]' id='projects' style={{ backgroundImage: "linear-gradient(-62deg, #EEF7FB 0 50%, white 0% 100%)" }}>
            <div className="container mx-auto lg:px-24 sm:px-10 px-4 mb-6">
                <div className='flex flex-col gap-5 items-start'>
                    <div className="text-[#47AEDE] font-recoletaBlack text-3xl md:text-3xl lg:text-5xl xl:text-5xl">
                        Trabalhos Recentes
                    </div>
                    <p className={`max-w-2xl font-[300] text-[13px] sm:text-base text-[#47626D] leading-6 sm:leading-8 ${hind.className}`}>
                        Aqui estão alguns dos meus projetos como desenvolvedor Frontend. Esses projetos demonstram minha capacidade de criar aplicações web dinâmicas e responsivas. Cada projeto mostra minhas habilidades em React, gerenciamento de estado e integração com APIs. Sou apaixonado por construir aplicações de alta qualidade que proporcionem uma excelente experiência ao usuário e me esforço continuamente para melhorar dia após dia.
                    </p>
                </div>
            </div>
            <Slider3D />
        </div>
    )
}

export default Portfolio