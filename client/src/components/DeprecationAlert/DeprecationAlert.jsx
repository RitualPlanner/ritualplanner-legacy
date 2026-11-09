import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const DeprecationAlert = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCountdown((current) => {
        if (current <= 1) {
          window.clearInterval(intervalId);
          window.location.replace('https://ritualplanner.vercel.app/v2');
          return 1;
        }

        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-zinc-950/75 p-3 backdrop-blur-sm sm:p-6">
      <section
        aria-describedby="deprecation-description"
        aria-labelledby="deprecation-title"
        aria-modal="true"
        className="my-auto max-h-[calc(100dvh-1.5rem)] w-full max-w-xl overflow-y-auto overscroll-contain rounded-lg border border-zinc-200 bg-white font-medium text-zinc-900 shadow-2xl sm:max-h-[calc(100dvh-3rem)]"
        role="dialog"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        <div className="border-b border-zinc-200 bg-white px-4 py-4 sm:px-7 sm:py-5">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-red-600">End of life · V1.0.0</p>
          <h2 id="deprecation-title" className="text-xl font-bold text-zinc-950 sm:text-2xl">
            📢 Official Announcement: Version Deprecation ⚠️
          </h2>
          <p className="mt-2 text-sm font-semibold text-red-600">
            This release is deprecated, unsupported, and not safe for production use.
          </p>
        </div>

        <div className="space-y-5 px-4 py-4 text-sm leading-6 text-zinc-700 sm:px-7 sm:py-5">
          <p id="deprecation-description">
            RitualPlanner V1 reached end of support on October 29, 2025. It has known security vulnerabilities,
            and no further security updates or fixes will be released.
          </p>

          <div className="border-l-4 border-red-500 bg-red-50 px-4 py-3 text-red-950">
            <p className="font-semibold">Continued use is at your own risk.</p>
            <p className="mt-1">
              The deprecated release may expose you to security breaches, data loss, and reliability or performance
              issues. Please stop using Version 1 immediately. Version 2.0.0 is currently under development.
            </p>
          </div>

          <div className="flex flex-col gap-3 border-t border-zinc-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-zinc-950">RitualPlanner 2.0.0 is under development</p>
              <p className="text-zinc-600">Visit the Version 2 site for updates.</p>
            </div>
            <a
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-orange-500 px-5 py-2 font-semibold text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              href="https://ritualplanner.vercel.app/v2"
            >
              Visit Version 2
            </a>
          </div>
        </div>

        <div className="border-t border-zinc-200 bg-zinc-50 px-4 py-4 text-center sm:px-7 sm:py-5" aria-live="polite">
          <p className="text-sm font-semibold text-zinc-900">
            Redirecting to Version 2 in <span className="text-orange-600">{countdown}</span> seconds...
          </p>
        </div>
      </section>
    </div>,
    document.body,
  );
};

export default DeprecationAlert;