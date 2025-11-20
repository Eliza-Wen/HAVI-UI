// Firebase provider stub.
// To enable: `npm install firebase` and implement initialization using your Firebase config.
// This file intentionally throws errors to remind you to configure Firebase when switching.

export function _notConfigured() {
  throw new Error('Firebase provider not configured. Run `npm install firebase` and implement src/auth/providers/firebase.js with your Firebase config.');
}

export const signIn = async () => _notConfigured();
export const signUp = async () => _notConfigured();
export const signOut = async () => _notConfigured();
export const onAuthStateChanged = () => {
  _notConfigured();
  return () => {};
};

export default {
  signIn,
  signUp,
  signOut,
  onAuthStateChanged,
};
