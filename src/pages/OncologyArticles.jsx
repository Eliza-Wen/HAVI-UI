import React from 'react';
import { useTranslation } from '../i18n/TranslationProvider';

const sampleArticles = [
  { id: 1, title: 'Breast cancer: novel biomarkers and targeted therapies', journal: 'J Clin Oncol', year: 2025 },
  { id: 2, title: 'Advances in immunotherapy for triple-negative breast cancer', journal: 'Nat Med', year: 2024 },
  { id: 3, title: 'Liquid biopsy applications in oncology', journal: 'Lancet Oncol', year: 2023 }
];

export default function OncologyArticles() {
  const { t } = useTranslation();

  return (
    <main className="app-main" role="main">
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">{t('oncology.title')}</h1>
          <p className="hero-sub">{t('oncology.intro')}</p>
        </div>
      </section>

      <div className="site-container">
        <div className="page-inner">
          <div className="section">
            <h2 style={{ marginBottom: '0.75rem' }}>{t('oncology.title')}</h2>

            <div className="articles-grid-2col">
              {sampleArticles.map((a) => (
                <article key={a.id} className="article-card">
                  <h3 className="article-title">{a.title}</h3>
                  <p className="article-meta">{a.journal} • {a.year}</p>
                  <p className="article-excerpt">Summary not available — click to view details.</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
import React from 'react';
import { useTranslation } from '../i18n/TranslationProvider';

export default function OncologyArticles() {
  const { t } = useTranslation();
  return (
    <main className="app-main" role="main">
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">{t('articles.title') || 'Oncology Articles'}</h1>
          <p className="hero-sub">{t('articles.subtitle') || 'Latest oncology research and reviews.'}</p>
        </div>
      </section>

      <div className="site-container" style={{ paddingTop: '1.5rem' }}>
        <div className="page-inner">
          <section className="section">
            <h2>Breast cancer</h2>
            <div className="articles-grid-2col">
              <div className="article-card">
                <div className="thumb" aria-hidden>📄</div>
                <div style={{flex:1}}>
                  <a href="#">Advances in Breast Cancer Immunotherapy 2024</a>
                  <div style={{color:'var(--muted)', marginTop:8}}>Journal of Clinical Oncology • Oct 2024</div>
                </div>
              </div>
              <div className="article-card">
                <div className="thumb" aria-hidden>📄</div>
                <div style={{flex:1}}>
                  <a href="#">Neoadjuvant Therapy Updates for Early-stage Breast Cancer</a>
                  <div style={{color:'var(--muted)', marginTop:8}}>Cancer Research Communications • Jul 2024</div>
                </div>
              </div>
            </div>
          </section>

          <section className="section" style={{marginTop: '1.25rem'}}>
            <h2>More articles</h2>
            <p style={{color:'var(--muted)'}}>Visit PubMed for more articles or deploy the PubMed proxy for abstracts.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
