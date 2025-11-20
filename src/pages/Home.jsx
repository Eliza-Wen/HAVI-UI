import React, { Suspense, useState } from 'react';
const Assessment = React.lazy(() => import('../components/Assessment'));

export default function Home() {
  return (
    <main id="main-content" className="app-main" role="main">
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">Trusted oncology information, made simple</h1>
          <p className="hero-sub">Personalized guidance, AI-assisted triage, and practical resources for patients and caregivers.</p>
          <div className="hero-cta">
            <input className="search-input hero-search" type="search" placeholder="Search conditions, symptoms, or treatments" aria-label="Search" />
            <button className="button-primary">Search</button>
          </div>
        </div>
      </section>

      <div className="layout-grid">
        {/* Left column: Hospital Data */}
        <div className="section">
          <h2>Hospital Data Access (Coming Soon)</h2>
          <p>Connect to your hospital records and appointment system.</p>
        </div>

        {/* Center column: Search + Articles */}
        <div>
          <div className="section">
            <h2>Search Cancer Information</h2>
            <input
              type="text"
              placeholder="e.g. Breast Cancer, Symptoms, Treatment"
              className="search-input"
              aria-label="Search cancer information"
            />
          </div>

          <div className="section">
            <h2>Recommended Articles</h2>
            <ul>
              <li>Understanding Breast Cancer – 5-Year Survival Insights</li>
              <li>How to Navigate Oncology Care in China</li>
            </ul>
          </div>
        </div>

        {/* Right column: AI Triage */}
          <div className="section">
            <h2>AI Symptom Triage</h2>
            <Triage />
          </div>
      </div>

      <section className="ad-box">
        <h3>Sponsored Insurance Plans</h3>
        <p>Explore coverage options from our trusted partners.</p>
      </section>
    </main>
  );
}

function Triage() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button className="button-primary" onClick={() => setOpen(true)}>Start AI Assessment</button>
      {open && (
        <div style={{ marginTop: '1rem' }}>
          <Suspense fallback={<div>Loading assessment…</div>}>
            <Assessment />
          </Suspense>
        </div>
      )}
    </div>
  );
}
