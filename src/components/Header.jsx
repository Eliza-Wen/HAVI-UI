import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';
import { useTranslation } from '../i18n/TranslationProvider';

export default function Header() {
  const { user, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useTranslation();

  const onChangeLang = (e) => setLang(e.target.value);

  return (
    <header className="site-header" role="banner">
      <div className="header-left">
        <div className="brand">HAVI</div>
      </div>

      <div className="header-right">
        <div className="lang-wrap" aria-hidden>
          <label htmlFor="site-lang" className="lang-label" style={{ marginRight: 8 }}>{lang === 'en' ? 'Language' : lang.startsWith('zh') ? '语言' : 'Language'}</label>
          <select id="site-lang" value={lang} onChange={onChangeLang} className="lang-select">
            <option value="en">English</option>
            <option value="zh">中文</option>
          </select>
        </div>

        <button className="nav-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </button>

        <nav id="main-nav" className={`main-nav ${open ? 'open' : ''}`} aria-label="Main navigation">
          <Link to="/" onClick={() => setOpen(false)}>{t('nav.home') || 'Home'}</Link>
          <Link to="/legal" onClick={() => setOpen(false)}>{t('nav.legal') || 'Legal'}</Link>
          {user ? (
            <button className="signout" onClick={() => { signOut(); setOpen(false); }}>{t('nav.signOut') || 'Sign out'}</button>
          ) : (
            <Link to="/login" onClick={() => setOpen(false)}>{t('nav.signIn') || 'Sign in'}</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
