import { 
  DiReact, 
  DiPython, 
  DiJava,  
  DiMysql, 

} from "react-icons/di";
import {FaPhp , FaAngular, FaBootstrap } from "react-icons/fa";
import { SiSelenium } from "react-icons/si";

import "../styles/components/tecnologiescontainer.sass"

const technologies = [
  { 
    id: "React", 
    name: "React", 
    icon: <DiReact style={{color: "#61DBFB"}} />, 
    info: "Estudei e aprimorei React durante minha formação no IFES. Utilizo-o amplamente no desenvolvimento de UIs modernas, com Bootstrap para estilização.",
  },
  { 
    id: "Python", 
    name: "Python", 
    icon: <DiPython style={{color: "#3776AB"}} />, 
    info: "Fiz curso avançado em Python, explorando frameworks como Selenium, PyAutoGUI, Django e PySide. Tenho prática avançada em automação e desenvolvimento web.", 
  },
  { 
    id: "Java", 
    name: "Java", 
    icon: <DiJava style={{color: "#007396"}} />, 
    info: "Curso de Java do básico ao avançado pela Loiane. Tenho experiência em desenvolvimento de sistemas robustos e aplicativos web com Java.", 
  },
  { 
    id: "MySQL", 
    name: "MySQL", 
    icon: <DiMysql style={{color: "#4479A1"}} />, 
    info: "Estudei MySQL em diversos cursos e pratico em nível avançado no IFES, aplicando em bancos de dados relacionais para web.",
  },
  { 
    id: "PHP", 
    name: "PHP", 
    icon: <FaPhp style={{color: "#777BB4"}} />, 
    info: "Pratico PHP em nível avançado na formação do IFES, focando no desenvolvimento web dinâmico e integração com bancos de dados.",
  },
  { 
    id: "Angular", 
    name: "Angular", 
    icon: <FaAngular style={{color: "#DD0031"}} />, 
    info: "Completei curso de Angular do básico ao avançado pela Loiane. Uso Angular para desenvolver aplicações web rápidas e escaláveis.", 
  }
];


const TecnologiesContainer = () => {
  return (
    <section className="tecnologies-container">
      <h2>Tecnologias</h2>
      <div className="tecnologies-grid">
        {technologies.map((tech)=>(
          <div className="tecnology-card" id={tech.id} key={tech.id} >
            {tech.icon}
            <div className="tecnology-info">
              <h3> {tech.name} </h3>
              <p>
                {tech.info}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TecnologiesContainer