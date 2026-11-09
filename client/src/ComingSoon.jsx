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
    <div className="min-h-screen bg-white text-gray-900 flex flex-col justify-between selection:bg-orange-500 selection:text-white">
      {/* Header */}
      <header className="px-8 py-6 flex justify-between items-center max-w-7xl mx-auto w-full border-b border-gray-100">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white shadow-md shadow-orange-500/20">
            📅
          </div>
          <span>RitualPlanner</span>
        </div>
        <div className="px-3 py-1 bg-orange-50 border border-orange-200 rounded-full text-xs font-medium text-orange-700">
          v2.0 Coming Soon
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-16 text-center z-10 flex flex-col items-center my-auto">
        {/* Top Badge */}
        <div className="inline-block px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-700 text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
          Modern Solution for Spiritual Professionals
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
          The Next Evolution for <br />
          <span className="text-orange-600">Modern Pandits</span> & Temples
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-600 max-w-xl mb-10 leading-relaxed">
          We are rebuilding RitualPlanner from the ground up to bring you faster Karmakand workflows, automated scheduling, and advanced client management.
        </p>

        {/* Waitlist Box */}
        <div className="w-full max-w-md mb-16">
          {submitted ? (
            <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl text-orange-800 font-medium text-sm shadow-sm">
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
          <p className="text-xs text-gray-400 mt-3">
            Get early access the moment v2.0 goes live. No spam ever.
          </p>
        </div>

        {/* Mini Feature Highlights Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-left">
          <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-orange-200 transition-all">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Lightning Fast</h3>
            <p className="text-xs text-gray-500">Overhauled architecture built for instant responsiveness.</p>
          </div>
          <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-orange-200 transition-all">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Smart Calendars</h3>
            <p className="text-xs text-gray-500">Advanced ritual timing, tithis, and automated scheduling.</p>
          </div>
          <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-orange-200 transition-all">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Secure Records</h3>
            <p className="text-xs text-gray-500">Enhanced data safety tailored for temple operations.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-8 py-6 text-center text-xs text-gray-400 border-t border-gray-100">
        <p>© {new Date().getFullYear()} RitualPlanner. Powering scheduling & operations for prominent institutions.</p>
      </footer>
    </div>
  );
}
