import AboutContainer from "./AboutContainer"
import ProjectsContainer from "./ProjectsContainer"
import TecnologiesContainer from "./TecnologiesContainer"

import "../styles/components/maincontent.sass"

const MainContent = () => {
  return (
    <main id="main-contect">
      <div className="title-name">
        <h1>José Luiz</h1>
      </div>
      <AboutContainer />
      <TecnologiesContainer />
      <ProjectsContainer />
    </main>
  )
}

export default MainContent
