import * as mock from './mock';
import * as firebase from './firebase';

const PROVIDERS = {
  mock,
  firebase,
};

const selected = (import.meta.env.VITE_AUTH_PROVIDER || 'mock').toString();

if (!PROVIDERS[selected]) {
  console.warn(`Unknown auth provider "${selected}", falling back to mock.`);
}

const provider = PROVIDERS[selected] || mock;

export const signIn = provider.signIn;
export const signUp = provider.signUp;
export const signOut = provider.signOut;
export const onAuthStateChanged = provider.onAuthStateChanged;

export default provider;
