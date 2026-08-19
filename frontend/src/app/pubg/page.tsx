import { SlidersHorizontal } from "lucide-react";
import { AccountCard, AccountProps } from "@/components/AccountCard";
import { FadeIn } from "@/components/FadeIn";
import { client } from "@/lib/sanity";

type PubgSearchParams = Promise<{ tier?: string; sort?: string }>;

const tierOptions = [
  { label: "All tiers", value: "" },
  { label: "Under ₹500", value: "under-500" },
  { label: "₹500–₹1500", value: "500-1500" },   // changed from "$500-$1500"
  { label: "Collector", value: "collector" },
];

const sortOptions = [
  { label: "Newest signal", value: "" },
  { label: "Price low", value: "price-asc" },
  { label: "Price high", value: "price-desc" },
];

function priceFilter(tier?: string) {
  if (tier === "under-500") return "&& price < 500";
  if (tier === "500-1500") return "&& price >= 500 && price <= 1500";
  if (tier === "collector") return "&& price > 1500";
  return "";
}

function sortClause(sort?: string) {
  if (sort === "price-asc") return "price asc";
  if (sort === "price-desc") return "price desc";
  return "_createdAt desc";
}

export default async function PubgStore({ searchParams }: { searchParams: PubgSearchParams }) {
  const params = await searchParams;
  const query = `*[_type == "account" && game == "PUBG" ${priceFilter(params.tier)}] | order(${sortClause(params.sort)}) {
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

  const accounts: AccountProps[] = await client.fetch(query);

  return (
    <main className="site-shell">
      <section className="container page-header">
        <FadeIn>
          <div className="showroom-top">
            <div>
              <h1 className="page-title metal-text">BGMI ACCOUNTS</h1>
              <p className="page-copy">
                A cinematic showroom for Glacier rifles, mythic wardrobes, X-Suits, elite-ranked builds, and collector-grade PUBG accounts.
              </p>
            </div>

            <form className="glass filter-panel">
              <label className="field-label">
                Tier
                <select name="tier" defaultValue={params.tier || ""} className="select-shell">
                  {tierOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="field-label">
                Sort
                <select name="sort" defaultValue={params.sort || ""} className="select-shell">
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <button className="brand-button" type="submit">
                <SlidersHorizontal size={16} /> Filter
              </button>
            </form>
          </div>
        </FadeIn>
      </section>

      <section className="container inventory-grid">
        {accounts.length > 0 ? (
          accounts.map((account, index) => <AccountCard key={account._id} account={account} index={index} />)
        ) : (
          <div className="glass empty-state corner-frame">
            <h2 className="detail-title">Inventory Empty</h2>
            <p className="page-copy" style={{ marginInline: "auto" }}>
              No PUBG accounts match the active showroom filters.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
