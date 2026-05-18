import SectionTitle from '../components/SectionTitle';

export default function ControleGastos() {
  const tips = [
    { icon: <i className="bi bi-pencil-square" style={{ color: 'var(--color-accent)', fontSize: '1.2rem' }}></i>, title: "Anote tudo", desc: "Desde o cafézinho até as contas fixas. Use apps ou uma planilha simples." },
    { icon: <i className="bi bi-pie-chart" style={{ color: 'var(--color-accent)', fontSize: '1.2rem' }}></i>, title: "A regra 50-30-20", desc: "50% para necessidades, 30% para desejos e 20% para dívidas ou investimentos." },
    { icon: <i className="bi bi-cart-check" style={{ color: 'var(--color-accent)', fontSize: '1.2rem' }}></i>, title: "Consumo Consciente", desc: "Antes de comprar, pergunte-se: Eu preciso disso? Eu posso pagar agora?" },
    { icon: <i className="bi bi-trophy" style={{ color: 'var(--color-accent)', fontSize: '1.2rem' }}></i>, title: "Tenha Metas", desc: "Fica mais fácil economizar quando você tem um objetivo claro, como uma viagem ou um curso." }
  ];

  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">
            <i className="bi bi-wallet2" style={{ marginRight: '12px' }}></i>
            Controle de Gastos
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-block">
            <SectionTitle 
              label="PLANEJAMENTO"
              heading="Dominando seu orçamento mensal"
            />
            
            <p>
              O controle de gastos é o diagnóstico da sua saúde financeira. Sem saber para onde o dinheiro está indo, 
              é impossível traçar estratégias eficazes de crescimento patrimonial.
            </p>

            <div style={{ marginTop: '1.5rem' }}>
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.75rem', textAlign: 'left' }}>Dicas Práticas de Controle</h3>
              <div className="tips-list">
                {tips.map((tip, index) => (
                  <div key={index} className="tip-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div className="tip-item__icon" style={{ marginTop: '0.15rem' }}>{tip.icon}</div>
                    <div>
                      <h4 className="tip-item__title">{tip.title}</h4>
                      <p className="tip-item__desc" style={{ marginBottom: '1.25rem' }}>{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 style={{ marginTop: '1.5rem' }}>Planilha vs Aplicativo</h2>
            <p>
              Não existe a ferramenta perfeita, existe a ferramenta que você usa. Para alguns, uma planilha de Excel 
              permite maior personalização. Para outros, a praticidade de um app que sincroniza com o banco é o diferencial.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
