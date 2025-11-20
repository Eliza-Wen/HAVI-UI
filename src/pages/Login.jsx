import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const auth = useAuth();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await auth.signIn({ email, password });
      navigate('/', { replace: true });
    } catch (err) {
      setError('Sign in failed');
    }
  };

  return (
    <main style={{ maxWidth: 480, margin: '3rem auto', padding: '1rem' }}>
      <h2>Sign in to HAVI</h2>
      <form onSubmit={submit}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          Email
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          Password
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
          />
        </label>

        {error && <div style={{ color: 'crimson' }}>{error}</div>}

        <button type="submit" style={{ marginTop: '1rem', padding: '0.6rem 1rem' }}>Sign in</button>
      </form>
    </main>
  );
}
