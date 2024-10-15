// Importa os componentes principais da página de conteúdo principal
import AboutContainer from "./AboutContainer"  // Seção "Sobre"
import ProjectsContainer from "./ProjectsContainer"  // Seção "Projetos"
import TecnologiesContainer from "./TecnologiesContainer"  // Seção "Tecnologias"

// Importa o arquivo de estilos específico para o conteúdo principal
import "../styles/components/maincontent.sass"

// Função principal do componente MainContent
const MainContent = () => {
  return (
    // Define a tag <main>, que é essencial para SEO, indicando o conteúdo principal da página
    <main id="main-content">
      
      {/* Div que contém o título com o nome "José Luiz", que ajuda no SEO ao usar a tag <h1> */}
      <div className="title-name">
        <h1>José Luiz</h1>
      </div>
      
      {/* Chama o componente "Sobre", que inclui informações sobre o autor/usuário */}
      <AboutContainer />
      
      {/* Chama o componente "Tecnologias", que lista as habilidades ou tecnologias dominadas */}
      <TecnologiesContainer />
      
      {/* Chama o componente "Projetos", que exibe os projetos realizados */}
      <ProjectsContainer />
    </main>
  )
}

// Exporta o componente MainContent para ser utilizado em outras partes do projeto
export default MainContent
