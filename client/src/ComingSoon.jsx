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
    /* fixed: absolute layout escape to bypass any restrictions from parent index wrappers */
    <div className="fixed inset-0 w-screen h-screen bg-slate-950 text-slate-100 flex flex-col justify-between p-6 md:p-12 overflow-hidden select-none z-[9999]">
      
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-violet-500/10 blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="max-w-4xl mx-auto w-full flex justify-between items-center z-10">
        <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          RitualPlanner
        </span>
        <span className="text-xs px-2.5 py-1 font-medium bg-slate-900 border border-slate-800 text-slate-400 rounded-full tracking-wider shadow-sm">
          v2.0 Coming Soon
        </span>
      </header>

      {/* Main Content Area */}
      <main className="max-w-lg mx-auto w-full text-center flex flex-col justify-center items-center flex-grow py-6 z-10">
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Version 2 is <br className="sm:hidden" /> on the way.
          </h1>
          <p className="text-base text-slate-400 max-w-sm mx-auto leading-relaxed">
            We are polishing up something beautiful. Drop your email below to secure early access.
          </p>
        </div>

        <div className="w-full max-w-md">
          {submitted ? (
            <div className="p-4 bg-slate-900/60 backdrop-blur-md border border-emerald-500/30 rounded-xl text-sm text-emerald-400 font-medium transition-all shadow-lg shadow-emerald-950/20">
              ✨ Thanks! We'll notify you the exact moment we launch.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 w-full">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                /* fixed: text alignment forced left to avoid inherited text-center bugs */
                className="w-full px-4 py-3 bg-slate-900/80 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 text-left focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200"
              />
              <button
                type="submit"
                className="w-full py-3 bg-white text-slate-950 font-semibold text-sm rounded-xl hover:bg-slate-200 active:scale-[0.99] transition-all duration-200 shadow-md shadow-white/5"
              >
                Notify Me
              </button>
            </form>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto w-full text-center text-xs text-slate-600 tracking-wide z-10">
        © {new Date().getFullYear()} RitualPlanner · All rights reserved.
      </footer>
    </div>
  );
}
