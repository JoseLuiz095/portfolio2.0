import React from 'react';
import Slider from 'react-slick';

import { FaGithub } from 'react-icons/fa'; // Importar ícones do react-icons
import { IoEyeSharp } from "react-icons/io5";

import "../styles/components/projectscontainer.sass"

// Importação de imagens
import perfilPortfolio from '../img/perfil-portfolio.webp';
import projectAutomacao from '../img/project-automacao.png';
import projectDiniz from '../img/project-diniz.png';
import projectMoviesLib from '../img/project-movies_lib.svg';
import projectOrcaFacil from '../img/project-orcaFacil.png';
import projectQuiz from '../img/project-quiz.svg';
import projectSerralheiro from '../img/project-serralheiro.png';
import projectTarefas from '../img/project-tarefas.png';


const ProjectsContainer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3500,
    adaptiveHeight: true,
    pauseOnHover: true,
    swipeToSlide: true,
    lazyLoad: 'progressive',
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const projects = [
    {
      title: 'Portfolio de Vendedor',
      description: 'Portfolio para os Vendedores da Casa do Serralheiro',
      image: projectSerralheiro ,
      github: 'https://github.com/JoseLuiz095/ProjetoVendedor',
      link: 'https://vendedor-casa-do-serralheiro.netlify.app/',
    },
    {
      title: 'Barbearia Diniz',
      description: 'Site profissional com agendamento. ',
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
      <h2>Meus Projetos</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <div className="box">
              <a className='portfolio-img' href={project.link} target="_blank" rel="noopener noreferrer" aria-label={project.title}>
                <img src={project.image} alt={project.title} className="img-cards" />
              </a>
              <div className="text">{project.title}</div>
              <p>{project.description}</p>
              <div className="links">
                <a className='icon' href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub size={24} />
                </a>
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
