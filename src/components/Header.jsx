import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/investimentos', label: 'Investimentos' },
    { path: '/educacao-financeira', label: 'Educação' },
    { path: '/controle-de-gastos', label: 'Controle' },
    { path: '/contatos', label: 'Contatos' },
  ];

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo">
          <i className="bi bi-wallet2 header__logo-icon"></i>
          FinanceVision
        </Link>

        <nav className="nav">
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`nav__link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
