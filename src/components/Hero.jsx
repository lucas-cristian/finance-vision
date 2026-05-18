import { Link } from 'react-router-dom';

export default function Hero({ eyebrow, title, subtitle, btnText, btnLink }) {
  return (
    <section className="hero">
      <div className="container hero__content">
        <span className="hero__eyebrow">{eyebrow}</span>
        <h1 className="hero__title" dangerouslySetInnerHTML={{ __html: title }}></h1>
        <p className="hero__subtitle">{subtitle}</p>
        <Link to={btnLink} className="hero__btn">
          {btnText} <i className="bi bi-arrow-right" style={{ marginLeft: '6px' }}></i>
        </Link>
      </div>
    </section>
  );
}
