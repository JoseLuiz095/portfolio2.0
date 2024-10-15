import { FaPhoneAlt } from "react-icons/fa"; // Ícone de telefone da biblioteca react-icons
import { AiFillEnvironment } from "react-icons/ai"; // Ícone de localização da biblioteca react-icons
import { MdOutlineEmail } from "react-icons/md"; // Ícone de email da biblioteca react-icons

import "../styles/components/InformationContainer.sass"; // Importa os estilos específicos para esse componente

const InformationContainer = () => {
  return (
    // Seção que agrupa todas as informações de contato
    <section id="information" aria-label="Informações de contato">
      {/* Cartão de informação do telefone com ícone */}
      <a href="tel:+5527996206696" className="info-card" aria-label="Ligar para (27) 99620-6696">
        <FaPhoneAlt id="phone-icon" aria-hidden="true" /> {/* Ícone do telefone, aria-hidden para evitar redundância com o texto */}
        <div>
          <h3>Telefone</h3>
          <p>(27) 99620-6696</p> {/* Texto exibido para o número de telefone */}
        </div>
      </a>

      {/* Cartão de informação do e-mail com ícone */}
      <a href="mailto:contatojoseluiz@gmail.com" className="info-card" aria-label="Enviar e-mail para contatojoseluiz@gmail.com">
        <MdOutlineEmail id="email-icon" aria-hidden="true" /> {/* Ícone de email, aria-hidden para evitar redundância */}
        <div>
          <h3>E-mail</h3>
          <p>contatojoseluiz@gmail.com</p> {/* Texto exibido para o e-mail */}
        </div>
      </a>

      {/* Cartão de informação de localização com ícone */}
      <div className="info-card" aria-label="Localização em Linhares, Espírito Santo">
        <AiFillEnvironment id="pin-icon" aria-hidden="true" /> {/* Ícone de localização */}
        <div>
          <h3>Localização</h3>
          <p>Linhares / ES</p> {/* Texto exibido para a localização */}
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
