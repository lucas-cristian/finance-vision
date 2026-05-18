import SectionTitle from '../components/SectionTitle';

export default function EducacaoFinanceira() {
  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">
            <i className="bi bi-mortarboard-fill" style={{ marginRight: '12px' }}></i>
            Educação Financeira
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-block">
            <SectionTitle 
              label="CONHECIMENTO"
              heading="A base de tudo é saber como lidar com o dinheiro"
            />
            
            <p>
              Educação financeira não é apenas sobre matemática ou fórmulas complexas. É sobre comportamento, 
              hábitos e a capacidade de fazer escolhas conscientes que impactarão sua qualidade de vida a longo prazo.
            </p>

            <h2 style={{ marginTop: '2rem' }}>Os 4 Pilares da Educação Financeira</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', margin: '2rem 0' }}>
              <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h4 style={{ color: 'var(--color-accent-dark)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="bi bi-cash-stack" style={{ fontSize: '1.4rem' }}></i> 1. Ganhar
                </h4>
                <p style={{ fontSize: '0.85rem' }}>Expandir sua capacidade produtiva e diversificar fontes de renda.</p>
              </div>
              <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h4 style={{ color: 'var(--color-accent-dark)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="bi bi-cart3" style={{ fontSize: '1.4rem' }}></i> 2. Gastar
                </h4>
                <p style={{ fontSize: '0.85rem' }}>Consumir de forma inteligente, priorizando o que realmente agrega valor.</p>
              </div>
              <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h4 style={{ color: 'var(--color-accent-dark)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="bi bi-piggy-bank" style={{ fontSize: '1.4rem' }}></i> 3. Poupar
                </h4>
                <p style={{ fontSize: '0.85rem' }}>Reter parte do que se ganha para construir patrimônio e segurança.</p>
              </div>
              <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h4 style={{ color: 'var(--color-accent-dark)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="bi bi-graph-up-arrow" style={{ fontSize: '1.4rem' }}></i> 4. Investir
                </h4>
                <p style={{ fontSize: '0.85rem' }}>Fazer o excedente poupado crescer através dos juros compostos.</p>
              </div>
            </div>

            <div className="highlight-box" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <p style={{ margin: 0, marginBottom: '1.5rem', fontStyle: 'italic', fontWeight: '500' }}>
                "A educação financeira transforma a maneira como você vê cada centavo que passa pelas suas mãos."
              </p>
            </div>

            <h2 style={{ marginBottom: '1rem' }}>O Poder dos Juros Compostos</h2>
            <p>
              Albert Einstein supostamente chamou os juros compostos de "a oitava maravilha do mundo". 
              Pequenas quantias investidas regularmente tornam-se fortunas ao longo de décadas devido ao 
              efeito de bola de neve.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
