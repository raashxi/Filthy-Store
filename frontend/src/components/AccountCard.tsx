import React from 'react';
import Image from "next/image";
import Link from "next/link";

// We export the interface so it can be shared with page.tsx
export interface AccountProps {
  _id: string;
  title: string;
  slug: string;
  sku: string;
  uid: string;
  price: number;
  game: string;
  description: string;
  mainImageUrl: string;
}

export function AccountCard({ account }: { account: AccountProps }) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:border-green-500 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(34,197,94,0.35)]">
      
    {/* Image Container with Hover Scale */}
      <div className="relative mb-4 h-[200px] min-h-[200px] w-full shrink-0 overflow-hidden rounded-xl border border-white/5 bg-black/50">
        {account.mainImageUrl ? (
          <Image 
            src={account.mainImageUrl} 
            alt={account.title} 
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gray-500">
            No Image
          </div>
        )}
        
        {/* Game Badge */}
        <div className="absolute right-2 top-2 z-10 rounded bg-black/60 px-2 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-md">
          {account.game}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-grow">
        <h2 className="mb-2 text-xl font-bold leading-tight text-white transition-colors group-hover:text-green-400">
          {account.title}
        </h2>
        
        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs text-gray-400">
          <span>{account.sku}</span>
          <span>UID: {account.uid || 'HIDDEN'}</span>
        </div>
        
        {account.description && (
          <p className="mb-4 line-clamp-2 text-sm text-gray-400">
            {account.description}
          </p>
        )}
      </div>

      {/* Footer / Price Action */}
      <div className="mt-auto flex items-center justify-between pt-2">
        <span className="font-rajdhani text-2xl font-bold text-green-400">
          ${account.price}
        </span>
        <Link 
        href={`/account/${account.slug}`}
        className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-500 hover:text-black"
      >
        View Details
      </Link>
      </div>
    </div>
  );
}