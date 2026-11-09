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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      {/* Background Gradient Blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="px-8 py-6 flex justify-between items-center max-w-7xl mx-auto w-full z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/30">
            R
          </div>
          <span className="font-bold text-xl tracking-tight">RitualPlanner</span>
        </div>
        <div className="px-3 py-1 bg-slate-900/80 border border-slate-800 rounded-full text-xs text-slate-400">
          v1.0 Legacy Deprecated
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 text-center z-10 flex flex-col items-center">
        {/* Badge */}
        <div className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8">
          RitualPlanner 2.0 is on the horizon
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent mb-6 leading-tight">
          Master your routines. <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Reimagined for v2.0
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          We're rebuilding RitualPlanner from the ground up to give you a faster, smarter calendar experience with intelligent routine building and seamless workflow integrations.
        </p>

        {/* Waitlist Form */}
        <div className="w-full max-w-md mb-12">
          {submitted ? (
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 font-medium">
              You're on the early access list!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition-all shadow-lg shadow-indigo-600/25 active:scale-95"
              >
                Notify Me
              </button>
            </form>
          )}
          <p className="text-xs text-slate-500 mt-3">
            Get notified the moment v2.0 goes live. No spam ever.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-left">
          <div className="p-5 bg-slate-900/50 border border-slate-800/80 rounded-2xl backdrop-blur-sm">
            <h3 className="font-semibold text-slate-200 mb-1">Blazing Fast</h3>
            <p className="text-sm text-slate-400">Completely overhauled architecture powered by modern web standards.</p>
          </div>
          <div className="p-5 bg-slate-900/50 border border-slate-800/80 rounded-2xl backdrop-blur-sm">
            <h3 className="font-semibold text-slate-200 mb-1">Smart Routines</h3>
            <p className="text-sm text-slate-400">Enhanced calendar integration and automated task recurring schedules.</p>
          </div>
          <div className="p-5 bg-slate-900/50 border border-slate-800/80 rounded-2xl backdrop-blur-sm">
            <h3 className="font-semibold text-slate-200 mb-1">Re-designed UI</h3>
            <p className="text-sm text-slate-400">Clean, distraction-free interface focused on execution and clarity.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-8 py-6 text-center text-xs text-slate-500 border-t border-slate-900 z-10">
        <p>© {new Date().getFullYear()} RitualPlanner. All rights reserved.</p>
      </footer>
    </div>
  );
}
