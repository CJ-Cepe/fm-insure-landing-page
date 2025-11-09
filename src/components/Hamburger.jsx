export default function Hamburger({ isOpen, toggleMenu }) {
  return (
    <button
      className={`header__toggle hamburger-button ${isOpen ? "open" : ""}`}
      onClick={toggleMenu}
      aria-expanded={isOpen}
      aria-controls="main-menu"
    >
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
    </button>
  );
}
