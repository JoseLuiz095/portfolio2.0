// Importação dos ícones das redes sociais a partir da biblioteca react-icons
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

// Importação do arquivo de estilos específico para a seção de redes sociais
import "../styles/components/socialnetworks.sass";

// Definição de uma lista de redes sociais, contendo o link, nome e o ícone de cada rede
const socialNetworks = [
  { 
    href: "https://www.linkedin.com/in/joseluiz095/", // Link do LinkedIn
    name: "linkedin", // Nome da rede (utilizado para id e chave única)
    icon: <FaLinkedinIn /> // Ícone do LinkedIn
  },
  { 
    href: "https://github.com/JoseLuiz095", // Link do GitHub
    name: "github", // Nome da rede (utilizado para id e chave única)
    icon: <FaGithub /> // Ícone do GitHub
  },
  { 
    href: "https://www.instagram.com/joseluiz095", // Link do Instagram (corrigido para incluir o "https://")
    name: "instagram", // Nome da rede (utilizado para id e chave única)
    icon: <FaInstagram /> // Ícone do Instagram
  },
];

// Componente de redes sociais
const SocialNetworks = () => {
  return (
    // Criação de uma seção com id 'social-networks' para organizar os links das redes sociais
    <section id="social-networks">
      {/* Mapeamento das redes sociais para gerar um link para cada uma */}
      {socialNetworks.map((network) => (
        // Cada link recebe um href com o URL da rede social e uma classe 'social-btn' para estilos
        // Também inclui um id único baseado no nome da rede e uma chave (key) para renderização eficiente
        <a href={network.href} className="social-btn" id={network.name} key={network.name} target="_blank" rel="noopener noreferrer">
          {/* Renderiza o ícone correspondente à rede social */}
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
