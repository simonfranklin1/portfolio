interface Testimonial {
  name: string;
  role: string;
  photo?: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Gabriel Dias",
    role: "Desenvolvedor Full Stack Pleno",
    content:
      "O Simon é um excelente desenvolvedor frontend, com um olhar muito apurado para design, UI e UX. Trabalhar com ele é contar com alguém técnico, cuidadoso nos detalhes e sempre preocupado em entregar interfaces bonitas, funcionais e bem pensadas para o usuário. Além de ser muito competente no front, ele contribui bastante com visão de produto e colaboração em equipe. Recomendo muito o trabalho dele.",
  },
  {
    name: "Sandro Torres",
    role: "Tech Lead",
    content:
      "Trabalhar com o Simon tem sido uma experiência muito positiva. É um profissional dedicado, esforçado e sempre disposto a aprender e contribuir com o time. Tem uma afinidade muito forte com frontend, especialmente com React, e demonstra bastante cuidado com a qualidade visual, usabilidade e design das interfaces que desenvolve. Além da parte técnica, ele se destaca pela atenção aos detalhes e pelo capricho nas entregas.Mesmo tendo maior interesse pelo frontend, também contribui no backend quando necessário, mostrando versatilidade e vontade de ajudar onde o projeto precisa. Como gestor, considero um prazer trabalhar com alguém tão comprometido, colaborativo e interessado em evoluir constantemente.Sem dúvida, é um profissional que agrega muito ao time e aos projetos em que participa.",
  },
  {
    name: 'Pedro Henrique',
    role: 'Na época, aluno de Marketing',
    content: 'Quando eu era aprendiz, participei de um projeto de curso dentro da Hotmart, e uma das entregas era desenvolver uma landing page com formato de mini game de perguntas e respostas. Foi aí que o Simon entrou com toda a sua criatividade e conhecimento em programação (HTML). Ele me ajudou desde o início, principalmente na parte de design, deixando a página visualmente atrativa, intuitiva e com a cara do projeto. A colaboração dele foi essencial para que a ideia saísse do papel de forma funcional e atrativa. Sem dúvidas, a ajuda dele fez toda a diferença no resultado final'
  }
];
