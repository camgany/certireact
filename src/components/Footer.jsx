import { FooterSectionLinks } from "./FooterSectionLinks"
import { FooterSocialLinks } from "./FooterSocialLinks"
import { socialLinks } from '../data/data'
export const Footer = () => {
    return (
        <>
        <footer className="section footer">
        <FooterSectionLinks />
      
      <ul className="footer-icons">
        {socialLinks.map((social) => {
            return (
                <FooterSocialLinks key={social.id} social={social.link}></FooterSocialLinks>
            );
        })
        }
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
        </>
    )
}