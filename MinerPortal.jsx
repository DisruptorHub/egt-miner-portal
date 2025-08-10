import React, { useState } from 'react';

// --- Helper Components ---

// Icon component for input fields
const InputIcon = ({ children }) => (
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    {children}
  </div>
);

// --- Main App Component ---

export default function App() {
  const [isLoginView, setIsLoginView] = useState(true);

  // A simple component for the header
  const AuthHeader = () => (
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tight text-white">
        {isLoginView ? 'Sign in to your account' : 'Create a new account'}
      </h2>
      <p className="mt-2 text-sm text-gray-400">
        {isLoginView ? 'Or ' : ''}
        <button
          onClick={() => setIsLoginView(!isLoginView)}
          className="font-medium text-blue-400 hover:text-blue-300"
        >
          {isLoginView ? 'create an account' : 'sign in to your existing account'}
        </button>
      </p>
    </div>
  );

  // A component for the form fields
  const AuthForm = () => {
    // In a real application, this would be handled with a form library and state management
    const handleSubmit = (e) => {
      e.preventDefault();
      // Placeholder for actual login/signup logic with Auth0
      alert('This feature is for demonstration purposes. Full functionality is coming soon!');
    };

    return (
      <form className="space-y-6" onSubmit={handleSubmit}>
        {!isLoginView && (
           <div>
             <label htmlFor="name" className="block text-sm font-medium text-gray-300">
               Full Name or Organization
             </label>
             <div className="mt-1 relative">
                <InputIcon>
                    <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                </InputIcon>
               <input
                 id="name"
                 name="name"
                 type="text"
                 required
                 className="appearance-none block w-full px-3 pl-10 py-2 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-900 text-white"
                 placeholder="Artisanal Miners Co-op"
               />
             </div>
           </div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email address
          </label>
          <div className="mt-1 relative">
            <InputIcon>
                <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>
            </InputIcon>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none block w-full px-3 pl-10 py-2 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-900 text-white"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300">
            Password
          </label>
          <div className="mt-1 relative">
             <InputIcon>
                <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
            </InputIcon>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none block w-full px-3 pl-10 py-2 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-900 text-white"
              placeholder="••••••••"
            />
          </div>
        </div>
        
        {isLoginView && (
            <div className="flex items-center justify-end">
                <div className="text-sm">
                    <a href="#" className="font-medium text-blue-400 hover:text-blue-300">
                        Forgot your password?
                    </a>
                </div>
            </div>
        )}

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {isLoginView ? 'Sign in' : 'Create Account'}
          </button>
        </div>
      </form>
    );
  };
  
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
       <div className="sm:mx-auto sm:w-full sm:max-w-md">
         <h1 className="text-center text-4xl font-extrabold text-white">EthicalGold</h1>
         <p className="mt-2 text-center text-md text-gray-400">Miner & Partner Portal</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-800 py-8 px-4 shadow-xl rounded-lg sm:px-10 border border-gray-700">
            <AuthHeader />
            <div className="mt-6">
                <AuthForm />
            </div>
        </div>
      </div>
    </div>
  );
}

