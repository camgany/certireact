import { linksfooter } from '../data/data'
export const FooterSectionLinks = () => {
    return (
        <ul className="footer-links">
            {linksfooter.map((link) => {
                return (
                    <li key={link.id}>
                        <a href={`#${link.link}`} className="footer-link">
                            {link.link}
                        </a>
                        </li>
                );
            })}
      </ul>
    );
};