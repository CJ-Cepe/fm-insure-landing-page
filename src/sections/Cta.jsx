import CtaButton from "../components/CtaButton";

export default function Cta() {
  return (
    <section className="cta-banner">
      <div className="cta-banner__container container">
        <h2 className="cta-banner__title">Find out more about how we work</h2>
        <CtaButton
          className={"cta-banner__button"}
          content={"How we work"}
          href="#"
        />
      </div>
    </section>
  );
}
