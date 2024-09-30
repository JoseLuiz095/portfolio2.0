import React, { useState } from "react";
import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";
import Avatar from "../img/perfil-portfolio.webp";
import "../styles/components/sidebar.sass";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleSidebar}>
        {isOpen ? "✖" : "☰"} {/* Troca entre o ícone de hambúrguer e o X */}
      </button>
      <aside id="sidebar" className={`${isOpen ? "open" : ""}`}>
        <img src={Avatar} alt="Imagem do José Luiz" />
        <p className="title">Desenvolvedor</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="" className="btn">
          Download curriculo
        </a>
      </aside>
    </>
  );
};

export default Sidebar;
