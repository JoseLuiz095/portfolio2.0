import React, { useState } from "react";
import SocialNetworks from "./SocialNetworks"; // Componente que exibe os ícones de redes sociais
import InformationContainer from "./InformationContainer"; // Componente que exibe informações adicionais
import Avatar from "../img/perfil-portfolio.webp"; // Importa a imagem do perfil
import "../styles/components/sidebar.sass"; // Estilos para o sidebar

const Sidebar = () => {
  // Estado que controla a visibilidade do sidebar no mobile
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar entre abrir e fechar o sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botão de hambúrguer para abrir e fechar o sidebar no mobile */}
      <button className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleSidebar} aria-label="Menu">
        {isOpen ? "✖" : "☰"} {/* Troca entre o ícone de hambúrguer (menu) e o X (fechar) */}
      </button>

      {/* Sidebar que contém o perfil, redes sociais e informações */}
      <aside id="sidebar" className={`${isOpen ? "open" : ""}`}>
        {/* Imagem do perfil com atributo alt descritivo para acessibilidade e SEO */}
        <img className="conteudo" src={Avatar} alt="Foto de perfil de José Luiz, desenvolvedor" />

        {/* Título profissional do usuário */}
        <p className="title conteudo">Desenvolvedor</p>

        {/* Componente que exibe as redes sociais */}
        <SocialNetworks className="conteudo" />

        {/* Componente que exibe informações adicionais */}
        <InformationContainer className="conteudo" />

        {/* Link para download do currículo, alterado para ter um href correto para SEO */}
        <a href="/curriculo.pdf" className="btn" download="curriculo-jose-luiz" aria-label="Download do currículo">
          Download currículo
        </a>
      </aside>
    </>
  );
};

export default Sidebar;
