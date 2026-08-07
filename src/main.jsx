import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const features = [
  {
    title: 'Direção visual refinada',
    text: 'Paleta escura sofisticada, contraste alto, tipografia expressiva e composição com ritmo editorial.'
  },
  {
    title: 'Experiência responsiva',
    text: 'Layout fluido para celular, tablet e desktop, com espaçamento consistente e leitura confortável.'
  },
  {
    title: 'Componentes reutilizáveis',
    text: 'Estrutura modular para facilitar manutenção, evolução do design e novas páginas no futuro.'
  }
];

const highlights = [
  'Landing page moderna',
  'Seções estratégicas',
  'CTA claro e objetivo',
  'Otimizado para Vercel'
];

function App() {
  return (
    <div className="page">
      <header className="hero">
        <nav className="nav">
          <div className="brand">
            <span className="brand-mark" />
            <span>Atelier Nova</span>
          </div>
          <a className="nav-link" href="#contato">Contato</a>
        </nav>

        <div className="hero-grid">
          <div>
            <p className="eyebrow">Design premium • performance • clareza</p>
            <h1>Um site elegante, moderno e pronto para publicar.</h1>
            <p className="lead">
              Uma landing page de alto padrão visual, com UX limpa, microinterações sutis e arquitetura simples de manter.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#servicos">Explorar recursos</a>
              <a className="button button-secondary" href="#contato">Falar agora</a>
            </div>
            <ul className="highlights" aria-label="Destaques do projeto">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className="hero-card" aria-label="Resumo do projeto">
            <p className="card-label">Resumo</p>
            <h2>Layout editorial com energia contemporânea.</h2>
            <p>
              Criado para transmitir confiança, sofisticação e foco em conversão sem poluição visual.
            </p>
            <div className="stats">
              <div><strong>100%</strong><span>Responsivo</span></div>
              <div><strong>0</strong><span>Dependências extras</span></div>
              <div><strong>Vercel</strong><span>Deploy pronto</span></div>
            </div>
          </aside>
        </div>
      </header>

      <main>
        <section className="section" id="sobre">
          <div className="section-head">
            <p className="eyebrow">Sobre</p>
            <h2>Uma base visual forte, sem excesso.</h2>
          </div>
          <p className="section-copy">
            O projeto foi estruturado para funcionar como vitrine profissional: hierarquia clara, blocos bem separados,
            leitura rápida e visual consistente em qualquer tela.
          </p>
        </section>

        <section className="section" id="servicos">
          <div className="section-head">
            <p className="eyebrow">Recursos</p>
            <h2>Componentes pensados para comunicar valor.</h2>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="destaques">
          <div className="section-head">
            <p className="eyebrow">Portfólio</p>
            <h2>Blocos de destaque com acabamento premium.</h2>
          </div>
          <div className="portfolio">
            <article>
              <span>01</span>
              <h3>Hero de impacto</h3>
              <p>Mensagem direta, CTA visível e primeira dobra com presença.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Seções modulares</h3>
              <p>Sobre, recursos, prova social e contato organizados com clareza.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Interações sutis</h3>
              <p>Hover, transições suaves e comportamento amigável ao usuário.</p>
            </article>
          </div>
        </section>

        <section className="section" id="depoimentos">
          <div className="section-head">
            <p className="eyebrow">Prova social</p>
            <h2>Confiança transmitida de forma objetiva.</h2>
          </div>
          <div className="testimonials">
            <blockquote>
              “Visual impecável, navegação fluida e estrutura que já nasce pronta para apresentar um produto sério.”
              <cite>Direção de produto</cite>
            </blockquote>
            <blockquote>
              “O site parece premium em qualquer tamanho de tela e mantém leitura forte sem esforço.”
              <cite>UX review</cite>
            </blockquote>
          </div>
        </section>

        <section className="section cta" id="contato">
          <p className="eyebrow">Contato</p>
          <h2>Pronto para publicar no GitHub e colocar no ar na Vercel.</h2>
          <p>
            Estrutura simples, limpa e preparada para evolução futura.
          </p>
          <a className="button button-primary" href="mailto:contato@seudominio.com">Iniciar projeto</a>
        </section>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
