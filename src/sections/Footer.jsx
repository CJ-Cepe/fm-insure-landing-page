import fbIcon from "/images/icon-facebook.svg";
import twIcon from "/images/icon-twitter.svg";
import ptIcon from "/images/icon-pinterest.svg";
import igIcon from "/images/icon-instagram.svg";
import Logo from "../components/Logo";
import logoSrc from "/images/logo.svg";

function Socials({ src, alt }) {
  return (
    <a href="" className="footer__social-link">
      <img className="footer__social-icon" src={src} alt={alt} width="24px" />
    </a>
  );
}

function LinkGroup({ header, links }) {
  return (
    <div className="footer-nav-column">
      <h3 className="footer-nav-column__heading">{header}</h3>
      <ul className="footer-nav-column__list">
        {links.map((link, index) => (
          <li className="footer-nav-column__item" key={index}>
            <a href="">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__header">
          <Logo
            className={"footer__logo-img"}
            alt={"insure logo"}
            src={logoSrc}
          />

          <div className="footer__socials">
            <Socials src={fbIcon} alt="facebook icon" />
            <Socials src={twIcon} alt="twitter icon" />
            <Socials src={ptIcon} alt="pinterest icon" />
            <Socials src={igIcon} alt="instagram icon" />
          </div>
        </div>
        <hr className="footer__divider" />
        <div className="footer__nav-grid">
          <LinkGroup
            header="Our company"
            links={["How we work", "Why Insure?", "View plans", "Reviews"]}
          />
          <LinkGroup
            header="Help me"
            links={["FAQ", "Terms of use", "Privacy policy", "Cookies"]}
          />
          <LinkGroup
            header="Contact"
            links={["Sales", "Support", "Live chat"]}
          />
          <LinkGroup header="Others" links={["Careers", "Press", "Licenses"]} />
        </div>
      </div>
    </footer>
  );
}
