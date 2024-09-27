import { 
  DiReact, 
  DiJavascript1, 
  DiPython, 
  DiJava, 
  DiLinux, 
  DiHtml5, 
  DiCss3, 
  DiMysql, 
  DiNodejs, 
  DiGit 
} from "react-icons/di";
import { FaAngular, FaBootstrap } from "react-icons/fa";
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
    id: "JavaScript", 
    name: "JavaScript", 
    icon: <DiJavascript1 />, 
    info: "JavaScript é uma linguagem de programação essencial para o desenvolvimento web, usada tanto no front-end quanto no back-end." 
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
    id: "Linux", 
    name: "Linux", 
    icon: <DiLinux />, 
    info: "Linux é um sistema operacional de código aberto utilizado em servidores, sistemas embarcados e desktops por desenvolvedores e administradores de sistemas." 
  },
  { 
    id: "HTML5", 
    name: "HTML5", 
    icon: <DiHtml5 />, 
    info: "HTML5 é a versão mais recente da linguagem de marcação HTML, utilizada para estruturar o conteúdo de páginas web." 
  },
  { 
    id: "CSS3", 
    name: "CSS3", 
    icon: <DiCss3 />, 
    info: "CSS3 é a última evolução da linguagem CSS, usada para estilizar e melhorar o design de páginas web." 
  },
  { 
    id: "MySQL", 
    name: "MySQL", 
    icon: <DiMysql />, 
    info: "MySQL é um sistema de gerenciamento de banco de dados relacional (RDBMS) amplamente utilizado no desenvolvimento de aplicativos web." 
  },
  { 
    id: "NodeJS", 
    name: "NodeJS", 
    icon: <DiNodejs />, 
    info: "NodeJS é uma plataforma de execução de JavaScript no lado do servidor, usada para construir aplicativos back-end escaláveis." 
  },
  { 
    id: "Git", 
    name: "Git", 
    icon: <DiGit />, 
    info: "Git é um sistema de controle de versão distribuído, fundamental para o desenvolvimento de software colaborativo e gestão de código." 
  },
  { 
    id: "Selenium", 
    name: "Selenium", 
    icon: <SiSelenium   />, 
    info: "Selenium é uma ferramenta de automação para testar aplicativos web em diferentes navegadores." 
  },
  { 
    id: "Angular", 
    name: "Angular", 
    icon: <FaAngular />, 
    info: "Angular é um framework JavaScript para construção de aplicações web dinâmicas e de alto desempenho, utilizado principalmente no front-end." 
  },
  { 
    id: "Bootstrap", 
    name: "Bootstrap", 
    icon: <FaBootstrap />, 
    info: "Bootstrap é uma biblioteca front-end que facilita a criação de sites responsivos e modernos com componentes prontos e estilos CSS." 
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