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
    <div className="fixed inset-0 bg-white text-gray-900 flex flex-col justify-between selection:bg-orange-500 selection:text-white overflow-hidden m-0 p-0">
      {/* Header pinned directly to top */}
      <header className="px-8 py-3 flex justify-between items-center max-w-7xl mx-auto w-full border-b border-gray-100 shrink-0">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <img 
            src="https://res.cloudinary.com/db6qh4jsv/image/upload/v1783431291/favicon_uj392q.png" 
            alt="RitualPlanner Logo" 
            className="w-10 h-10 object-contain"
          />
          <span>RitualPlanner</span>
        </div>
        <div className="px-3 py-1 bg-orange-50 border border-orange-200 rounded-full text-xs font-medium text-orange-700">
          v2.0 Coming Soon
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center justify-center my-auto">
        {/* Top Badge */}
        <div className="inline-block px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-700 text-xs font-semibold tracking-wide uppercase mb-6">
          Modern Solution for Spiritual Professionals
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
          The Next Evolution for <br />
          <span className="text-orange-600">Modern Pandits</span> & Temples
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-600 max-w-xl mb-8 leading-relaxed">
          We are rebuilding RitualPlanner from the ground up. Drop your email below to get notified when v2.0 goes live.
        </p>

        {/* Waitlist Box */}
        <div className="w-full max-w-md">
          {submitted ? (
            <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl text-orange-800 font-medium text-sm">
              Thank you! You are on the early access list for v2.0.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:bg-white transition-all shadow-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium text-sm rounded-xl transition-all shadow-lg shadow-orange-600/25 active:scale-95"
              >
                Notify Me
              </button>
            </form>
          )}
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="px-8 py-4 text-center text-xs text-gray-400 border-t border-gray-100 shrink-0">
        <p>© {new Date().getFullYear()} RitualPlanner. All rights reserved.</p>
      </footer>
    </div>
  );
}
