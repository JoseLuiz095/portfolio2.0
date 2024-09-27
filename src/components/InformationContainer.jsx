import {AiFillPhone  , AiFillEnvironment} from "react-icons/ai"
import {MdOutlineEmail} from "react-icons/md"

import "../styles/components/InformationContainer.sass"

const InformationContainer = () => {
  return (
    
<section id="information">
    <a href="#" className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
            <h3>Telefone</h3>
            <p>(27)99620-6696</p>
        </div>
    </a>
    <a href="#" className="info-card">
        <MdOutlineEmail id="email-icon" />
        <div>
            <h3>E-mail</h3>
            <p>contatojoseluiz@gmail.com</p>
        </div>
    </a>
    <a href="#" className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
            <h3>Localização</h3>
            <p>Linhares / ES</p>
        </div>
    </a>
</section>
  )
}

export default InformationContainer