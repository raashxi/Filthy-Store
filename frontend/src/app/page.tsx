import Link from "next/link";
import { FadeIn } from "../components/FadeIn";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden bg-[#050505] font-body">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-30">
        {/* <Image src="/shattered-bg.png" alt="background" fill className="object-cover" /> */}
      </div>
      <div className="absolute left-1/2 top-0 z-0 h-full w-[2px] -translate-x-1/2 bg-cyan-400 shadow-[0_0_30px_5px_rgba(6,182,212,0.4)]"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050505]/50 via-transparent to-[#050505]"></div>

      {/* MAIN CONTENT CONTAINER (Generous top padding for mobile header) */}
      <div className="relative z-10 mt-32 flex w-full max-w-md flex-col items-center px-6 text-center md:max-w-7xl">
        
        {/* HERO SECTION */}
        <FadeIn delay={0.1}>
          <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-500 md:text-sm">
            PREMIUM ACCOUNTS, UNMATCHED EXPERIENCE
          </h3>
          
          <h1 className="mt-6 font-rajdhani text-6xl font-extrabold uppercase leading-[0.85] tracking-widest md:text-8xl">
            <span className="bg-gradient-to-b from-white via-gray-300 to-gray-600 bg-clip-text text-transparent drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              CHOOSE YOUR<br className="md:hidden" /> GAME
            </span>
          </h1>
          
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.4em] text-gray-400 md:text-sm">
            UNLOCK . PLAY . DOMINATE .
          </p>

          <div className="mt-12 flex justify-center text-cyan-500/50 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">
            <svg className="h-6 w-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </FadeIn>

        {/* GAME PORTAL CARDS (Vertical Stack) */}
        <div className="mt-16 grid w-full grid-cols-1 gap-12 md:grid-cols-3">
          
          {/* Card 1: PUBG MOBILE */}
          <FadeIn delay={0.3}>
            <Link href="/pubg" className="group relative flex h-[550px] w-full flex-col items-center justify-end overflow-hidden rounded-xl border border-gray-600 bg-black/40 p-6 shadow-[inset_0_0_20px_rgba(6,182,212,0.1)] backdrop-blur-md transition-all duration-500 hover:shadow-[inset_0_0_40px_rgba(6,182,212,0.4),0_0_30px_rgba(6,182,212,0.3)]">
              {/* Sci-Fi Brackets */}
              <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-cyan-500/50"></div>
              <div className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-cyan-500/50"></div>
              
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute left-6 top-6 z-10 text-[10px] font-bold tracking-[0.2em] text-cyan-400">BATTLE ROYALE</div>
              
              <div className="relative z-10 flex w-full flex-col items-center">
                <h2 className="font-rajdhani text-4xl font-bold text-white drop-shadow-lg">PUBG MOBILE</h2>
                <p className="mb-6 mt-1 font-mono text-[10px] tracking-[0.2em] text-gray-400">Premium Accounts</p>
                <div className="flex w-full items-center justify-between rounded border border-cyan-500/40 bg-[#050505] px-6 py-4 font-mono text-xs font-bold tracking-widest text-white transition-colors group-hover:bg-cyan-500 group-hover:text-black">
                  <span>EXPLORE NOW</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          </FadeIn>

          {/* Card 2: eFOOTBALL */}
          <FadeIn delay={0.4}>
            <div className="group relative flex h-[550px] w-full flex-col items-center justify-end overflow-hidden rounded-xl border border-gray-700 bg-black/40 p-6 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-md">
              <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-white/20"></div>
              <div className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-white/20"></div>
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              <div className="absolute left-6 top-6 z-10 text-[10px] font-bold tracking-[0.2em] text-blue-400">SOCCER</div>
              
              <div className="relative z-10 flex w-full flex-col items-center">
                <h2 className="font-rajdhani text-4xl font-bold text-white drop-shadow-lg">eFOOTBALL</h2>
                <p className="mb-6 mt-1 font-mono text-[10px] tracking-[0.2em] text-gray-400">Premium Accounts</p>
                <div className="flex w-full cursor-not-allowed items-center justify-between rounded border border-white/10 bg-[#050505] px-6 py-4 font-mono text-xs font-bold tracking-widest text-gray-500">
                  <span>DEPLOYING SOON</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Card 3: FREE FIRE */}
          <FadeIn delay={0.5}>
            <div className="group relative flex h-[550px] w-full flex-col items-center justify-end overflow-hidden rounded-xl border border-gray-700 bg-black/40 p-6 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-md">
              <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-white/20"></div>
              <div className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-white/20"></div>
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              <div className="absolute left-6 top-6 z-10 text-[10px] font-bold tracking-[0.2em] text-cyan-400">BATTLE ROYALE</div>
              
              <div className="relative z-10 flex w-full flex-col items-center">
                <h2 className="font-rajdhani text-4xl font-bold text-white drop-shadow-lg">FREE FIRE</h2>
                <p className="mb-6 mt-1 font-mono text-[10px] tracking-[0.2em] text-gray-400">Premium Accounts</p>
                <div className="flex w-full cursor-not-allowed items-center justify-between rounded border border-white/10 bg-[#050505] px-6 py-4 font-mono text-xs font-bold tracking-widest text-gray-500">
                  <span>DEPLOYING SOON</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* FEATURE GRID (Mobile 2-Column) */}
        <FadeIn delay={0.6} direction="up" className="w-full">
          <div className="mt-20 grid w-full grid-cols-2 gap-y-8 gap-x-4 border-y border-white/10 py-10 px-2 text-left md:grid-cols-5 md:px-6">
            <div className="flex flex-col items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/30 text-cyan-400">🛡️</div>
              <div><p className="text-xs font-bold text-white">100% SECURE</p><p className="mt-1 text-[10px] text-gray-500">Safe & Protected</p></div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/30 text-cyan-400">⚡</div>
              <div><p className="text-xs font-bold text-white">INSTANT DELIVERY</p><p className="mt-1 text-[10px] text-gray-500">Lightning Fast</p></div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/30 text-cyan-400">💎</div>
              <div><p className="text-xs font-bold text-white">BEST PRICES</p><p className="mt-1 text-[10px] text-gray-500">Market Leaders</p></div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/30 text-cyan-400">🎧</div>
              <div><p className="text-xs font-bold text-white">24/7 SUPPORT</p><p className="mt-1 text-[10px] text-gray-500">We're Here</p></div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/30 text-cyan-400">✓</div>
              <div><p className="text-xs font-bold text-white">VERIFIED SELLERS</p><p className="mt-1 text-[10px] text-gray-500">Trusted Accounts</p></div>
            </div>
          </div>
        </FadeIn>

        {/* TRUST STATS SECTION (Mobile 2x2 Grid) */}
        <FadeIn delay={0.7} direction="up" className="w-full">
          <div className="mt-16 flex w-full flex-col items-center px-4 pb-24">
            
            <div className="grid w-full grid-cols-2 gap-y-12 gap-x-8 text-center md:flex md:justify-between">
              <div>
                <p className="font-rajdhani text-4xl font-bold text-white">50K+</p>
                <p className="mt-2 font-mono text-[9px] tracking-[0.2em] text-gray-500">HAPPY CUSTOMERS</p>
              </div>
              <div>
                <p className="font-rajdhani text-4xl font-bold text-white">100K+</p>
                <p className="mt-2 font-mono text-[9px] tracking-[0.2em] text-gray-500">ACCOUNTS SOLD</p>
              </div>
              <div>
                <p className="font-rajdhani text-4xl font-bold text-white">99.9%</p>
                <p className="mt-2 font-mono text-[9px] tracking-[0.2em] text-gray-500">SUCCESS RATE</p>
              </div>
              <div>
                <p className="font-rajdhani text-4xl font-bold text-white">24/7</p>
                <p className="mt-2 font-mono text-[9px] tracking-[0.2em] text-gray-500">SUPPORT</p>
              </div>
            </div>

            {/* Centered Divider Block */}
            <div className="mt-16 flex w-full max-w-[200px] flex-col items-center">
              <p className="font-mono text-[9px] tracking-[0.2em] text-gray-500">TRUSTED BY GAMERS</p>
              <p className="mt-1 font-rajdhani text-xl font-bold tracking-[0.3em] text-cyan-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">WORLDWIDE</p>
              <div className="mt-4 flex gap-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-[2px] w-4 bg-cyan-500/50"></div>
                ))}
              </div>
            </div>

          </div>
        </FadeIn>

      </div>
    </main>
  );
}