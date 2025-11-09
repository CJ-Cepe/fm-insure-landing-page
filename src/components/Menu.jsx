import CtaButton from "../components/CtaButton";

export default function Menu({ isOpen }) {
  return (
    <nav id="main-menu" className={`header__nav ${isOpen ? "is-open" : ""}`}>
      <a className="header__link" href="#work">
        How we work
      </a>
      <a className="header__link" href="#blog">
        Blog
      </a>
      <a className="header__link" href="#account">
        Account
      </a>
      <CtaButton className={"header__button"} content={"View Plans"} href="#" />
    </nav>
  );
}
