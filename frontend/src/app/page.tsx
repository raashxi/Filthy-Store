import { client } from "../lib/sanity";
import { AccountCard, AccountProps } from "../components/AccountCard";

export default async function Home() {
  // Fetch data from Sanity CMS
  const query = `*[_type == "account"] {
    _id,
    title,
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
      
      {/* Hero Header Section */}
      <div className="mb-16 w-full max-w-6xl text-center md:text-left">
        <h1 className="font-rajdhani text-4xl font-bold uppercase tracking-widest text-white md:text-6xl lg:text-7xl">
          Filthy <span className="text-green-500">Store</span>
        </h1>
        <p className="mt-4 max-w-xl font-body text-gray-400 md:text-lg">
          The most exclusive marketplace for premium game accounts. 
          Verified. Secure. Ready for deployment.
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
            <p className="mt-2 text-gray-500">Awaiting data sync from Sanity CMS...</p>
          </div>
        )}
      </div>
      
    </main>
  );
}