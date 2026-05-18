import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';

export default function Home() {
  const highlights = [
    {
      tag: "Investimentos",
      title: "Como começar a investir com pouco dinheiro",
      desc: "Descubra os primeiros passos para entrar no mercado financeiro e fazer seu dinheiro render de forma segura.",
      icon: <i className="bi bi-graph-up-arrow"></i>,
      link: "/investimentos"
    },
    {
      tag: "Planejamento",
      title: "Organizando suas finanças em 30 dias",
      desc: "Um guia prático para colocar as contas em dia, eliminar dívidas e começar a poupar todos os meses.",
      icon: <i className="bi bi-calendar3"></i>,
      link: "/controle-de-gastos"
    },
    {
      tag: "Educação",
      title: "Os pilares da educação financeira moderna",
      desc: "Entenda por que saber lidar com o dinheiro é a habilidade mais importante do século XXI.",
      icon: <i className="bi bi-mortarboard"></i>,
      link: "/educacao-financeira"
    }
  ];

  return (
    <div>
      <Hero 
        eyebrow="BEM-VINDO AO FINANCE VISION"
        title="Transforme sua relação com o <span>dinheiro</span>"
        subtitle="Educação financeira descomplicada para você conquistar sua independência e planejar seu futuro com segurança."
        btnText="Começar Agora"
        btnLink="/educacao-financeira"
      />

      <section className="section">
        <div className="container">
          <SectionTitle 
            label="DESTAQUES"
            heading="Explore nosso conteúdo"
          />
          
          <div className="cards-grid">
            {highlights.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="intro-grid">
            <div className="intro__content">
              <h2>Por que o Finance Vision existe?</h2>
              <p>
                Acreditamos que a educação financeira deve ser acessível a todos. Em um cenário econômico 
                volátil, saber como gerir seus recursos não é apenas uma vantagem, é uma necessidade acadêmica e profissional.
              </p>
              <p>
                Nossa missão é fornecer informações claras, objetivas e baseadas em boas práticas de mercado 
                para que você possa tomar decisões mais inteligentes.
              </p>
              
              <div className="intro__features">
                <div className="feature-item">
                  <div className="feature-item__icon"><i className="bi bi-check-lg"></i></div>
                  <span className="feature-item__label">Conteúdo Gratuito</span>
                </div>
                <div className="feature-item">
                  <div className="feature-item__icon"><i className="bi bi-check-lg"></i></div>
                  <span className="feature-item__label">Dicas Práticas</span>
                </div>
                <div className="feature-item">
                  <div className="feature-item__icon"><i className="bi bi-check-lg"></i></div>
                  <span className="feature-item__label">Foco no Futuro</span>
                </div>
                <div className="feature-item">
                  <div className="feature-item__icon"><i className="bi bi-check-lg"></i></div>
                  <span className="feature-item__label">Linguagem Simples</span>
                </div>
              </div>
            </div>
            <div className="intro__image">
              <div style={{ textAlign: 'center' }}>
                <i className="bi bi-bank" style={{ fontSize: '100px', color: 'var(--color-primary)', display: 'block', margin: '0 auto' }}></i>
                <h3 style={{ marginTop: '1rem', color: 'var(--color-primary)' }}>Conhecimento Sólido</h3>
                <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem' }}>Base acadêmica para resultados reais.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
