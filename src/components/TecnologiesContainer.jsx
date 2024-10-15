// Importa hooks do React e ícones de bibliotecas
import { useState } from "react";
import { DiReact, DiPython, DiJava, DiMysql } from "react-icons/di";  // Ícones das tecnologias
import { FaPhp, FaAngular } from "react-icons/fa";  // Ícones adicionais
import "../styles/components/tecnologiescontainer.sass";  // Importa o arquivo de estilos específico para este componente

// Array contendo as informações das tecnologias, cada item possui um id, nome, ícone e uma descrição
const technologies = [
  {
    id: "React",
    name: "React",
    icon: <DiReact style={{ color: "#61DBFB", fontSize: "5rem" }} />,  // Ícone customizado para React
    info: "Estudei e aprimorei React durante minha formação no IFES. Utilizo-o amplamente no desenvolvimento de UIs modernas, com Bootstrap para estilização.",
  },
  {
    id: "Python",
    name: "Python",
    icon: <DiPython style={{ color: "#3776AB", fontSize: "5rem" }} />,  // Ícone customizado para Python
    info: "Fiz curso avançado em Python, explorando frameworks como Selenium, PyAutoGUI, Django e PySide. Tenho prática avançada em automação e desenvolvimento web.",
  },
  {
    id: "Java",
    name: "Java",
    icon: <DiJava style={{ color: "#007396", fontSize: "5rem" }} />,  // Ícone customizado para Java
    info: "Curso de Java do básico ao avançado pela Loiane. Tenho experiência em desenvolvimento de sistemas robustos e aplicativos web com Java.",
  },
  {
    id: "MySQL",
    name: "MySQL",
    icon: <DiMysql style={{ color: "#4479A1", fontSize: "5rem" }} />,  // Ícone customizado para MySQL
    info: "Estudei MySQL em diversos cursos e pratico em nível avançado no IFES, aplicando em bancos de dados relacionais para web.",
  },
  {
    id: "PHP",
    name: "PHP",
    icon: <FaPhp style={{ color: "#777BB4", fontSize: "5rem" }} />,  // Ícone customizado para PHP
    info: "Pratico PHP em nível avançado na formação do IFES, focando no desenvolvimento web dinâmico e integração com bancos de dados.",
  },
  {
    id: "Angular",
    name: "Angular",
    icon: <FaAngular style={{ color: "#DD0031", fontSize: "5rem" }} />,  // Ícone customizado para Angular
    info: "Completei curso de Angular do básico ao avançado pela Loiane. Uso Angular para desenvolver aplicações web rápidas e escaláveis.",
  },
];

// Componente funcional para exibir as tecnologias
const TecnologiesContainer = () => {
  // Hook de estado para controlar qual card está expandido
  const [expandedCard, setExpandedCard] = useState(null);

  // Função para alternar o estado de expansão dos cards
  const toggleDescription = (id) => {
    setExpandedCard(expandedCard === id ? null : id);  // Se o card estiver expandido, fecha-o, caso contrário, expande-o
  };

  return (
    // SEO: Utilizar <section> com uma tag de título semântico <h2> para descrever o conteúdo
    <section className="tecnologies-container">
      <h2>Tecnologias</h2>
      {/* Grade de tecnologias */}
      <div className="tecnologies-grid">
        {technologies.map((tech) => (
          // Adiciona a classe 'expanded' para aplicar estilos quando o card estiver expandido
          <article
            className={`tecnology-card ${expandedCard === tech.id ? "expanded" : ""}`}  // SEO: Usa <article> para cada tecnologia
            id={tech.id}  // ID exclusivo para cada card
            key={tech.id}  // Chave única para cada item mapeado
          >
            {/* Exibe o ícone da tecnologia */}
            {tech.icon}
            <div className="tecnology-info">
              {/* SEO: Títulos semânticos <h3> para cada tecnologia */}
              <h3>{tech.name}</h3>
             
              {/* Exibe a descrição sempre */}
              <p className="info-text">{tech.info}</p>

              {/* Botão para alternar entre "Saiba Mais" e "Minimizar" */}
              {expandedCard === tech.id ? (
                <button
                  className="minimize-btn"
                  onClick={() => toggleDescription(tech.id)}  // Alterna a visualização da descrição
                  aria-expanded="true"  // Acessibilidade: Informa que o card está expandido
                  aria-controls={`description-${tech.id}`}  // Acessibilidade: Associa o botão com a descrição
                >
                  ^
                </button>
              ) : (
                <button
                  className="saiba-mais-btn"
                  onClick={() => toggleDescription(tech.id)}  // Alterna a visualização da descrição
                  aria-expanded="false"  // Acessibilidade: Informa que o card está fechado
                  aria-controls={`description-${tech.id}`}  // Acessibilidade: Associa o botão com a descrição
                >
                  Saiba mais
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TecnologiesContainer;
