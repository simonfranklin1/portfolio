import { IconType } from "react-icons";
import { FaBookReader, FaCode, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdOutlineComputer } from "react-icons/md";

export type Project = {
  id: string;
  imgSrc: string;
  name: string;
  description: string;
  link: string;
  skills: string[];
  projectImg: string;
  repo: string;
};

export type TimeLineI = {
  title: string;
  period: string;
  fact: string;
  icon: IconType;
};

export interface ContactI  {
  title: string;
  icon: IconType;
  link: string;
}

export const projects: Project[] = [
  {
    id: "1",
    imgSrc: "/breakingnews-tablet.png",
    name: "Breaking News",
    description:
      "Site de Notícias feito de pessoas para pessoas onde os usuários podem criar e publicar suas próprias notícias, além de interagir com outras publicações com curtidas e comentários. O Site é interativo e fácil de utilizar e tem um sistema de login e autenticação.",
    link: "https://breaking-news-lilac.vercel.app/",
    skills: [
      "TypeScript", "Next.js", "React.js", "Tailwind CSS"
    ],
    projectImg: "/breaking-news-individual-page.png",
    repo: "https://github.com/simonfranklin1/breaking-news-next"
  },
  {
    id: "2",
    imgSrc: "/franklinstore-tablet.png",
    name: "Franklin Store",
    description:
      "E-commerce de uma loja de roupas com catálogo de produtos, carrinho de compras, sistema de login e autenticação, página de checkout e histórico de compras.",
    link: "https://franklin-store.vercel.app/",
    skills: [
      "React.js", "HTML", "CSS", "JavaScript"
    ],
    projectImg: "/franklinstore-individual-page.png",
    repo: "https://github.com/simonfranklin1/E-commerce_react"
  },
  {
    id: "3",
    imgSrc: "/youtubeclone-tablet.png",
    name: "SF Media",
    description:
      "Projeto de um site que permite ao usuário buscar, listar, filtrar e assistir vídeos utilizando a API do Youtube. Também é possível fazer o mesmo com os canais.",
    link: "https://simonfranklin1.github.io/youtube_clone",
    skills: [
      "React.js", "HTML", "CSS", "JavaScript", "Material UI"
    ],
    projectImg: "/youtubeclone-individual-page.png",
    repo: "https://github.com/simonfranklin1/youtube_clone"
  },
  {
    id: "4",
    imgSrc: "/gerichtrestaurant-tablet.png",
    name: "Geritch Restaurant",
    description:
      "Landing Page dinâmica e responsiva feita para um restaurante famoso.",
    link: "https://simonfranklin1.github.io/Landing-page-Restaurante/",
    skills: [
      "React.js", "HTML", "CSS", "JavaScript"
    ],
    projectImg: "/gericht-restaurant-individual-page.png",
    repo: "https://github.com/simonfranklin1/Landing-page-Restaurante"
  },
  {
    id: "5",
    imgSrc: "/gpt3page-tablet.png",
    name: "GPT3-Page",
    description:
      "Landing Page do Chat GPT versão 3.",
    link: "https://gpt3-page.vercel.app/",
    skills: [
      "React.js", "HTML", "CSS", "JavaScript"
    ],
    projectImg: "/gpt3-page-individual-page.png",
    repo: "https://github.com/simonfranklin1/gpt3-page"
  },
  {
    id: "6",
    imgSrc: "/nikeshoes-tablet.png",
    name: "Nike Shoes",
    description: "Landing Page moderna e responsiva de um site de tênis da nike. Com sessões como introdução, produtos populares e ofertas especiais. O site tem um design simples e minimalista e é agradável aos olhos do usuário.",
    link: "https://nikeshoes-flame.vercel.app/",
    skills: [
      "React.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"
    ],
    projectImg: "/nikeshoes-individual-page.png",
    repo: "https://github.com/simonfranklin1/nike-website"
  },
];

export const timeLineInfo: TimeLineI[] = [
  {
    title: "Primeiro Contato com Programação",
    period: "2020 - 2021",
    fact: "Trabalhava como ilustrador, vendendo caricaturas online. Fiz um curso de algoritmos e lógica de programação e decidi mudar de carreira.",
    icon: HiOutlineLightBulb
  },
  {
    title: "Início dos Estudos em HTML, CSS e JavaScript",
    period: "2021 - 2022",
    fact: "Comecei minha graduação em Análise e Desenvolvimento de Sistemas. Além das aulas na faculdade, fiz alguns cursos focados em desenvolvimento Frontend.",
    icon: FaBookReader
  },
  {
    title: "Aprofundando no Frontend",
    period: "2022 - 2023",
    fact: "Depois de aprender HTML, CSS e JavaScript, fiz meu primeiro projeto freelancer: uma landing page para um aluno de marketing. Comecei a estudar React e a integração do Frontend com APIs.",
    icon: FaCode
  },
  {
    title: "Primeiro Emprego",
    period: "2024 - atualmente",
    fact: "Após muito esforço e várias tentativas em processos seletivos, consegui meu primeiro emprego como Desenvolvedor Frontend.",
    icon: MdOutlineComputer
  }
]

export const contactsInfo: ContactI[] = [
  {
    icon: FaInstagram,
    title: 'Instagram',
    link: 'https://www.instagram.com/franklinstudioarts/', 
  },
  {
    icon: FaLinkedinIn,
    title: 'Linkedin',
    link: 'https://www.linkedin.com/in/simon-franklin-1a8976274/', 
  },
  {
    icon: FaGithub,
    title: 'GitHub',
    link: 'https://github.com/simonfranklin1', 
  },
  {
    icon: IoDocumentText,
    title: 'Currículo',
    link: 'https://docs.google.com/document/d/10jVe3tEInT2ziCtU4MPdN6SJX4GrTaQr/edit?usp=drive_link&ouid=113300837558869934481&rtpof=true&sd=true', 
  },
]