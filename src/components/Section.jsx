export default function Section({ id, eyebrow, title, children, dark = false }) {
  return (
    <section id={id} className={`section ${dark ? "section-dark" : ""}`}>
      <div className="container">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}