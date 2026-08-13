import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="font-rajdhani text-2xl font-bold tracking-widest text-white">
          FILTHY<span className="text-green-500">STORE</span>
        </Link>
        
        {/* Desktop Links & CTA */}
        <div className="flex items-center gap-6">
          <Link href="/" className="hidden text-sm font-medium text-gray-400 transition-colors hover:text-white sm:block">
            Inventory
          </Link>
          <Link href="#" className="hidden text-sm font-medium text-gray-400 transition-colors hover:text-white sm:block">
            FAQ
          </Link>
          <button className="rounded-lg bg-green-500/10 px-4 py-2 font-mono text-sm font-medium text-green-400 transition-colors hover:bg-green-500 hover:text-black">
            Contact Agent
          </button>
        </div>
        
      </div>
    </nav>
  );
}