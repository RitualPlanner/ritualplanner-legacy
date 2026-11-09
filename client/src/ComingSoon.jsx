import React, { useState } from 'react';

export default function V2ComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col justify-between p-6 md:p-12">
      {/* Simple Header */}
      <header className="max-w-2xl mx-auto w-full flex justify-between items-center">
        <span className="font-semibold text-lg tracking-tight">RitualPlanner</span>
        <span className="text-xs text-gray-500">v2.0 Coming Soon</span>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto w-full text-center my-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Version 2 is on the way.
          </h1>
          <p className="text-sm text-gray-400">
            We are working on something new. Drop your email below to get notified when we launch.
          </p>
        </div>

        {submitted ? (
          <div className="p-3 bg-gray-900 border border-gray-800 rounded-lg text-sm text-gray-300">
            Thanks! We'll notify you when it's ready.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-900 border border-gray-800 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-600"
            />
            <button
              type="submit"
              className="w-full py-2.5 bg-white text-gray-950 font-medium text-sm rounded-lg hover:bg-gray-200 transition-colors"
            >
              Notify Me
            </button>
          </form>
        )}
      </main>

      {/* Simple Footer */}
      <footer className="max-w-2xl mx-auto w-full text-center text-xs text-gray-600">
        © {new Date().getFullYear()} RitualPlanner
      </footer>
    </div>
  );
}
