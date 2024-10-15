// Importa o componente principal de conteúdo
import MainContent from './components/MainContent'
// Importa o componente da barra lateral
import Sidebar from './components/Sidebar'

// Importa o arquivo de estilos principais da aplicação
import './styles/components/app.sass'

function App() {
  return (
    // Define a div principal que contém toda a estrutura da aplicação.
    <main id="portfolio"> 
      {/* Componente da barra lateral que pode incluir navegação e informações de contato */}
      <Sidebar /> 
      {/* Componente principal de conteúdo do portfólio */}
      <MainContent /> 
    </main>
  )
}

export default App
