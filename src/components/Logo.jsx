export default function Logo({ className, src, alt, href = "#" }) {
  return (
    <a className={`logo-link`} href={href}>
      <img className={`logo-img ${className}`} src={src} alt={alt} />
    </a>
  );
}
