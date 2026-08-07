import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const stats = [
  { value: '120K+', label: 'Interações mensais' },
  { value: '99.9%', label: 'Uptime visual' },
  { value: '18ms', label: 'Animações suaves' },
  { value: 'A+', label: 'Acessibilidade' }
];

const features = [
  {
    title: 'Glassmorphism com profundidade',
    text: 'Camadas translúcidas, blur elegante e bordas sutis criam sensação de produto premium sem ruído visual.'
  },
  {
    title: 'Arquitetura componentizada',
    text: 'Seções modulares, listas derivadas de dados e estrutura limpa para evoluir sem retrabalho.'
  },
  {
    title: 'Interações refinadas',
    text: 'Hover states, motion leve e revelação progressiva deixam a navegação mais viva e perceptível.'
  }
];

const gallery = [
  'Painel editorial',
  'Cards com brilho',
  'Blocos de conversão',
  'Camadas de gradiente'
];

const portfolio = [
  {
    title: 'Hero de alto impacto',
    text: 'Primeira dobra com mensagem clara, CTA duplo e composição que valoriza o produto.'
  },
  {
    title: 'Narrativa de valor',
    text: 'Seções de recursos, prova social e timeline conduzem o usuário sem fricção.'
  },
  {
    title: 'Responsividade total',
    text: 'Grid fluido e leitura consistente em celulares, tablets e monitores amplos.'
  }
];

const timeline = [
  'Pesquisa e direção visual',
  'Arquitetura de conteúdo',
  'Implementação responsiva',
  'Refino de UX, SEO e performance'
];

const testimonials = [
  {
    quote: 'Parece um produto de mercado grande. A página transmite confiança imediatamente.',
    name: 'Head de Produto'
  },
  {
    quote: 'A experiência é limpa, rápida e com acabamento visual acima da média.',
    name: 'Especialista em UX'
  }
];

const faqs = [
  {
    question: 'O site está pronto para produção?',
    answer: 'Sim. A base está preparada para deploy em Vercel ou qualquer hosting compatível com Vite.'
  },
  {
    question: 'Há acessibilidade e SEO básico?',
    answer: 'Sim. Foram aplicados título, descrição, semântica, contraste e navegação responsiva.'
  },
  {
    question: 'O layout funciona em telas pequenas?',
    answer: 'Sim. O sistema de grid se adapta para mobile com espaçamento e tipografia ajustados.'
  }
];

function App() {
  return (
    <div className="app-shell">
      <div className="backdrop backdrop-one" />
      <div className="backdrop backdrop-two" />

      <header className="header">
        <nav className="nav" aria-label="Principal">
          <a className="brand" href="#topo" aria-label="TESTE CHAT início">
            <span className="brand-mark" />
            <span>TESTE CHAT</span>
          </a>
          <div className="menu">
            <a href="#recursos">Recursos</a>
            <a href="#portfolio">Portfólio</a>
            <a href="#faq">FAQ</a>
          </div>
        </nav>

        <section className="hero" id="topo">
          <div className="hero-copy reveal">
            <p className="eyebrow">Design system • motion leve • experiência premium</p>
            <h1>Landing page moderna com presença de produto líder de mercado.</h1>
            <p className="lead">
              Uma interface sofisticada com glassmorphism, gradientes, microinterações e arquitetura modular.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#cta">Começar agora</a>
              <a className="button button-secondary" href="#recursos">Ver recursos</a>
            </div>
          </div>

          <aside className="hero-card glass reveal" aria-label="Resumo de métricas">
            <p className="card-kicker">Painel vivo</p>
            <h2>Converta atenção em confiança.</h2>
            <div className="stats-grid">
              {stats.map((item) => (
                <div className="stat" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </section>
      </header>

      <main>
        <section className="section reveal" aria-labelledby="recursos-title" id="recursos">
          <div className="section-head">
            <p className="eyebrow">Recursos</p>
            <h2 id="recursos-title">Componentes pensados para escala visual e manutenção.</h2>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card glass" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" aria-labelledby="galeria-title">
          <div className="section-head">
            <p className="eyebrow">Galeria</p>
            <h2 id="galeria-title">Sistema visual com camadas, brilho e contraste.</h2>
          </div>
          <div className="gallery-grid">
            {gallery.map((item) => (
              <div className="gallery-card glass" key={item}>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section reveal" aria-labelledby="portfolio-title" id="portfolio">
          <div className="section-head">
            <p className="eyebrow">Portfólio</p>
            <h2 id="portfolio-title">Estrutura editorial com narrativa de conversão.</h2>
          </div>
          <div className="portfolio-grid">
            {portfolio.map((item, index) => (
              <article className="portfolio-card glass" key={item.title}>
                <span className="index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" aria-labelledby="cards-title">
          <div className="section-head">
            <p className="eyebrow">Cards</p>
            <h2 id="cards-title">Blocos dinâmicos com foco em legibilidade e ritmo.</h2>
          </div>
          <div className="cards-row">
            <article className="info-card glass">
              <h3>Hierarquia forte</h3>
              <p>Tipografia grande, respiro generoso e CTAs evidentes reduzem atrito.</p>
            </article>
            <article className="info-card glass">
              <h3>Motion sutil</h3>
              <p>Transitions suaves dão percepção de qualidade sem distrair o conteúdo.</p>
            </article>
            <article className="info-card glass">
              <h3>Dark mode nativo</h3>
              <p>Paleta escura calibrada para contraste, conforto e estética contemporânea.</p>
            </article>
          </div>
        </section>

        <section className="section reveal" aria-labelledby="timeline-title">
          <div className="section-head">
            <p className="eyebrow">Timeline</p>
            <h2 id="timeline-title">Fluxo de trabalho claro do conceito ao deploy.</h2>
          </div>
          <div className="timeline">
            {timeline.map((step, index) => (
              <div className="timeline-step glass" key={step}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section reveal" aria-labelledby="faq-title" id="faq">
          <div className="section-head">
            <p className="eyebrow">FAQ</p>
            <h2 id="faq-title">Respostas diretas para reduzir dúvidas antes da ação.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item glass" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section reveal" aria-labelledby="testimonials-title">
          <div className="section-head">
            <p className="eyebrow">Depoimentos</p>
            <h2 id="testimonials-title">Prova social objetiva e sem exageros.</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <blockquote className="testimonial glass" key={item.name}>
                <p>“{item.quote}”</p>
                <cite>{item.name}</cite>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="section cta glass reveal" id="cta" aria-labelledby="cta-title">
          <p className="eyebrow">CTA</p>
          <h2 id="cta-title">Pronto para publicar e evoluir com base sólida.</h2>
          <p>Estrutura limpa, desempenho, SEO básico e visual premium em um único projeto.</p>
          <a className="button button-primary" href="mailto:contato@seudominio.com">Falar com o projeto</a>
        </section>
      </main>

      <footer className="footer">
        <p>TESTE CHAT • Landing page premium em React + Vite</p>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
