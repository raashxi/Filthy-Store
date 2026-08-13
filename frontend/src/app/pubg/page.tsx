import { client } from "../../lib/sanity";
import { AccountCard, AccountProps } from "../../components/AccountCard";

export default async function PubgStore() {
  // Fetch ONLY PUBG accounts from Sanity
  const query = `*[_type == "account" && game == "PUBG"] {
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

  const accounts: AccountProps[] = await client.fetch(query);

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#050505] p-6 pt-24 selection:bg-green-500/30">
      
      {/* PUBG Header Section */}
      <div className="mb-16 w-full max-w-6xl text-center md:text-left">
        <div className="mb-4 inline-block rounded bg-green-500/10 px-3 py-1 text-xs font-semibold tracking-widest text-green-400 border border-green-500/20">
          DIVISION: ALPHA
        </div>
        <h1 className="font-rajdhani text-4xl font-bold uppercase tracking-widest text-white md:text-6xl">
          PUBG <span className="text-green-500">MOBILE</span>
        </h1>
        <p className="mt-4 max-w-xl font-body text-gray-400 md:text-lg">
          Verified high-tier accounts. M416 Glaciers, X-Suits, and Mythic Fashion.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {accounts.length > 0 ? (
          accounts.map((account) => (
            <AccountCard key={account._id} account={account} />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/5 p-12 text-center backdrop-blur-md">
            <h3 className="font-rajdhani text-2xl font-bold text-white/50">INVENTORY EMPTY</h3>
            <p className="mt-2 text-gray-500">No PUBG accounts currently in stock.</p>
          </div>
        )}
      </div>
      
    </main>
  );
}