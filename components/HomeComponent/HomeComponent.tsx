"use client"

import React from "react"
import { Hind } from "next/font/google";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const hind = Hind({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"]
})

const HomeComponent = () => {
    var settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 2000,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        loop: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1760,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 1460,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 1290,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],

    };

    return (
        <>
            <div id="home"
                style={{
                    backgroundImage: "linear-gradient(to right, white 65%, #48AFDE 35%)" /* "linear-gradient(62deg, #EEF7FB 0 50%, #48AFDE 0% 100%)" */,
                    minHeight: "500px",
                    maxHeight: "1200px",
                    height: "100%",
                    width: "100%",
                }}
            >
                <div className="container m-auto">
                    <div className="grid grid-cols-12">
                        <div className="bg-white flex justify-center col-span-12 md:col-span-5 md:bg-transparent">
                            <div className="container m-auto">
                                <div className="lg:pl-24 sm:pl-10 pl-0 py-20 md:py-0 md:text-start text-center">
                                    <p className={`text-[#47AEDE] text-3xl md:text-base lg:text-2xl ${hind.className}`}>
                                        Oi, meu nome é
                                    </p>
                                    <h1 className="text-[#223740] font-recoletaBlack text-5xl md:text-5xl lg:text-7xl xl:text-7xl mt-5 md:mt-3">
                                        Simon Franklin
                                    </h1>
                                    <h2 className={`text-[#223740] py-2 font-bold uppercase md:text-xl ${hind.className}`}>
                                        Desenvolvedor Front End
                                    </h2>
                                    <div className={`flex gap-10 justify-center sm:justify-normal items-center md:mt-5 xl:mt-10 ${hind.className} font-bold`}>
                                        <a href="#projects"
                                            className={`cursor-pointer inline-block hover:bg-[#223740] transition-all duration-300 ease-in-out text-white font-bold uppercase bg-[#47AEDE] hover:show-lg hover:translate-y-1 rounded-lg py-3 px-5 md:py-2 lg:py-3 lg:px-8 md:text-xs lg:text-base ${hind.className}`}
                                        >
                                            Projetos
                                        </a>
                                        <a
                                            target="_blank"
                                            href="https://docs.google.com/document/d/10jVe3tEInT2ziCtU4MPdN6SJX4GrTaQr/edit?usp=drive_link&ouid=113300837558869934481&rtpof=true&sd=true"
                                            className={`cursor-pointer inline-block bg-[#223740] transition-all duration-300 ease-in-out text-white font-bold uppercase hover:bg-[#47AEDE] hover:show-lg hover:translate-y-1 rounded-lg py-3 px-5 md:py-2 lg:py-3 lg:px-8 md:text-xs lg:text-base ${hind.className}`}
                                        >
                                            Meu Currículo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 pt-[50px] md:bg-transparent bg-[#d9eef7] md:pt-[130px] md:col-span-7">
                            <div className="container m-auto">
                                <img src="/simonfranklin.png" alt="Profile pics" decoding="async" />
                            </div>
                        </div>
                    </div>
                    <div className="container m-auto absolute">
                        <div className="px-3">
                            <div className="relative max-w-sm  xl:bottom-[70px] md:max-w-5xl xl:max-w-6xl px-5 lg:px-14 overflow-auto mx-auto bg-white rounded-2xl z-20"
                                style={{ boxShadow: "#48AFDE -10px 25px 50px 10px" }}
                            >
                                <div className="lg:py-10 sm:py-6 py-2 cursor-all-scroll">
                                    <Slider {...settings}>
                                        <img src="/mongodb.png" alt="mongodb" className="h-12" />
                                        <img src="/reactjs.png" alt="reactjs" className="h-12" />
                                        <img src="/nextjs.png" alt="nextjs" className="h-12" />
                                        <img src="/typescript.png" alt="typescript" className="h-12" />
                                        <img src="/expressjs.png" alt="expressjs" className="h-12" />
                                        <img src="/nodejs.png" alt="nodejs" className="h-12" />
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComponent