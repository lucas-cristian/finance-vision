export default function SectionTitle({ label, heading }) {
  return (
    <div className="section-title">
      <span className="section-title__label">{label}</span>
      <h2 className="section-title__heading">{heading}</h2>
    </div>
  );
}
