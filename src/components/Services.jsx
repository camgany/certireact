import Title from "./Title";
import { services } from "../data/data";
import Service from "./Service";
export const Services = () => {
  //con los 3 puntos estamos desestructurando el objeto, lo que quiere decir que estamos sacando los valores de ese objeto
  return (
    <>
      <section className="section services" id="Areas">
        <Title title="Areas" subtitle=" de estudio" />
        <div className="section-center services-center">
          {services.map((service) => {
            return (
              <Service key={service.id} {...service}></Service>
            );
          })}
        </div>
      </section>
    </>
  )
}