// Mock auth provider for prototyping.
// Exposes signIn, signOut, signUp, and onAuthStateChanged to match real providers.

const STORAGE_KEY = 'havi_user';

function notify(callback) {
  const raw = localStorage.getItem(STORAGE_KEY);
  const user = raw ? JSON.parse(raw) : null;
  if (typeof callback === 'function') callback(user);
}

export async function signIn({ email }) {
  // In a real provider you'd verify credentials. For mock, accept any email.
  const mockUser = { id: 'u_mock', email };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(mockUser));
  return mockUser;
}

export async function signUp({ email }) {
  const mockUser = { id: 'u_mock', email };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(mockUser));
  return mockUser;
}

export function signOut() {
  localStorage.removeItem(STORAGE_KEY);
}

export function onAuthStateChanged(callback) {
  // Call immediately with current user and return an unsubscribe fn
  notify(callback);
  const handler = () => notify(callback);
  window.addEventListener('storage', handler);
  return () => window.removeEventListener('storage', handler);
}

export default {
  signIn,
  signUp,
  signOut,
  onAuthStateChanged,
};
