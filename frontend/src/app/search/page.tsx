import { client } from "../../lib/sanity";
import { AccountCard, AccountProps } from "../../components/AccountCard";
import Link from "next/link";

// In Next.js 15+, searchParams must be awaited
export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const query = params.q || "";

  // Query Sanity. The * wildcard enables partial matching (e.g. typing "glac" finds "glacier")
  const searchQuery = `*[_type == "account" && (title match $search || sku match $search || game match $search)] {
    _id,
    title,
    "slug": slug.current,
    sku,
    uid,
    price,
    game,
    description,
    "mainImageUrl": mainImage.asset->url
  }`;

  const accounts: AccountProps[] = await client.fetch(searchQuery, { search: `*${query}*` });

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#050505] p-6 pt-32 selection:bg-green-500/30">
      <div className="w-full max-w-6xl">
        
        <Link href="/" className="mb-8 inline-flex items-center text-sm font-medium text-gray-400 transition-colors hover:text-green-400">
          ← Back to Hub
        </Link>
        
        <h1 className="mb-8 font-rajdhani text-3xl font-bold uppercase text-white">
          Search Results for: <span className="text-green-500">"{query}"</span>
        </h1>

        {/* Grid Layout */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {accounts.length > 0 ? (
            accounts.map((account) => (
              <AccountCard key={account._id} account={account} />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/5 p-12 text-center backdrop-blur-md">
              <h3 className="font-rajdhani text-2xl font-bold text-white/50">NO MATCHES FOUND</h3>
              <p className="mt-2 text-gray-500">Try searching for a different keyword, SKU, or game.</p>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}