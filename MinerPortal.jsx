import React, { useState } from 'react';

// --- Style Objects for Inline Styling ---
const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#111827', // bg-gray-900
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: '3rem',
    paddingBottom: '3rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  headerContainer: {
    margin: '0 auto',
    width: '100%',
    maxWidth: '28rem',
  },
  mainTitle: {
    textAlign: 'center',
    fontSize: '2.25rem',
    fontWeight: '800',
    color: 'white',
  },
  subtitle: {
    marginTop: '0.5rem',
    textAlign: 'center',
    fontSize: '1rem',
    color: '#9CA3AF', // text-gray-400
  },
  cardContainer: {
    marginTop: '2rem',
    margin: '0 auto',
    width: '100%',
    maxWidth: '28rem',
  },
  card: {
    backgroundColor: '#1F2937', // bg-gray-800
    padding: '2rem 2.5rem',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    borderRadius: '0.5rem',
    border: '1px solid #374151', // border-gray-700
  },
  authHeader: {
    textAlign: 'center',
  },
  authTitle: {
    fontSize: '1.875rem',
    fontWeight: '700',
    color: 'white',
  },
  authSubtitle: {
    marginTop: '0.5rem',
    fontSize: '0.875rem',
    color: '#9CA3AF', // text-gray-400
  },
  authLink: {
    fontWeight: '500',
    color: '#60A5FA', // text-blue-400
    cursor: 'pointer',
    background: 'none',
    border: 'none',
  },
  form: {
    marginTop: '1.5rem',
  },
  formField: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#D1D5DB', // text-gray-300
    marginBottom: '0.25rem'
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '0.5rem 0.75rem 0.5rem 2.5rem',
    border: '1px solid #374151', // border-gray-700
    borderRadius: '0.375rem',
    backgroundColor: '#111827', // bg-gray-900
    color: 'white',
  },
  icon: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    paddingLeft: '0.75rem',
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '0.5rem 1rem',
    border: '1px solid transparent',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: 'white',
    backgroundColor: '#2563EB', // bg-blue-600
    cursor: 'pointer',
  }
};


// --- Main App Component ---

export default function App() {
  const [isLoginView, setIsLoginView] = useState(true);

  const AuthHeader = () => (
    <div style={styles.authHeader}>
      <h2 style={styles.authTitle}>
        {isLoginView ? 'Sign in to your account' : 'Create a new account'}
      </h2>
      <p style={styles.authSubtitle}>
        {isLoginView ? 'Or ' : ''}
        <button
          onClick={() => setIsLoginView(!isLoginView)}
          style={styles.authLink}
        >
          {isLoginView ? 'create an account' : 'sign in to your existing account'}
        </button>
      </p>
    </div>
  );

  const AuthForm = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      alert('This feature is for demonstration purposes. Full functionality is coming soon!');
    };

    return (
      <form style={styles.form} onSubmit={handleSubmit}>
        {!isLoginView && (
           <div style={styles.formField}>
             <label htmlFor="name" style={styles.label}>
               Full Name or Organization
             </label>
             <div style={styles.inputContainer}>
                <div style={styles.icon}>
                    <svg style={{height: '1.25rem', width: '1.25rem', color: '#6B7280'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                </div>
               <input id="name" name="name" type="text" required style={styles.input} placeholder="Artisanal Miners Co-op" />
             </div>
           </div>
        )}

        <div style={styles.formField}>
          <label htmlFor="email" style={styles.label}>
            Email address
          </label>
          <div style={styles.inputContainer}>
            <div style={styles.icon}>
                <svg style={{height: '1.25rem', width: '1.25rem', color: '#6B7280'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>
            </div>
            <input id="email" name="email" type="email" required style={styles.input} placeholder="you@example.com" />
          </div>
        </div>

        <div style={styles.formField}>
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <div style={styles.inputContainer}>
             <div style={styles.icon}>
                <svg style={{height: '1.25rem', width: '1.25rem', color: '#6B7280'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
            </div>
            <input id="password" name="password" type="password" required style={styles.input} placeholder="••••••••" />
          </div>
        </div>
        
        {isLoginView && (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                <div style={{fontSize: '0.875rem'}}>
                    <a href="#" style={styles.authLink}>
                        Forgot your password?
                    </a>
                </div>
            </div>
        )}

        <div style={{marginTop: '1.5rem'}}>
          <button type="submit" style={styles.button}>
            {isLoginView ? 'Sign in' : 'Create Account'}
          </button>
        </div>
      </form>
    );
  };
  
  return (
    <div style={styles.container}>
       <div style={styles.headerContainer}>
         <h1 style={styles.mainTitle}>EthicalGold</h1>
         <p style={styles.subtitle}>Miner & Partner Portal</p>
      </div>

      <div style={styles.cardContainer}>
        <div style={styles.card}>
            <AuthHeader />
            <AuthForm />
        </div>
      </div>
    </div>
  );
}


