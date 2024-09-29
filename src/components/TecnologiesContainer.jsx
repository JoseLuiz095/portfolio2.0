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
    icon: <DiReact />, 
    info: "React é uma biblioteca JavaScript para construir interfaces de usuário (UI), amplamente utilizada no desenvolvimento front-end." 
  },
  { 
    id: "Python", 
    name: "Python", 
    icon: <DiPython />, 
    info: "Python é uma linguagem de programação versátil, com aplicações em automação, desenvolvimento web, ciência de dados e inteligência artificial." 
  },
  { 
    id: "Java", 
    name: "Java", 
    icon: <DiJava />, 
    info: "Java é uma linguagem de programação amplamente usada no desenvolvimento de sistemas corporativos, aplicativos móveis e web." 
  },
  { 
    id: "MySQL", 
    name: "MySQL", 
    icon: <DiMysql />, 
    info: "MySQL é um sistema de gerenciamento de banco de dados relacional (RDBMS) amplamente utilizado no desenvolvimento de aplicativos web." 
  },
  { 
    id: "PHP", 
    name: "PHP", 
    icon: <FaPhp />, 
    info: "Git é um sistema de controle de versão distribuído, fundamental para o desenvolvimento de software colaborativo e gestão de código." 
  },
  { 
    id: "Angular", 
    name: "Angular", 
    icon: <FaAngular />, 
    info: "Angular é um framework JavaScript para construção de aplicações web dinâmicas e de alto desempenho, utilizado principalmente no front-end." 
  }
];
const TecnologiesContainer = () => {
  return (
    <section className="tecnologies-container">
      <h2>Tecnologias</h2>
      <div className="tecnologies-grid">
        {technologies.map((tech)=>(
          <div className="tecnology-card" id={tech.id} key={tech.id}>
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