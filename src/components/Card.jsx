import { Link } from 'react-router-dom';

export default function Card({ title, desc, tag, icon, link }) {
  return (
    <div className="card">
      <div className="card__img">
        {icon}
      </div>
      <div className="card__body">
        <span className="card__tag">{tag}</span>
        <h3 className="card__title">{title}</h3>
        <p className="card__desc">{desc}</p>
        <div className="card__footer">
          <Link to={link} className="card__link">
            Ler mais <i className="bi bi-arrow-right" style={{ marginLeft: '4px' }}></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
