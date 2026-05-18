import SectionTitle from '../components/SectionTitle';

export default function Investimentos() {
  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">
            <i className="bi bi-graph-up-arrow" style={{ marginRight: '12px' }}></i>
            Investimentos
          </h1>
          <p className="page-header__breadcrumb">Home / Investimentos</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-block">
            <SectionTitle 
              label="MERCADO FINANCEIRO"
              heading="A arte de fazer o dinheiro trabalhar para você"
            />
            
            <p>
              Investir é, em essência, o ato de adiar o consumo presente em prol de um consumo maior no futuro. 
              No âmbito acadêmico, estudamos que a rentabilidade está diretamente ligada ao risco e ao tempo.
            </p>

            <div className="highlight-box">
              <i className="bi bi-lightbulb-fill" style={{ color: 'var(--color-accent)', marginRight: '8px' }}></i>
              <strong>Dica de Ouro:</strong> Nunca invista em algo que você não entenda. O conhecimento é o seu melhor ativo antes de colocar qualquer capital em risco.
            </div>

            <h2>Renda Fixa</h2>
            <p>
              Considerada a porta de entrada para novos investidores, a Renda Fixa oferece maior previsibilidade. 
              Ao investir nela, você está basicamente emprestando dinheiro para uma instituição (Banco ou Governo) 
              em troca de juros.
            </p>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li style={{ marginBottom: '8px' }}><i className="bi bi-bank" style={{ color: 'var(--color-accent)', marginRight: '8px' }}></i><strong>Tesouro Direto:</strong> Empréstimo para o governo federal.</li>
              <li style={{ marginBottom: '8px' }}><i className="bi bi-shield-check" style={{ color: 'var(--color-accent)', marginRight: '8px' }}></i><strong>CDB:</strong> Certificado de Depósito Bancário.</li>
              <li style={{ marginBottom: '8px' }}><i className="bi bi-house-door" style={{ color: 'var(--color-accent)', marginRight: '8px' }}></i><strong>LCI/LCA:</strong> Letras de Crédito focadas em Imóveis ou Agronegócio.</li>
            </ul>

            <h2>Renda Variável</h2>
            <p>
              Aqui não há garantias de rentabilidade e o capital pode oscilar. É onde se busca maiores retornos 
              no longo prazo através de ações, fundos imobiliários e ETFs.
            </p>

            <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0', marginTop: '2rem' }}>
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Reserva de Emergência</h3>
              <p style={{ fontSize: '0.95rem' }}>
                Antes de começar a investir em ativos de risco, todo investidor deve construir sua reserva 
                de emergência: um montante equivalente a 6 meses de seus custos fixos em um ativo de alta 
                liquidez e baixo risco.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
