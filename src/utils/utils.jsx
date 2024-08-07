import GerichRestaurantImage from '../assets/img/Imagem Portfólio definitiva 1.png';
import FranklinStoreImage from '../assets/img/Imagem Portfólio definitiva 2.png';
import YoutubeCloneImage from '../assets/img/Imagem Portfólio definitiva 3.png';
import BuyingCart from '../assets/img/Imagem Portfólio definitiva 4.png';
import BreakingNews from '../assets/img/Imagem Portfólio breaking news.png';

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

const timeLineData = [
    {
        year: '2021',
        event: 'Primeiro contato com programação através de um curso de algoritmos com VisuAlg.'
    },
    {
        year: '2022',
        event: 'Início da graduação em Análise e Desenvolvimento de Sistemas e começo dos estudos em HTML, CSS e JavaScript.'
    },
    {
        year: '2023',
        event: 'Estudando React, integração com APIs e começando a trabalhar em projetos como freelancer.'
    },
    {
        year: 'Atualmente',
        event: 'Após muitas tentativas, estou atuando como Desenvolvedor Frontend na Brio Tecnologia'
    }
];

const projectsData = [
    {
        image: BreakingNews,
        title: 'Breaking News',
        text: 'Site de notícias com sistema de login e autenticação, o usuário pode publicar notícias e interagir com as notícias de outros usuários.',
        repo: 'https://github.com/simonfranklin1/breaking-news-next',
        deploy: 'https://breaking-news-lilac.vercel.app/',
    },
    {
        image: FranklinStoreImage,
        title: 'E-commerce Franklin Store',
        text: 'Um E-commerce com catálogo, carrinho de compras, página individual de cada produto, checkout e histórico de compras.',
        repo: 'https://github.com/simonfranklin1/E-commerce_react',
        deploy: 'https://franklin-store.vercel.app/',
    },
    {
        image: YoutubeCloneImage,
        title: 'Clone do Youtube',
        text: 'O usuário poderá buscar vídeos, assistí-los e ver informações como número de visualizações, curtidas e o canal que postou o vídeo.',
        repo: 'https://github.com/simonfranklin1/youtube_clone',
        deploy: 'https://simonfranklin1.github.io/youtube_clone',
    },
    {
        image: GerichRestaurantImage,
        title: 'Landing Page Restaurante',
        text: 'Landing Page Moderno e responsivo de um restaurante feito em React JS com menu e barra de navegação.',
        repo: 'https://github.com/simonfranklin1/Landing-page-Restaurante',
        deploy: 'https://simonfranklin1.github.io/Landing-page-Restaurante/',
    }
]

const skillsData = [
    {
        title: 'HTML',
        icon: <FaHtml5  />,
        description: 'É uma linguagem de marcação utilizada para o desenvolvimento de páginas web.'
    },
    {
        title: 'CSS',
        icon: <FaCss3Alt  />,
        description: 'Tecnologia utilizada para estilizar páginas web e tornar a experiência do usuário mais amigável.'
    },
    {
        title: 'JavaScript',
        icon: <IoLogoJavascript  />,
        description: 'Linguagem de programação que permite implementar itens complexos na página.'
    },
    {
        title: 'React Js',
        icon: <FaReact  />,
        description: 'Biblioteca JavaScript criada pelo facebook, utilizada para desenvolver interfaces.'
    },
    {
        title: 'Git',
        icon: <FaGitSquare  />,
        description: 'Sistema de controle de versão baseado em repositórios que contém todas as versões do código e as cópias de cada desenvolvedor.'
    },
    {
        title: 'Tailwind CSS',
        icon: <SiTailwindcss />,
        description: 'Framework CSS que simplifica a criação e estilização de interfaces modernas e responsivas utilizando classes.'
    },
    {
        title: 'Material UI',
        icon: <SiMui />,
        description: 'Biblioteca de componentes React que implementa o Material Design do Google. É abrangente e pode ser usado na produção imediatamente.'
    },
    {
        title: 'TypeScript',
        icon: <SiTypescript />,
        description: 'É um superset que deixa o JavaScript mais poderoso adicionando tipos. Acelera o processo de desenvolvimento achando erros e providenciando soluções.'
    }
]

export {
    timeLineData,
    projectsData,
    skillsData
}