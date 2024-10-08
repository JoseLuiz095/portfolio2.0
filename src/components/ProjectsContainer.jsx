import React from 'react';
import Slider from 'react-slick';

import "../styles/components/projectscontainer.sass"

const ProjectsContainer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
      description: 'Casa do Serralheiro',
      image: 'image/backgroud-fundo.png',
      link: 'https://vendedor-casa-do-serralheiro.netlify.app/',
    },
    {
      title: 'Aposentadoria INSS',
      description: 'Cadastro de Trabalhador em Python',
      image: 'image/inss.webp',
      link: 'https://github.com/JoseLuiz095/Projeto02',
    },
    {
      title: 'Caixa Eletrônico',
      description: 'Caixa Eletrônico em Python',
      image: 'image/caixa_eletronico.webp',
      link: 'https://github.com/JoseLuiz095/Projeto03',
    },
    {
      title: 'Calculadora de IMC',
      description: 'Calculadora de IMC Web',
      image: 'image/academia.png',
      link: 'https://joseluiz095.github.io/projetejo-imc/',
    },
    {
      title: 'Cronômetro',
      description: 'Cronômetro Web',
      image: 'image/relogio.webp',
      link: 'https://joseluiz095.github.io/projeto-cronometro/',
    },
    {
      title: 'Lista de Tarefas',
      description: 'Tarefas Web',
      image: 'image/tarefa.webp',
      link: 'https://joseluiz095.github.io/projeto-tarefas/',
    },
    {
      title: 'Calculadora Simples',
      description: 'Calculadora Web',
      image: 'image/calculadora.webp',
      link: 'https://joseluiz095.github.io/projeto-calculadora/',
    },
  ];

  return (
    <section className="project-container">
      <h2>Meus Projetos</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <div className="box">
              <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={project.title}>
                <img src={project.image} alt={project.title} className="img-cards" />
              </a>
              <div className="text">{project.title}</div>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProjectsContainer;
