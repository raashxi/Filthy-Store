import Link from "next/link";
import { ArrowLeft, Search, Sparkles } from "lucide-react";
import { AccountCard, AccountProps } from "@/components/AccountCard";
import { FadeIn } from "@/components/FadeIn";
import { client } from "@/lib/sanity";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const term = params.q?.trim() || "";

  const searchQuery = `*[_type == "account" && $term != "" && (title match $search || sku match $search || game match $search || description match $search || uid match $search || $term in tags[] || count(specList[match $search]) > 0)] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    sku,
    uid,
    price,
    game,
    description,
    specList,
    "mainImageUrl": mainImage.asset->url,
    highlights,
    tags
  }`;

  const accounts: AccountProps[] = await client.fetch(searchQuery, { term, search: `*${term}*` });

  return (
    <main className="site-shell">
      <section className="container page-header">
        <FadeIn>
          <Link href="/" className="back-link">
            <ArrowLeft size={16} /> Back to hub
          </Link>
          <div style={{ marginTop: 24 }}>
            <div className="eyebrow">
              <Sparkles size={15} /> Global Inventory Scan
            </div>
            <h1 className="page-title metal-text">Search</h1>
            <p className="page-copy">Server-rendered catalog search by SKU, UID, title, game, description, and Sanity tags.</p>
          </div>

          <form action="/search" className="hero-search">
            <span style={{ display: "grid", placeItems: "center", color: "var(--cyan-blue)", paddingLeft: 10 }}>
              <Search size={18} />
            </span>
            <input name="q" type="search" defaultValue={term} placeholder="Try Glacier, Mythic, PBG-001, PUBG..." />
            <button className="brand-button" type="submit">
              Run Search
            </button>
          </form>
        </FadeIn>
      </section>

      <section className="container">
        <div style={{ borderBottom: "1px solid rgba(255,255,255,.1)", paddingBottom: 16 }}>
          <p className="stat-label" style={{ textAlign: "left" }}>
            {term ? `${accounts.length} result${accounts.length === 1 ? "" : "s"} for "${term}"` : "Enter a query to scan inventory"}
          </p>
        </div>
      </section>

      <section className="container inventory-grid">
        {term && accounts.length > 0 ? (
          accounts.map((account, index) => <AccountCard key={account._id} account={account} index={index} />)
        ) : (
          <div className="glass empty-state corner-frame">
            <h2 className="detail-title">{term ? "No Matches Found" : "Search Console Ready"}</h2>
            <p className="page-copy" style={{ marginInline: "auto" }}>
              {term ? "Try another SKU, cosmetic name, UID, or game division." : "Use the form above to route a native GET request into server-rendered results."}
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
