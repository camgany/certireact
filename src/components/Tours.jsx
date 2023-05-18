
import Title from "./Title";
import Tour from "./Tour";
import { tours } from "../data/data";
export const Tours = () => {
    return (
        <>
        <section className="section" id="Actividades">
      <Title title="Nuestras" subtitle="Actividades" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
            return (
                <Tour key={tour.id} {...tour}></Tour>
            );
        })}
  
      </div>
    </section>
        </>
    )
}