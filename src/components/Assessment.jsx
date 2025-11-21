import React, { useState } from 'react';

export default function Assessment() {
  const [input, setInput] = useState('');
  return (
    <div>
      <h3>AI-driven Treatment Decision</h3>
      <p style={{ marginTop: 6, marginBottom: 8, color: 'var(--muted)' }}>Powered by AI and backend algorithms to analyze your current situation and each available option, evaluating potential results.</p>

      <label style={{ display: 'block', marginBottom: 6, fontWeight: 600 }}>Describe your current concern</label>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="e.g. chest pain, lump, fatigue" className="search-input" />
      <div style={{ marginTop: 10, display: 'flex', gap: '0.5rem' }}>
        <button className="button-primary">Analyze</button>
        <button onClick={() => setInput('')} style={{ padding: '.6rem 1rem' }}>Clear</button>
      </div>
    </div>
  );
}
