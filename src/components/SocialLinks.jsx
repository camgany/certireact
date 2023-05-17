export const SocialLinks = (props) => {
  //lo que hace props es recibir los valores de social que se le pasan en el componente Footer.jsx
  //props sognifica propiedades
  const { social } = props;
  return (
    <li>
      <a href={`https://www.${social}.com`} target="_blank" className="nav-icon">
        <i className={`fab fa-${social}`}></i>
      </a>
    </li>
  );
};