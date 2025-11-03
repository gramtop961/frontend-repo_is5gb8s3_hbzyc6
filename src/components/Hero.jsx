import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, LineChart, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] w-full max-w-7xl flex-col px-6 py-8">
        {/* Top nav */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-400/20 ring-1 ring-emerald-400/40">
              <LineChart className="h-6 w-6 text-emerald-300" />
            </div>
            <span className="text-lg font-semibold tracking-tight">FinTuner</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#showcase" className="hover:text-white">Showcase</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="rounded-md px-4 py-2 text-sm text-slate-200 hover:text-white">Sign in</button>
            <button className="group inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-emerald-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400">
              <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Get started
            </button>
          </div>
        </header>

        {/* Hero content */}
        <div className="flex flex-1 items-center">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/10 backdrop-blur">
              <Shield className="h-3.5 w-3.5 text-emerald-300" />
              Designed for everyday investors
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Tune your portfolio. Invest with confidence.
            </h1>
            <p className="text-base leading-relaxed text-slate-200/90 sm:text-lg">
              FinTuner helps you decide how much to invest in each stock you love. Optimize allocations, understand risk & returns, and benchmark against the S&P 500 and more.
            </p>
            <div className="flex flex-col items-start gap-3 sm:flex-row">
              <a href="#showcase" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-lg shadow-white/10 transition hover:bg-slate-100">
                See a sample optimization
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-white/15">
                Explore features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
