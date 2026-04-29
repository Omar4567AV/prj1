import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#667eea] to-[#764ba2] p-4 font-sans">
      <div className="w-full max-max-w-md animate-in fade-in slide-in-from-bottom-5 duration-700 rounded-3xl bg-white/95 p-10 shadow-2xl backdrop-blur-md">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Welcome Back</h2>
          <p className="mt-2 text-sm text-gray-500">Please enter your credentials to continue</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 ml-1">
              Email Address
            </label>
            <input 
              id="email"
              type="email" 
              placeholder="name@example.com" 
              required 
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition-all focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" id="passwordLabel" className="block text-sm font-semibold text-gray-700 ml-1">
              Password
            </label>
            <input 
              id="password"
              type="password" 
              placeholder="••••••••" 
              required 
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition-all focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
            />
          </div>

          <button 
            type="submit" 
            className="w-full transform rounded-xl bg-indigo-600 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 transition-all hover:-translate-y-0.5 hover:bg-indigo-700 active:translate-y-0"
          >
            Sign In
          </button>

          <p className="mt-8 text-center text-sm text-gray-500">
            Don't have an account? <a href="#" className="font-semibold text-indigo-600 hover:underline">Create one</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;