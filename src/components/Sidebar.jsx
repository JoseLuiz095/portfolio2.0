import SocialNetworks from "./SocialNetworks"
import InformationContainer from "./InformationContainer"

import Avatar from "../img/perfil-portfolio.webp"

import "../styles/components/sidebar.sass"

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Imagem do José Luiz" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks/>
      <InformationContainer />
      <a href="" className="btn">
        Download curriculo
      </a>
    </aside>
  )
}

export default Sidebar
