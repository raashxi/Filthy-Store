import { client } from "../lib/sanity";

// Define the shape of our new expanded data
interface AccountProps {
  _id: string;
  title: string;
  sku: string;
  uid: string;
  price: number;
  game: string;
  description: string;
  mainImageUrl: string;
}

export default async function Home() {
  // GROQ query fetching the new fields and resolving the image URL
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
    <main className="flex min-h-screen flex-col items-center p-6 pt-20">
      <h1 className="text-2xl font-bold uppercase tracking-widest text-white/90 mb-12">
        Database Link Established
      </h1>
      
      {/* Mobile-First Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {accounts.length > 0 ? (
          accounts.map((account) => (
            <div key={account._id} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-left backdrop-blur-md">
              {account.mainImageUrl && (
                <img 
                  src={account.mainImageUrl} 
                  alt={account.title} 
                  className="w-full h-48 object-cover rounded-xl mb-4 border border-white/5"
                />
              )}
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-lg font-bold text-white leading-tight">{account.title}</h2>
                <span className="bg-white/10 text-xs px-2 py-1 rounded text-gray-300 ml-2">{account.game}</span>
              </div>
              
              <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-3">
                <span className="text-xs text-gray-400 font-mono">SKU: {account.sku}</span>
                <span className="text-xs text-gray-400 font-mono">UID: {account.uid || 'N/A'}</span>
              </div>
              
              <p className="text-green-400 font-mono text-xl mb-3">${account.price}</p>
              
              {account.description && (
                <p className="text-sm text-gray-400 line-clamp-2">{account.description}</p>
              )}
            </div>
          ))
        ) : (
          <p className="text-red-400 col-span-full text-center">No accounts found. Go publish one in Sanity!</p>
        )}
      </div>
    </main>
  );
}