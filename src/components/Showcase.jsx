import React from 'react';
import { Gauge, TrendingUp, Percent } from 'lucide-react';

const MetricCard = ({ label, value, sub }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur">
    <div className="text-xs uppercase tracking-wide text-slate-300">{label}</div>
    <div className="mt-2 text-2xl font-semibold">{value}</div>
    {sub && <div className="mt-1 text-sm text-slate-400">{sub}</div>}
  </div>
);

const SimpleChart = () => {
  // Pure CSS sparkline-esque bars for visual interest (no external libs)
  const data = [65, 72, 70, 80, 76, 86, 90, 96, 102, 108, 120, 132];
  const bench = [65, 68, 66, 70, 72, 78, 82, 86, 90, 95, 100, 106];
  return (
    <div className="relative h-40 w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0,transparent_95%,rgba(255,255,255,0.05)_95%)] bg-[length:24px_100%]" />
      <div className="relative flex h-full items-end gap-2">
        {data.map((v, i) => (
          <div key={`opt-${i}`} className="flex-1">
            <div className="mx-auto w-2 rounded-t bg-emerald-400" style={{ height: `${(v / 140) * 100}%` }} />
          </div>
        ))}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end gap-2 opacity-60">
          {bench.map((v, i) => (
            <div key={`bench-${i}`} className="flex-1">
              <div className="mx-auto w-2 rounded-t bg-white/60" style={{ height: `${(v / 140) * 100}%` }} />
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-2 left-3 flex items-center gap-2 text-xs text-white/80">
        <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Optimized</span>
        <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-white/60" /> S&P 500</span>
      </div>
    </div>
  );
};

const Showcase = () => {
  return (
    <section id="showcase" className="w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Optimization snapshot</h2>
          <p className="mt-3 text-slate-300">A glimpse of the metrics FinTuner highlights after tuning your portfolio.</p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <SimpleChart />
            <div className="grid gap-4 sm:grid-cols-3">
              <MetricCard label="Annualized Return" value="15.8%" sub="vs. S&P 500: 10.4%" />
              <MetricCard label="Annualized Risk" value="11.2%" sub="vs. S&P 500: 13.6%" />
              <MetricCard label="Sharpe Ratio" value="1.26" sub="vs. S&P 500: 0.76" />
            </div>
          </div>
          <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-emerald-400/15 p-2 ring-1 ring-emerald-400/40">
                <Gauge className="h-5 w-5 text-emerald-300" />
              </div>
              <div>
                <h3 className="font-semibold">What you get</h3>
                <p className="text-sm text-slate-300">Clear allocations, guardrails, and a head-to-head benchmark comparison.</p>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-emerald-300" /> Expected performance vs. indices</li>
              <li className="flex items-center gap-2"><Percent className="h-4 w-4 text-emerald-300" /> Weights that respect your constraints</li>
              <li className="flex items-center gap-2"><Gauge className="h-4 w-4 text-emerald-300" /> Risk and Sharpe explained in plain English</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
