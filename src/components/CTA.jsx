import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="how" className="w-full bg-slate-950 pb-16 pt-10 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-8 backdrop-blur sm:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">From favorites to a tuned portfolio in minutes</h3>
            <ol className="mt-4 space-y-3 text-slate-200">
              <li><span className="font-medium text-white">1. Add stocks</span> — Search NYSE and NASDAQ tickers you like.</li>
              <li><span className="font-medium text-white">2. Set preferences</span> — Choose max weight, diversification and risk level.</li>
              <li><span className="font-medium text-white">3. Optimize</span> — Get allocations, metrics and benchmark comparison.</li>
            </ol>
          </div>
          <div className="flex items-end justify-start sm:justify-end">
            <a href="#" className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-lg shadow-white/20 transition hover:bg-slate-100">
              Start optimizing now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <footer className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} FinTuner. Invest thoughtfully.</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#showcase" className="hover:text-white">Showcase</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default CTA;
