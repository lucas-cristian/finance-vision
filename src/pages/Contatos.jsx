import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contatos() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
      reply_to: email,
      name,
      email,
    };

    setIsSending(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      alert('Mensagem enviada com sucesso!');
      form.reset();
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      alert('Nao foi possivel enviar. Tente novamente em instantes.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">
            <i className="bi bi-envelope-at-fill" style={{ marginRight: '12px' }}></i>
            Contatos
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Fale com a gente</h2>
              <p>
                Tem alguma dúvida sobre o conteúdo do blog ou sugestão de tema para as próximas postagens? 
                Estamos aqui para ajudar na sua jornada financeira.
              </p>
              
              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-detail__icon"><i className="bi bi-envelope"></i></div>
                  <div>
                    <span className="contact-detail__label">E-mail</span>
                    <span className="contact-detail__value">contato@financevision.com.br</span>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail__icon"><i className="bi bi-telephone"></i></div>
                  <div>
                    <span className="contact-detail__label">Telefone</span>
                    <span className="contact-detail__value">(11) 99999-9999</span>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail__icon"><i className="bi bi-geo-alt"></i></div>
                  <div>
                    <span className="contact-detail__label">Endereço</span>
                    <span className="contact-detail__value">Av. Paulista, 1000 - São Paulo, SP</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nome Completo</label>
                  <input type="text" id="name" name="name" className="form-control" placeholder="Seu nome" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" id="email" name="email" className="form-control" placeholder="seu@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea id="message" name="message" className="form-control" rows="5" placeholder="Como podemos ajudar?" required></textarea>
                </div>
                <button type="submit" className="btn-submit" disabled={isSending}>
                  {isSending ? 'Enviando...' : 'Enviar Mensagem'} <i className="bi bi-send" style={{ marginLeft: '8px' }}></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
