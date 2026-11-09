import React, { useState, useEffect } from 'react';
import { 
  SparklesIcon, 
  CheckCircleIcon, 
  ArrowRightIcon, 
  ShieldCheckIcon, 
  UsersIcon, 
  DocumentTextIcon, 
  CalendarDaysIcon 
} from '@heroicons/react/24/outline';

export default function V2ComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Ensure body and root don't inherit default Vite margins/paddings or white background
  useEffect(() => {
    const originalBodyBg = document.body.style.backgroundColor;
    const originalBodyMargin = document.body.style.margin;
    const originalBodyPadding = document.body.style.padding;

    document.body.style.backgroundColor = '#0c0d12';
    document.body.style.margin = '0';
    document.body.style.padding = '0';

    const root = document.getElementById('root');
    const originalRootPadding = root?.style.padding;
    const originalRootMargin = root?.style.margin;
    const originalRootMaxWidth = root?.style.maxWidth;

    if (root) {
      root.style.padding = '0';
      root.style.margin = '0';
      root.style.maxWidth = '100%';
    }

    return () => {
      document.body.style.backgroundColor = originalBodyBg;
      document.body.style.margin = originalBodyMargin;
      document.body.style.padding = originalBodyPadding;
      if (root) {
        if (originalRootPadding !== undefined) root.style.padding = originalRootPadding;
        if (originalRootMargin !== undefined) root.style.margin = originalRootMargin;
        if (originalRootMaxWidth !== undefined) root.style.maxWidth = originalRootMaxWidth;
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const previewHighlights = [
    {
      icon: CalendarDaysIcon,
      title: "Smart Ritual Scheduling",
      desc: "Automated Muhurat & Tithi syncing directly aligned with Pandit workflows."
    },
    {
      icon: UsersIcon,
      title: "Client & Co-Priest Portals",
      desc: "Directory, family Gotra records, and smooth ritual delegation."
    },
    {
      icon: DocumentTextIcon,
      title: "Instant Invoicing & Dakshina",
      desc: "One-click digital receipts, PDF bills, and clear payment records."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0c0d12] text-slate-100 flex flex-col justify-between selection:bg-orange-500 selection:text-white relative overflow-x-hidden font-sans">
      {/* Fallback CSS Reset to eliminate any unwanted root/body border */}
      <style dangerouslySetInnerHTML={{ __html: `
        html, body, #root {
          margin: 0 !important;
          padding: 0 !important;
          background-color: #0c0d12 !important;
          width: 100% !important;
          max-width: 100% !important;
          overflow-x: hidden !important;
          min-height: 100% !important;
        }
      ` }} />

      {/* Background Radial Glow matching RitualPlanner v2 Theme */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% -10%, #ea580c 0%, transparent 45%), radial-gradient(circle at 90% 60%, #c2410c 0%, transparent 35%)'
        }}
      />
      
      {/* Micro-dot grid overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.16]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      {/* Top Header */}
      <header className="relative z-10 w-full border-b border-white/[0.08] bg-[#0c0d12]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex justify-between items-center">
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <img 
              src="https://res.cloudinary.com/db6qh4jsv/image/upload/v1783431291/favicon_uj392q.png" 
              alt="RitualPlanner Logo" 
              className="w-9 h-9 object-contain rounded-xl drop-shadow-[0_0_12px_rgba(249,115,22,0.35)]"
            />
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white">
              Ritual<span className="bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">Planner</span>
            </span>
          </div>

          {/* Version Indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-semibold shadow-[0_0_15px_rgba(249,115,22,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span>v2.0 Coming Soon</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex-1 max-w-5xl mx-auto px-5 sm:px-8 py-12 md:py-16 flex flex-col items-center justify-center text-center my-auto">
        {/* Top Feature Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 text-xs font-semibold tracking-wide uppercase mb-7 shadow-[0_0_20px_rgba(249,115,22,0.1)]">
          <SparklesIcon className="w-4 h-4 text-orange-400" />
          <span>Modern Solution for Spiritual Professionals</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 max-w-4xl">
          The Next Evolution for <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-orange-500 via-amber-400 to-orange-400 bg-clip-text text-transparent">
            Modern Pandits
          </span>{" "}
          & Temples
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed font-normal">
          We are rebuilding RitualPlanner from the ground up with high-speed calendars, complete client directories, automated receipts, and seamless co-priest task coordination.
        </p>

        {/* Waitlist Subscription Card */}
        <div className="w-full max-w-lg mb-12">
          <div className="p-2 sm:p-2.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl shadow-2xl shadow-orange-950/20">
            {submitted ? (
              <div className="py-5 px-6 rounded-xl bg-orange-500/10 border border-orange-500/30 text-left flex items-start gap-3.5">
                <div className="p-1.5 rounded-lg bg-orange-500/20 text-orange-400 shrink-0 mt-0.5">
                  <CheckCircleIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">You&apos;re on the early access list!</h4>
                  <p className="text-xs text-orange-200/80 mt-1 leading-relaxed">
                    We&apos;ll email you an exclusive invite the moment RitualPlanner v2.0 goes live.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:bg-white/[0.06] transition-all"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-orange-500/25 active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Notify Me</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          <p className="text-[11px] text-slate-500 mt-2.5 flex items-center justify-center gap-1.5">
            <ShieldCheckIcon className="w-3.5 h-3.5 text-orange-400/80" />
            <span>Zero spam. Only launch updates and exclusive priority access.</span>
          </p>
        </div>

        {/* Feature Teasers Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full text-left">
          {previewHighlights.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-orange-500/30 hover:bg-white/[0.04] transition-all duration-300 group shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </main>

      {/* Centered Footer */}
      <footer className="relative z-10 w-full border-t border-white/[0.08] bg-[#0c0d12]/80 backdrop-blur-xl py-6">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-center text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} RitualPlanner. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
