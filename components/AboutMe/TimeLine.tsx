import React, { useEffect, useRef, useState } from "react";
import { Hind } from "next/font/google";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdOutlineComputer } from "react-icons/md";
import { FaRocket } from "react-icons/fa6"; import {
    FaBookReader,
    FaCode,
} from "react-icons/fa";
import { TimeLineI } from "@/utils/utils";

const hind = Hind({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const TimeLine = () => {
    const [isInViewport, setIsInViewport] = useState(false);
    const timelineRef = useRef(null);

    const timeLineInfo: TimeLineI[] = [
        {
            title: "Primeiro Contato com Programação",
            period: "2020 - 2021",
            fact: "Trabalhava como ilustrador, vendendo caricaturas online. Fiz um curso de algoritmos e lógica de programação e decidi mudar de carreira.",
            icon: HiOutlineLightBulb,
        },
        {
            title: "Início dos Estudos em HTML, CSS e JavaScript",
            period: "2021 - 2022",
            fact: "Comecei minha graduação em Análise e Desenvolvimento de Sistemas. Além das aulas na faculdade, fiz alguns cursos focados em desenvolvimento Frontend.",
            icon: FaBookReader,
        },
        {
            title: "Aprofundando no Frontend",
            period: "2022 - 2023",
            fact: "Depois de aprender HTML, CSS e JavaScript, fiz meu primeiro projeto freelancer: uma landing page para um aluno de marketing. Comecei a estudar React e a integração do Frontend com APIs.",
            icon: FaCode,
        },
        {
            title: "Primeiro Emprego",
            period: "2024 - 2025",
            fact: (
                <span>
                    Após muito esforço e várias tentativas em processos seletivos, consegui
                    meu primeiro emprego como Desenvolvedor Frontend na{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/company/zap123/posts/?feedView=all"
                        className="text-[#48AFDE] underline cursor-pointer"
                    >
                        123zap
                    </a>
                    .
                </span>
            ),
            icon: MdOutlineComputer,
        },
        {
            title: "Em busca de novos desafios",
            period: "2025 - Atualmente",
            fact: (
                <span>
                    Consegui uma nova oportunidade como Desenvolvedor Full Stack na{" "}
                    <a
                        href="https://www.linkedin.com/company/pabx-ip-planettech-brasil/posts/?feedView=all"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#47AEDE] underline cursor-pointer"
                    >
                        PlanetTech
                    </a>{" "}
                    e mudei de emprego. Hoje atuo tanto no frontend quanto no backend,
                    participando de projetos cada vez mais complexos e evoluindo
                    constantemente.
                </span>
            ),
            icon: FaRocket,
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Anima só na primeira vez que a timeline aparece
                if (entry.isIntersecting) {
                    setIsInViewport(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 } // A porcentagem do container visível para ativar
        );

        if (timelineRef.current) {
            observer.observe(timelineRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={timelineRef} className="timeline">
            <div
                className={`timeline-line ${isInViewport ? 'animate-moveline' : 'opacity-0'}`}
            />
            {timeLineInfo.map((item, index) => (
                <div
                    key={index}
                    // Cada balão entra quando a linha chega na altura dele (linha dura 2.5s)
                    style={{ animationDelay: `${(index / timeLineInfo.length) * 2500}ms` }}
                    className={`timeline-item ${isInViewport ? 'animate-movedown' : ''} ${index === 1 || index === 3 ? "right-item" : "left-item"
                        }`}>
                    <div className="timeline-item-point">
                        <item.icon className="w-5 h-5" />
                    </div>
                    <div className="text-box">
                        <h2 className="font-[600] text-base sm:text-lg md:text-xl text-[#47AEDE]">
                            {item.title}
                        </h2>
                        <small
                            className={`mb-[15px] inline-block text-[13px] sm:text-base ${hind.className}`}
                        >
                            {item.period}
                        </small>
                        <p className={`text-[13px] sm:text-lg ${hind.className}`}>
                            {item.fact}
                        </p>
                        <span
                            className={`${index === 1 || index % 2 !== 0
                                ? "right-container-arrow"
                                : "left-container-arrow"
                                }`}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TimeLine;
