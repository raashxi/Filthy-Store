import { client } from "../../../lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ImageGallery } from "../../../components/ImageGallery";


// Await the params for Next.js 15+ compatibility
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Fetch the single account that matches the slug
  const query = `*[_type == "account" && slug.current == $slug][0] {
    _id,
    title,
    sku,
    uid,
    price,
    game,
    description,
    "mainImageUrl": mainImage.asset->url,
    "galleryUrls": gallery[].asset->url,
    highlights,
    tags
  }`;

  const account = await client.fetch(query, { slug });

  // If no account is found, trigger a 404 page
  if (!account) {
    return notFound();
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center bg-[#050505] p-6 pt-32">
      
      {/* 3D Background */}

      {/* Content Container (z-10 keeps it above the 3D canvas) */}
      <div className="relative z-10 w-full max-w-6xl">
        
        {/* Back Button */}
        <Link href="/" className="mb-8 inline-flex items-center text-sm font-medium text-gray-400 transition-colors hover:text-green-400">
          ← Back to Catalog
        </Link>


        {/* Top Section: Image & Core Details */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          
          {/* Left: Main Image - PERFECT 16:9 ASPECT RATIO FIX */}
          <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-black/50 shadow-lg">
            {account.mainImageUrl && (
              <Image 
                src={account.mainImageUrl} 
                alt={account.title} 
                width={1920}
                height={1080}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            )}
          </div>

          {/* Right: Specs & CTA */}
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-block w-fit rounded bg-white/10 px-3 py-1 text-xs font-semibold tracking-widest text-white backdrop-blur-md">
              {account.game}
            </div>
            
            <h1 className="font-rajdhani text-4xl font-bold uppercase text-white md:text-5xl">
              {account.title}
            </h1>
            
            <div className="mt-6 flex items-center gap-6 border-b border-white/10 pb-6 font-mono text-sm text-gray-400">
              <span>SKU: {account.sku}</span>
              <span>UID: {account.uid || 'HIDDEN'}</span>
            </div>

            <div className="mt-6">
              <span className="font-rajdhani text-5xl font-bold text-green-400">
                ${account.price}
              </span>
            </div>

            {/* The Broker CTA */}
            <a 
              href={`https://wa.me/YOUR_PHONE_NUMBER?text=I'm interested in purchasing SKU: ${account.sku} - ${account.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center rounded-xl bg-green-500 px-6 py-4 font-bold text-black transition-all hover:bg-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]"
            >
              Contact Broker to Secure
            </a>
          </div>
        </div>

        {/* Bottom Section: Image Gallery */}
       {/* Bottom Section: Image Gallery Component */}
     <ImageGallery images={account.galleryUrls} />

      </div>
    </main>
  );
}