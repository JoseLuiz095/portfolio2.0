import { 
  DiReact, 
  DiPython, 
  DiJava,  
  DiMysql, 
} from "react-icons/di";
import { FaPhp , FaAngular } from "react-icons/fa";
import { motion } from "framer-motion"; // Importando Framer Motion
import "../styles/components/tecnologiescontainer.sass";

const technologies = [
  { 
    id: "React", 
    name: "React", 
    icon: <DiReact style={{color: "#61DBFB", fontSize: "5rem"}} />, // Aumentando o tamanho do ícone
    info: "Estudei e aprimorei React durante minha formação no IFES. Utilizo-o amplamente no desenvolvimento de UIs modernas, com Bootstrap para estilização.",
  },
  { 
    id: "Python", 
    name: "Python", 
    icon: <DiPython style={{color: "#3776AB", fontSize: "5rem"}} />, // Aumentando o tamanho do ícone
    info: "Fiz curso avançado em Python, explorando frameworks como Selenium, PyAutoGUI, Django e PySide. Tenho prática avançada em automação e desenvolvimento web.", 
  },
  { 
    id: "Java", 
    name: "Java", 
    icon: <DiJava style={{color: "#007396", fontSize: "5rem"}} />, // Aumentando o tamanho do ícone
    info: "Curso de Java do básico ao avançado pela Loiane. Tenho experiência em desenvolvimento de sistemas robustos e aplicativos web com Java.", 
  },
  { 
    id: "MySQL", 
    name: "MySQL", 
    icon: <DiMysql style={{color: "#4479A1", fontSize: "5rem"}} />, // Aumentando o tamanho do ícone
    info: "Estudei MySQL em diversos cursos e pratico em nível avançado no IFES, aplicando em bancos de dados relacionais para web.",
  },
  { 
    id: "PHP", 
    name: "PHP", 
    icon: <FaPhp style={{color: "#777BB4", fontSize: "5rem"}} />, // Aumentando o tamanho do ícone
    info: "Pratico PHP em nível avançado na formação do IFES, focando no desenvolvimento web dinâmico e integração com bancos de dados.",
  },
  { 
    id: "Angular", 
    name: "Angular", 
    icon: <FaAngular style={{color: "#DD0031", fontSize: "5rem"}} />, // Aumentando o tamanho do ícone
    info: "Completei curso de Angular do básico ao avançado pela Loiane. Uso Angular para desenvolver aplicações web rápidas e escaláveis.", 
  }
];

const TecnologiesContainer = () => {
  return (
    <section className="tecnologies-container">
      <h2>Tecnologias</h2>
      <div className="tecnologies-grid">
        {technologies.map((tech)=>(

          <motion.div 
            className="tecnology-card" 
            id={tech.id} 
            key={tech.id}
            whileHover={{ scale: 1.05 }} // Animação de hover no card
            transition={{ duration: 0.3 }} // Duração da animação
          >
            {tech.icon}
            <div className="tecnology-info">
              <h3>{tech.name}</h3>

              {/* Botão 'Saiba Mais' */}
              <motion.button 
                initial={{ opacity: 1 }} // Botão aparece inicialmente
                whileHover={{ opacity: 0 }} // Desaparece no hover
                transition={{ duration: 0.3 }} // Suavização da transição
                className="saiba-mais-btn"
              >
                Saiba mais
              </motion.button>

              {/* Texto oculto inicialmente, aparece no hover */}
              <motion.p 
                initial={{ opacity: 0, height: 0 }} // Invisível e sem altura inicialmente
                whileHover={{ opacity: 1, height: "auto" }} // Aparece no hover
                transition={{ duration: 0.3 }} // Duração da transição
                className="info-text"
              >
                {tech.info}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TecnologiesContainer;
