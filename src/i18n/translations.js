const translations = {
  en: {
    brand: 'HAVI',
    nav: { home: 'Home', legal: 'Legal', signIn: 'Sign in', signOut: 'Sign out' },
    hero: { title: 'Trusted oncology information, made simple', sub: 'Personalized guidance, AI-assisted triage, and practical resources for patients and caregivers.', searchPlaceholder: 'Search conditions, symptoms, or treatments' },
    home: {
      heroTitle: 'Medical AI + Literature at your fingertips',
      heroSub: 'Search abstracts, summaries and curated oncology insights.'
    },
    search: { button: 'Search', placeholder: 'Search...' },
    recommended: { title: 'Recommended Articles', showMore: 'Show more' },
    articles: { title: 'Articles', loading: 'Loading…', fetchError: 'Failed to fetch articles.' },
    login: { title: 'Sign in to HAVI', email: 'Email', password: 'Password', submit: 'Sign in', forgotPassword: 'Forgot password?', createAccountPrompt: "Don't have an account?", createAccount: 'Create account', signIn: 'Sign In', signUp: 'Sign Up', remember: 'Remember me' },
    register: { title: 'Create account', fullName: 'Full name', passwordMismatch: 'Passwords do not match', submit: 'Register' },
    legal: { title: 'Legal & Compliance', intro: 'Terms of service, privacy policy, and disclaimers.' },
    oncology: { title: 'Oncology Related Articles', intro: 'Latest oncology research and curated summaries.' }
  },
  // small nav-related labels
  nav: { home: 'Home', legal: 'Legal', signIn: 'Sign in', signOut: 'Sign out', language: 'Language' },
  zh: {
    legal: { title: '法律與合規', intro: '服務條款、隱私政策與免責聲明。' },
    home: { heroTitle: '將醫學 AI 與文獻放在您指尖', heroSub: '檢索摘要、摘要與腫瘤學精選見解。' },
    login: { email: '電子郵件', password: '密碼', signIn: '登入', signUp: '註冊', remember: '記住我' },
    oncology: { title: '腫瘤學相關文章', intro: '最新腫瘤學研究與精選摘要。' }
  },
  'zh-CN': {},
  'zh-TW': {}
};

export default translations;
