"use client"

import React, { useRef, useState } from "react";
import { Hind } from "next/font/google";
import { PiMailboxBold } from "react-icons/pi";
import { contactsInfo } from "@/utils/utils";
import { useRouter } from "next/navigation";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

const SendMeOneEmail = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const emailRef = useRef<HTMLDivElement>(null);


  const handleEmailCopy = () => {
    if (emailRef) {
      const email = emailRef.current?.textContent;

      navigator.clipboard.writeText(`${email}`);

      console.log(emailRef.current)

      setEmailCopied(true);

      setTimeout(() => {
        setEmailCopied(false);
      }, 2000)
    }
  }

  return (
    <div className="absolute bg-blue-500 rounded-xl max-w-[380px] sm:max-w-[688px] lg:max-w-[1088px] 2xl:max-w-[1344px] mx-auto py-6 px-4 sm:px-8 md:px-12 w-full flex flex-col gap-6 top-[-92px] left-[50%] translate-x-[-50%]">
      <div className="flex flex-col gap-2">
        <div className="text-white font-recoletaBlack text-3xl md:text-3xl lg:text-4xl xl:text-4xl flex gap-2">
          <PiMailboxBold /> Vamos conversar?
        </div>
        <div className={`${hind.className} text-[13px] sm:text-base text-white`}>
          Estou disponível para conversar! Basta copiar meu e-mail e me enviar uma mensagem
        </div>
      </div>
      <div className="flex gap-5">
        <div className={`${emailCopied ? "bg-green-300" : "bg-white"} text-[13px] md:text-base duration-300 ease-in-out p-5 rounded-xl w-full`} ref={emailRef}>
          franklinsimon887@gmail.com
        </div>
        <button onClick={handleEmailCopy} className="bg-[#223740] text-base lg:text-lg text-white rounded-xl w-[160px] h-[64px] p-5 flex justify-center items-center">
          {
            emailCopied ? "Copiado" : "Copiar"
          }
        </button>
      </div>
    </div>
  )
}

const ContactLinks = () => {
  return (
    <div className="flex sm:gap-24 gap-10 mx-auto max-w-[380px] md:max-w-0 justify-center flex-wrap md:flex-nowrap">
      {
        contactsInfo.map((contact) => (
          <a href={contact.link} key={contact.title} target="_blank" className="flex flex-col gap-4 cursor-pointer items-center text-white hover:text-[#47AEDE] duration-300">
            <contact.icon className="w-12 h-12" />

            <div className={`${hind.className}`}>
              {contact.title}
            </div>
          </a>
        ))
      }
    </div>
  )
}

const ContactMe = () => {
  const router = useRouter();

  return (
    <div id="contact" className="relative w-full py-[100px] sm:pt-[150px] sm:pb-[120px] bg-[#232323]">
      <SendMeOneEmail />

      <div className="flex flex-col container lg:px-24 sm:px-10 px-4 mx-auto pt-12 gap-24 items-center justify-between min-h-full">

        <div className={`grid w-full sm:grid-cols-2 lg:grid-cols-4 text-base sm:text-lg gap-x-12 gap-y-12 ${hind.className} text-white`}>
          <div className="flex flex-col items-start gap-4">
            <img src={"/logo-sf.png"} alt="Logo" className="h-12 object-contain" />
            <div className={`text-white text-base ${hind.className}`}>
              &copy; Simon Franklin 2024.<br /> Todos os direitos reservados
            </div>
          </div>

          <div className="flex flex-col gap-3 items-start">
            <div className="font-[500]">
              Navegue pelo site
            </div>

            <a href="/#home" className="opacity-60 hover:opacity-40 font-[300]">Início</a>
            <a href="/#projects" className="opacity-60 hover:opacity-40 font-[300]">Trabalhos Recentes</a>
            <a href="/#about" className="opacity-60 hover:opacity-40 font-[300]">Sobre Mim</a>
            <a href="/#contact" className="opacity-60 hover:opacity-40 font-[300]">Contato</a>
          </div>

          <div className="flex flex-col gap-3 items-start">
            <div className="font-[500]">
              Projetos
            </div>

            <div onClick={() => router.push("/projects/1")} className="opacity-60 hover:opacity-40 font-[300] cursor-pointer">Breaking News</div>
            <div onClick={() => router.push("/projects/6")} className="opacity-60 hover:opacity-40 font-[300] cursor-pointer">Nike Shoes</div>
            <div onClick={() => router.push("/projects/3")} className="opacity-60 hover:opacity-40 font-[300] cursor-pointer">SF Media</div>
            <div onClick={() => router.push("/projects/2")} className="opacity-60 hover:opacity-40 font-[300] cursor-pointer">Franklin Store</div>
          </div>

          <div className="flex flex-col gap-3 items-start">
            <div className="font-[500]">
              Meu Portfólio
            </div>

            <div className="opacity-90 font-[300]">
              Olá, meu nome é Simon Franklin. Sou um Desenvolvedor Frontend, formado em Análise e Desenvolvimento de Sistemas. Minhas especialidades são React, JavaScript(ES6), HTML5, CSS3 e Tailwind Css
            </div>
          </div>

        </div>

        <ContactLinks />

      </div>
    </div>
  )
}

export default ContactMe