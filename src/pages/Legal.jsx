import React from 'react';
import { useTranslation } from '../i18n/TranslationProvider';

export default function Legal() {
  const { t } = useTranslation();
  return (
    <main className="app-main" role="main">
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">{t('legal.title') || 'Legal & Compliance'}</h1>
          <p className="hero-sub">{t('legal.intro') || 'Terms of service, privacy policy, and disclaimers.'}</p>
        </div>
      </section>

      <div className="site-container" style={{ paddingTop: '1.5rem' }}>
        <div className="page-inner">
          <div className="section">
            <h2>Terms of Service</h2>
            <p>Placeholder: add terms of service here.</p>

            <h2 style={{ marginTop: '1rem' }}>Privacy Policy</h2>
            <p>Placeholder: add privacy policy here.</p>

            <h2 style={{ marginTop: '1rem' }}>Disclaimer</h2>
            <p>Placeholder: add disclaimer here.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
