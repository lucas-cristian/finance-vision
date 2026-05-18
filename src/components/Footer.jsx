import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">
              <i className="bi bi-wallet2" style={{ marginRight: '8px', color: 'var(--color-accent)' }}></i>
              FinanceVision
            </div>
            <p className="footer__desc">
              Sua jornada para a liberdade financeira começa aqui. Conteúdo educativo, 
              estratégias de investimento e as melhores ferramentas para seu controle pessoal.
            </p>
          </div>

          <div>
            <h4 className="footer__heading">Navegação</h4>
            <ul className="footer__links">
              <li><Link to="/">Início</Link></li>
              <li><Link to="/investimentos">Investimentos</Link></li>
              <li><Link to="/educacao-financeira">Educação Financeira</Link></li>
              <li><Link to="/controle-de-gastos">Controle de Gastos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer__heading">Contato</h4>
            <ul className="footer__links">
              <li><i className="bi bi-envelope" style={{ marginRight: '8px' }}></i>contato@financevision.com.br</li>
              <li><i className="bi bi-telephone" style={{ marginRight: '8px' }}></i>(11) 99999-9999</li>
              <li><i className="bi bi-geo-alt" style={{ marginRight: '8px' }}></i>São Paulo, SP</li>
              <li><Link to="/contatos">Fale Conosco</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} FinanceVision — Projeto Acadêmico AOP2. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
