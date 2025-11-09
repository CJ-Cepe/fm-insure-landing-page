export default function CtaButton({ content, className, href = "#" }) {
  return (
    <a className={`cta-button ${className}`} href={href}>
      {content}
    </a>
  );
}
