import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BadgeCheck, MessageCircle, ShieldCheck } from "lucide-react";
import { AccountProps } from "@/components/AccountCard";
import { FadeIn } from "@/components/FadeIn";
import { ImageGallery } from "@/components/ImageGallery";
import { client } from "@/lib/sanity";

type ProductAccount = AccountProps & {
  galleryUrls?: string[];
  highlights?: string[];
  tags?: string[];
};

function splitDescription(description?: string) {
  if (!description) return [];

  const newlineItems = description
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);

  if (newlineItems.length > 1) return newlineItems;

  const normalized = description.replace(/\s+/g, " ").trim();
  if (!normalized) return [];

  const delimiterItems = normalized
    .split(/\s*(?:[•|;]+|\s+-\s+)\s*/)
    .map((item) => item.trim())
    .filter(Boolean);

  if (delimiterItems.length > 1) return delimiterItems;

  const markers = [
    "ACCOUNT LEVEL",
    "COLLECTION LEVEL",
    "MYTHIC FASHION",
    "RENAME CARD",
    "UC AVAILABLE",
    "M416",
    "UMP",
    "DP ",
    "MYSTIC",
    "ABAKEN",
    "MANY MORE",
    "TIME TRAVELLER",
    "ROGUE SET",
    "INVADER SET",
    "FOOL BACKPACK",
    "RAVEN BACKPACK",
    "SEREN",
    "HELLFIRE",
  ];

  const markerPattern = new RegExp(`\\s+(?=${markers.map((marker) => marker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");

  return normalized
    .split(markerPattern)
    .map((item) => item.trim())
    .filter(Boolean);
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const query = `*[_type == "account" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
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

  const account: ProductAccount | null = await client.fetch(query, { slug });

  if (!account) {
    return notFound();
  }

  const galleryImages = Array.from(new Set([account.mainImageUrl, ...(account.galleryUrls || [])].filter(Boolean))) as string[];
  const brokerText = encodeURIComponent(`I'm interested in purchasing SKU ${account.sku} - ${account.title}`);
  const descriptionItems = splitDescription(account.description);
  const specs = [
    ["Game", account.game],
    ["SKU", account.sku],
    ["UID", account.uid || "Broker disclosed"],
    ["Asset Class", account.price > 1500 ? "Collector" : "Premium"],
    ["Verification", "Broker reviewed"],
  ];

  return (
    <main className="site-shell">
      <section className="container product-layout">
        <FadeIn>
          <Link href={account.game === "PUBG" ? "/pubg" : `/search?q=${encodeURIComponent(account.game)}`} className="back-link">
            <ArrowLeft size={16} /> Back to catalog
          </Link>
          <div style={{ marginTop: 22 }}>
            <ImageGallery images={galleryImages} />
          </div>
        </FadeIn>

        <FadeIn delay={0.1} direction="left">
          <aside className="glass product-panel corner-frame">
            <div className="eyebrow">
              <BadgeCheck size={15} /> Verified Asset
            </div>
            <h1 className="product-title">{account.title}</h1>
            {descriptionItems.length > 0 && (
              <div className="product-spec-list" aria-label="Account description">
                {descriptionItems.map((item, index) => (
                  <div className="product-spec-row" key={`${item}-${index}`}>
                    {item}
                  </div>
                ))}
              </div>
            )}

            <table className="spec-table">
              <tbody>
                {specs.map(([label, value]) => (
                  <tr key={label}>
                    <th>{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="product-price">${account.price?.toLocaleString()}</div>
            <a href={`https://wa.me/YOUR_PHONE_NUMBER?text=${brokerText}`} target="_blank" rel="noopener noreferrer" className="brand-button" style={{ width: "100%", marginTop: 24 }}>
              <MessageCircle size={18} /> Contact Broker
            </a>
            <p className="product-copy" style={{ fontSize: 12, marginTop: 14 }}>
              <ShieldCheck size={15} style={{ display: "inline", marginRight: 6, color: "var(--cyan-blue)", verticalAlign: -2 }} />
              Broker-assisted review before transfer.
            </p>
          </aside>
        </FadeIn>
      </section>

      <section className="container detail-grid">
        <div className="glass detail-panel corner-frame">
          <h2 className="detail-title">Highlights</h2>
          <div className="highlight-list">
            {(account.highlights?.length ? account.highlights : ["Verified ownership path", "Broker-assisted transfer", "High-value inventory review"]).map((item) => (
              <div className="highlight-row" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="glass detail-panel corner-frame">
          <h2 className="detail-title">Market Tags</h2>
          <div className="chip-list">
            {(account.tags?.length ? account.tags : [account.game, account.sku, "verified"]).map((tag) => (
              <span className="chip" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
