import Menu from "../components/Menu";
import Hamburger from "../components/Hamburger";
import Logo from "../components/Logo";
import logoSrc from "/images/logo.svg";

import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // closing hamburger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // close menu w/ esc
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <header className="header">
      <div className="header__container container">
        <Logo
          className={"header__logo-img"}
          alt={"insure logo"}
          src={logoSrc}
        />
        <Menu isOpen={isOpen} />
        <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
}
