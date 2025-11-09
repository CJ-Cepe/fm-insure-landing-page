import CtaButton from "../components/CtaButton";
import imageIntroDesktop from "/images/image-intro-desktop.jpg";
import imageIntroMobile from "/images/image-intro-mobile.jpg";

function HeroImage() {
  return (
    <picture className="hero__image">
      <source srcSet={imageIntroDesktop} media="(min-width: 768px)" />
      <img
        src={imageIntroMobile}
        alt="Happy family of four walking together outdoors"
        width="375"
        height="451"
        loading="eager"
      />
    </picture>
  );
}

function HeroContent() {
  return (
    <div className="hero__content">
      <h1 className="hero__title">
        Humanizing your insurance.
        {/* <br /> */}
      </h1>
      <p className="hero__text">
        Get your life insurance coverage easier and faster. We blend our
        expertise and technology to help you find the plan that's right for you.
        Ensure you and your loved ones are protected.
      </p>
      <CtaButton className={"hero__cta"} content={"View Plans"} href="#" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container container">
        <HeroImage />
        <HeroContent />
      </div>
    </section>
  );
}
