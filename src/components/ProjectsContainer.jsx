import React from 'react';
import Slider from 'react-slick'; // Importa o Slider do react-slick para exibição de carrossel de projetos
import { FaGithub } from 'react-icons/fa'; // Ícone do GitHub
import { IoEyeSharp } from "react-icons/io5"; // Ícone de "ver site"

import "../styles/components/projectscontainer.sass"; // Importa o arquivo de estilos específico

// Importação de imagens usadas para exibir os projetos
import perfilPortfolio from '../img/perfil-portfolio.webp'; // Exemplo de portfólio pessoal
import projectAutomacao from '../img/project-automacao.png'; // Projeto de automação de dados
import projectDiniz from '../img/project-diniz.png'; // Projeto do site Barbearia Diniz
import projectMoviesLib from '../img/project-movies_lib.svg'; // Projeto de biblioteca de filmes usando API
import projectOrcaFacil from '../img/project-orcaFacil.png'; // Projeto de orçamentos
import projectQuiz from '../img/project-quiz.svg'; // Projeto de quiz de perguntas de programação
import projectSerralheiro from '../img/project-serralheiro.png'; // Projeto para vendedores da Casa do Serralheiro
import projectTarefas from '../img/project-tarefas.png'; // Projeto de lista de tarefas

const ProjectsContainer = () => {
  // Configurações do carrossel utilizando o react-slick
  const settings = {
    dots: true, // Exibe os pontos de navegação
    infinite: true, // Faz o carrossel rodar em loop infinito
    speed: 800, // Velocidade da transição
    autoplay: true, // Ativa o autoplay
    autoplaySpeed: 3500, // Velocidade de rotação automática dos slides
    adaptiveHeight: true, // Ajusta a altura dos slides de acordo com o conteúdo
    pauseOnHover: true, // Pausa o autoplay quando o mouse está sobre o slide
    swipeToSlide: true, // Permite arrastar para mudar de slide
    lazyLoad: 'progressive', // Carregamento progressivo das imagens
    slidesToShow: 3, // Exibe 3 slides ao mesmo tempo
    slidesToScroll: 1, // Quantidade de slides que se movimentam ao rolar
    arrows: false, // Remove as setas de navegação (opcional, pode adicionar se necessário)
    responsive: [
      {
        breakpoint: 1024, // Configurações para telas até 1024px
        settings: {
          slidesToShow: 2, // Exibe 2 slides em telas menores
          slidesToScroll: 1, // Rola 1 slide de cada vez
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // Configurações para telas até 600px
        settings: {
          slidesToShow: 1, // Exibe 1 slide em telas menores ainda
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Lista de projetos para exibir no carrossel
  const projects = [
    {
      title: 'Portfolio de Vendedor', // Título do projeto
      description: 'Portfolio para os Vendedores da Casa do Serralheiro', // Descrição curta
      image: projectSerralheiro, // Imagem correspondente
      github: 'https://github.com/JoseLuiz095/ProjetoVendedor', // Link para o GitHub
      link: 'https://vendedor-casa-do-serralheiro.netlify.app/', // Link para o site
    },
    {
      title: 'Barbearia Diniz',
      description: 'Site profissional com agendamento.',
      image: projectDiniz,
      github: 'https://github.com/JoseLuiz095/barbearia-diniz',
      link: 'https://barbearia-diniz.vercel.app/',
    },
    {
      title: 'Automação de Indicador',
      description: 'Automação de buscas de dados ao sistema do RgSystem',
      image: projectAutomacao,
      github: 'https://github.com/JoseLuiz095/bot_indicador',
      link: 'https://github.com/JoseLuiz095/bot_indicador',
    },
    {
      title: 'Biblioteca de Filmes',
      description: 'Uso de API para busca de todos os filmes',
      image: projectMoviesLib,
      github: 'https://github.com/JoseLuiz095/movies_lib',
      link: 'https://movies-lib-ebon.vercel.app/',
    },
    {
      title: 'Orça Facil',
      description: 'Uma forma de planejar seus projetos',
      image: projectOrcaFacil,
      github: 'https://github.com/JoseLuiz095/orcaFacil',
      link: 'https://orca-facil-one.vercel.app/',
    },
    {
      title: 'Lista de Tarefas',
      description: 'Lista de Tarefas do dia a dia',
      image: projectTarefas,
      github: 'https://github.com/JoseLuiz095/ProjetoTarefas',
      link: 'https://joseluiz095.github.io/projeto-tarefas/',
    },
    {
      title: 'Quiz de perguntas?',
      description: 'Quiz de perguntas de programação',
      image: projectQuiz,
      github: 'https://github.com/JoseLuiz095/quiz',
      link: 'https://quiz-pink-psi.vercel.app/',
    },
  ];

  return (
    <section className="project-container">
      {/* Título da seção de projetos */}
      <h2>Meus Projetos</h2>
      {/* Carrossel de projetos */}
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <div className="box">
              {/* Link para o site do projeto, usando o target="_blank" para abrir em uma nova aba e rel="noopener noreferrer" para segurança */}
              <a className='portfolio-img' href={project.link} target="_blank" rel="noopener noreferrer" aria-label={project.title}>
                {/* Exibe a imagem do projeto */}
                <img src={project.image} alt={project.title} className="img-cards" />
              </a>
              {/* Título do projeto */}
              <div className="title">{project.title}</div>
              {/* Descrição curta do projeto */}
              <p className='text'>{project.description}</p>
              <div className="links">
                {/* Link para o GitHub do projeto */}
                <a className='icon' href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub size={24} />
                </a>
                {/* Link para o site live do projeto */}
                <a className='icon' href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Live site">
                  <IoEyeSharp size={24} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProjectsContainer;
