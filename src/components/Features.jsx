import React from 'react';
import { TrendingUp, Sliders, BarChart3, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: 'Optimized allocations',
    desc: 'Input your favorite NYSE or NASDAQ stocks and let FinTuner compute the weights that maximize risk-adjusted returns.'
  },
  {
    icon: Sliders,
    title: 'Risk controls',
    desc: 'Dial in constraints like max weight per stock, minimum diversification, or custom risk tolerance levels.'
  },
  {
    icon: BarChart3,
    title: 'Benchmarking',
    desc: 'Compare your tuned portfolio against S&P 500, Dow Jones, and Nasdaq 100 to see what truly performs.'
  },
  {
    icon: ShieldCheck,
    title: 'Transparent metrics',
    desc: 'Understand annualized return, volatility, and Sharpe Ratio with clean visuals and plain-language explanations.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(16,185,129,0.12),rgba(2,6,23,0))]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Why FinTuner</h2>
          <p className="mt-3 text-slate-300">
            Replace guesswork with a data-driven, easy-to-use optimizer built for everyday investors.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-emerald-400/40 hover:bg-white/10">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-400/15 ring-1 ring-emerald-400/40">
                  <Icon className="h-5 w-5 text-emerald-300" />
                </div>
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
