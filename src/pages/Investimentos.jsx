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
              Investir e adiar consumo presente com o objetivo de aumentar o poder de compra no futuro. Na pratica,
              rentabilidade, risco e tempo caminham juntos: quanto maior o retorno esperado, maior a oscilacao
              e maior a necessidade de paciencia e disciplina.
            </p>

            <div className="highlight-box" style={{ marginTop: '1.5rem' }}>
              <i className="bi bi-lightbulb-fill" style={{ color: 'var(--color-accent)', marginRight: '8px' }}></i>
              <strong>Dica de ouro:</strong> invista apenas no que voce entende. Conhecimento reduz erros e melhora as decisoes.
            </div>

            <h2 style={{ marginTop: '2rem' }}>Fundamentos antes de investir</h2>
            <ul>
              <li><strong>Objetivo claro:</strong> curto, medio ou longo prazo definem o tipo de investimento.</li>
              <li><strong>Perfil de risco:</strong> conservador, moderado ou arrojado afeta a carteira ideal.</li>
              <li><strong>Disciplina:</strong> investir todo mes pesa mais do que tentar acertar o timing.</li>
            </ul>

            <div style={{ marginTop: '2.5rem' }}>
              <h2>Renda fixa</h2>
              <p>
                E a porta de entrada para a maioria dos investidores. Voce empresta dinheiro para um banco
                ou para o governo e recebe juros em troca. E indicada para objetivos de curto a medio prazo
                e para equilibrar o risco da carteira.
              </p>
              <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '0.75rem' }}>
                <li style={{ marginBottom: '8px' }}><i className="bi bi-bank" style={{ color: 'var(--color-accent)', marginRight: '8px' }}></i><strong>Tesouro Direto:</strong> emprestimo ao governo federal.</li>
                <li style={{ marginBottom: '8px' }}><i className="bi bi-shield-check" style={{ color: 'var(--color-accent)', marginRight: '8px' }}></i><strong>CDB:</strong> emprestimo a bancos, com taxa pre ou pos.</li>
                <li style={{ marginBottom: '8px' }}><i className="bi bi-house-door" style={{ color: 'var(--color-accent)', marginRight: '8px' }}></i><strong>LCI/LCA:</strong> isencao de IR e lastro em imoveis ou agronegocio.</li>
              </ul>
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <h2>Renda variavel</h2>
              <p>
                O capital oscila e nao ha garantia de retorno. Em compensacao, ha potencial de ganhos maiores
                no longo prazo, especialmente em acoes, FIIs e ETFs.
              </p>
              <ul>
                <li><strong>Acoes:</strong> participacao em empresas; foco no longo prazo.</li>
                <li><strong>FIIs:</strong> renda mensal com foco em imoveis e recebiveis.</li>
                <li><strong>ETFs:</strong> diversificacao simples com taxas menores.</li>
              </ul>
            </div>

            <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0', marginTop: '2rem' }}>
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Reserva de emergencia</h3>
              <p style={{ fontSize: '0.95rem' }}>
                Antes de assumir risco, monte uma reserva de emergencia com cerca de 6 meses dos seus custos
                fixos, em um produto de alta liquidez e baixo risco.
              </p>
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <h2>Passo a passo simples</h2>
              <ol style={{ paddingLeft: '1.25rem', marginTop: '0.75rem' }}>
                <li>Organize o orcamento e quite dividas com juros altos.</li>
                <li>Construa sua reserva de emergencia.</li>
                <li>Defina objetivos com valores e prazos.</li>
                <li>Comece pela renda fixa e diversifique aos poucos.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
