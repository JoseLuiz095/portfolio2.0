// Importa o componente funcional "AboutContainer", que é responsável por renderizar a seção "Sobre"
const AboutContainer = () => {
    return (
        // A tag <section> é semântica, o que já ajuda no SEO. A classe "about-container" pode ser utilizada para estilização.
        <section className="about-container">
            
            {/* Título da seção "Sobre", ideal para o SEO usar a tag <h1> ou <h2> dependendo da estrutura do restante do site. Aqui, mantemos <h2> */}
            <h2>Sobre</h2>
            
            {/* Parágrafo com informações sobre o autor. Aqui seria importante otimizar o conteúdo para palavras-chave relevantes que refletem a expertise do autor. */}
            <p>
                Sou apaixonado por programação e desenvolvimento de soluções tecnológicas que impactam positivamente a vida das pessoas.
                Com experiência em <strong>Python</strong>, <strong>React</strong>, <strong>PHP</strong>, <strong>MySQL</strong>, e <strong>Java</strong>, 
                atuo como Freelancer e Técnico de Informática. Atualmente, curso <strong>Tecnologia em Sistemas para Internet</strong> pelo <strong>Ifes</strong> 
                e busco sempre novos desafios para evoluir minhas habilidades. Já sou formado em pós-graduação em <strong>Engenharia de Software</strong> 
                e <strong>Desenvolvimento Front-end</strong>, além de ter concluído diversos cursos em instituições renomadas.
            </p>
        </section>
    )
}

// Exporta o componente "AboutContainer" para que ele possa ser utilizado em outros arquivos
export default AboutContainer
