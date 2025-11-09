import snappyIcon from "/images/icon-snappy-process.svg";
import affordableIcon from "/images/icon-affordable-prices.svg";
import peopleIcon from "/images/icon-people-first.svg";

function Feature({ src, header, content }) {
  return (
    <div className="feature-card">
      <img className="feature-card__icon" src={src} alt="" />
      <h3 className="feature-card__heading">{header}</h3>
      <p className="feature-card__text">{content}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section className="features">
      <div className="features__container container">
        <h2 className="features__title">We're different</h2>
        <div className="features__grid">
          <Feature
            src={snappyIcon}
            header="Snappy Process"
            content="Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms."
          />

          <Feature
            src={affordableIcon}
            header="Affordable Prices"
            content="We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best
    coverage possible."
          />

          <Feature
            src={peopleIcon}
            header="People First"
            content="Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it."
          />
        </div>
      </div>
    </section>
  );
}
