import { links } from '../data/data'
export const SectionLinks = () => {
  return (
    //links es un array de objetos que se encuentra en data.js
    //links.map((link) => {}) es un metodo que recorre el array links y retorna un nuevo array
    //el metodo map recibe una funcion como parametro
    //la funcion recibe como parametro cada uno de los elementos del array links
    //la funcion retorna un nuevo array
    //el nuevo array contiene los elementos del array links pero con un formato diferente
    <ul className="nav-links" id="nav-links">
      
      {links.map((link) => {
        return (
          <li key={link.id}>
            <a href={`#${link.link}`} className="nav-link">
              {link.link}
            </a>
          </li>
        );
      })}
    </ul>
  );
};