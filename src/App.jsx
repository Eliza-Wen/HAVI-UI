import './App.css';

function App() {
  return (
    <div>
      <header style={{ background: '#004080', color: 'white', padding: '1em 2em', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
  <div style={{ fontFamily: "'Caveat', cursive", fontSize: '2em', fontWeight: 'bold' }}>
    HAVI
  </div>
  <div>
    <h1 style={{ margin: 0 }}>HAVI Oncology Information Platform</h1>
    <p style={{ margin: 0 }}>Empowering patients through trusted cancer information</p>
  </div>
</header>

      <div style={{
  display: 'grid',
  gridTemplateColumns: '1fr 2fr 1fr',
  gap: '1.5em',
  padding: '2em',
  maxWidth: '1200px',
  margin: 'auto'
}}>
  {/* Left column: Hospital Data */}
  <div style={sectionStyle}>
    <h2>Hospital Data Access (Coming Soon)</h2>
    <p>Connect to your hospital records and appointment system.</p>
  </div>

  {/* Center column: Search + Articles */}
  <div>
    <div style={sectionStyle}>
      <h2>Search Cancer Information</h2>
      <input
        type="text"
        placeholder="e.g. Breast Cancer, Symptoms, Treatment"
        style={{ width: '100%', padding: '1em', fontSize: '1em' }}
      />
    </div>

    <div style={sectionStyle}>
      <h2>Recommended Articles</h2>
      <ul>
        <li>Understanding Breast Cancer – 5-Year Survival Insights</li>
        <li>How to Navigate Oncology Care in China</li>
      </ul>
    </div>
  </div>

  {/* Right column: AI Triage */}
  <div style={sectionStyle}>
    <h2>AI Symptom Triage</h2>
    <button style={buttonStyle}>Start AI Assessment</button>
  </div>
</div>

        <section style={adBoxStyle}>
          <h3>Sponsored Insurance Plans</h3>
          <p>Explore coverage options from our trusted partners.</p>
        </section>
    </div>
  );
}

const sectionStyle = {
  marginTop: '2em',
  background: 'white',
  padding: '1.5em',
  borderRadius: '8px',
  boxShadow: '0 0 5px rgba(0,0,0,0.1)',
};

const adBoxStyle = {
  background: '#fffbe6',
  padding: '1em',
  border: '1px dashed #ff9900',
  marginTop: '2em',
  borderRadius: '8px',
};

const buttonStyle = {
  background: '#007acc',
  color: 'white',
  padding: '0.8em 1.2em',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default App;
