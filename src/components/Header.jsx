import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';

export default function Header() {
  const { user, signOut } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" role="banner">
      <div className="header-left">
        <a className="contact-link" href="mailto:info@havi.org" aria-label="Contact email">✉ info@havi.org</a>
      </div>

      <div className="header-center">
        <div className="brand">HAVI</div>
      </div>

      <div className="header-right">
        <button className="nav-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </button>

        <nav id="main-nav" className={`main-nav ${open ? 'open' : ''}`} aria-label="Main navigation">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/legal" onClick={() => setOpen(false)}>Legal</Link>
          {user ? (
            <button className="signout" onClick={() => { signOut(); setOpen(false); }}>Sign out</button>
          ) : (
            <Link to="/login" onClick={() => setOpen(false)}>Sign in</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
