import about from "../assets/about.jpg";
import Title from "./Title";
export const About = () => {
    return (
        <>
        <section className="section" id="Perfil">
      <Title title="Perfil" subtitle="Profesional" />

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={about}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>El (ISC), de formación bilingüe, está capacitado para:</h3>
          <p>
          • Brindar soluciones informáticas a instituciones industriales o de servicios tanto a nivel de software como de hardware.
          </p>
          <p>
          • Promover el desarrollo de tres capacidades fundamentales: espíritu de análisis, desarrollo de una visión del sistema futuro y trabajo interdisciplinario.
          </p>
          <p>
          • Administrar sistemas informáticos y desarrollar aplicaciones a medida del cliente en diferentes campos.
          </p>
          <p>
• Relacionarse con el mundo profesional en cualquier rama: Economía, Educación, Ingenierías, Ciencias de la Salud, Telecomunicaciones, etc.
          </p>
          <a href="#" className="btn">Leer Más</a>
        </article>
      </div>
    </section>
        </>
    )
}