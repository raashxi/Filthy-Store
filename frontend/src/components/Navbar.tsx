import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-cyan-500/20 bg-[#050505]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        {/* Left: Mobile Header Logo Stack */}
        <Link href="/" className="flex flex-col justify-center">
          <span className="font-rajdhani text-2xl font-bold leading-none tracking-widest text-white">
            FILTHY
          </span>
          <div className="flex items-center gap-1">
            <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-cyan-400">
              STORE
            </span>
            <div className="h-[2px] w-4 bg-cyan-400"></div>
          </div>
        </Link>
        
        {/* Right: Icon Group */}
        <div className="flex items-center gap-5">
          {/* Search Icon */}
          <button aria-label="Search" className="text-white transition-colors hover:text-cyan-400">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Cart Icon with Blue Badge */}
          <button aria-label="Cart" className="relative text-white transition-colors hover:text-cyan-400">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500 font-mono text-[9px] font-bold text-black">
              3
            </span>
          </button>

          {/* Premium Hamburger Menu */}
          <button aria-label="Menu" className="text-white transition-colors hover:text-cyan-400">
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
      </div>
    </nav>
  );
}