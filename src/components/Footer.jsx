import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="brand">HAVI</div>
          <small>Trusted oncology information</small>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <Link to="/legal">Legal</Link>
          <a href="mailto:info@havi.org">Contact</a>
          <a href="#">Privacy</a>
        </nav>

        <div className="footer-right">
          <small>© {new Date().getFullYear()} HAVI</small>
        </div>
      </div>
    </footer>
  );
}
