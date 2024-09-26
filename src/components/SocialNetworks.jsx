import{FaLinkedinIn, FaGithub , FaInstagram} from 'react-icons/fa'

import "../styles/components/socialnetworks.sass"

const socialNetworks = [
    { href:"https://www.linkedin.com/in/joseluiz095/",name: "linkedin", icon: <FaLinkedinIn /> },
    { href:"https://github.com/JoseLuiz095", name: "github", icon: <FaGithub /> },
    { href:"www.instagram.com/joseluiz095", name: "instagram", icon: <FaInstagram /> },
  ];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
        {socialNetworks.map((network) =>(
            <a href={network.href} className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks