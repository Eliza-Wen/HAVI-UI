import React, { useState } from 'react';
import { useTranslation } from '../i18n/TranslationProvider';

export default function Login() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // Lightweight local auth stub: store a token and redirect to home
    try {
      localStorage.setItem('auth_token', email || 'user');
    } catch (err) {}
    window.location.href = '/';
  }

  return (
    <main className="app-main" role="main">
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">{t('login.signIn')}</h1>
          <p className="hero-sub">Sign in to access personalized features.</p>
        </div>
      </section>

      <div className="site-container">
        <div className="page-inner">
          <div className="card" style={{ maxWidth: 560, margin: '1rem auto', padding: '1.25rem' }}>
            <form onSubmit={handleSubmit}>
              <label style={{ display: 'block', marginBottom: 6 }}>{t('login.email')}</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required style={{ width: '100%', padding: '0.5rem', marginBottom: '0.75rem' }} />

              <label style={{ display: 'block', marginBottom: 6 }}>{t('login.password')}</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required style={{ width: '100%', padding: '0.5rem', marginBottom: '0.75rem' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button type="submit" className="btn-primary">{t('login.signIn')}</button>
                <a href="/signup" style={{ color: '#0366d6' }}>{t('login.signUp')}</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
