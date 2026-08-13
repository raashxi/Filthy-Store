import Link from "next/link";
import { CanvasBackground } from "../components/CanvasBackground";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-[#050505] p-6 selection:bg-green-500/30 overflow-hidden">
      
      {/* 3D Background - Now exclusive to the Home Hub */}
      <CanvasBackground />

      <div className="relative z-10 mt-20 flex w-full max-w-5xl flex-col items-center text-center">
        
        <h1 className="font-rajdhani text-5xl font-bold uppercase tracking-widest text-white md:text-7xl lg:text-8xl drop-shadow-2xl">
          Filthy <span className="text-green-500">Store</span>
        </h1>
        <p className="mt-6 max-w-2xl font-body text-gray-400 md:text-xl drop-shadow-md">
          The premier marketplace for top-tier digital assets. Select your division.
        </p>

        {/* Store Portals */}
        <div className="mt-16 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          
          {/* PUBG - Active */}
          <Link href="/pubg" className="group relative overflow-hidden rounded-2xl border border-green-500/50 bg-green-500/10 p-8 backdrop-blur-md transition-all hover:bg-green-500/20 hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] text-left">
            <div className="absolute right-4 top-4 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
            </div>
            <h2 className="mb-2 font-rajdhani text-3xl font-bold text-white">PUBG MOBILE</h2>
            <p className="font-mono text-sm text-gray-300">LIVE INVENTORY</p>
            <div className="mt-12 font-bold tracking-widest text-green-400 transition-transform group-hover:translate-x-2">ENTER STORE →</div>
          </Link>

          {/* PES - Coming Soon */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md opacity-70 text-left">
            <h2 className="mb-2 font-rajdhani text-3xl font-bold text-white">eFOOTBALL</h2>
            <p className="font-mono text-sm text-gray-500">STOCKPILING</p>
            <div className="mt-12 font-bold tracking-widest text-gray-500">DEPLOYING SOON</div>
          </div>

          {/* Free Fire - Coming Soon */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md opacity-70 text-left">
            <h2 className="mb-2 font-rajdhani text-3xl font-bold text-white">FREE FIRE</h2>
            <p className="font-mono text-sm text-gray-500">STOCKPILING</p>
            <div className="mt-12 font-bold tracking-widest text-gray-500">DEPLOYING SOON</div>
          </div>
        </div>

        {/* Sell to Us CTA */}
        <div className="mb-12 mt-24 w-full border-t border-white/10 pt-12">
          <div className="flex flex-col items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:flex-row text-left">
            <div className="mb-6 md:mb-0">
              <h3 className="mb-2 font-rajdhani text-2xl font-bold text-white">LOOKING TO SELL?</h3>
              <p className="max-w-md text-gray-400">
                We are currently acquiring high-end PUBG, PES, and Free Fire accounts. Get an instant quote from our procurement team.
              </p>
            </div>
            <a 
              href="https://wa.me/YOUR_PHONE_NUMBER?text=I'm interested in selling my premium game account. Can I get a quote?"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-xl bg-white px-8 py-4 font-bold text-black transition-all hover:scale-105 hover:bg-gray-200"
            >
              Contact Procurement
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}