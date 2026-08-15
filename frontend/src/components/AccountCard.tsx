import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { FadeIn } from "./FadeIn";

export interface AccountProps {
  _id: string;
  title: string;
  slug: string;
  sku: string;
  uid: string;
  price: number;
  game: string;
  description?: string;
  mainImageUrl?: string;
  galleryUrls?: string[];
  highlights?: string[];
  tags?: string[];
}

export function AccountCard({ account, index = 0 }: { account: AccountProps; index?: number }) {
  return (
    <FadeIn delay={Math.min(index * 0.045, 0.32)} className="h-full">
      <article className="asset-card corner-frame">
        <Link href={`/account/${account.slug}`} className="asset-media" aria-label={`Inspect ${account.title}`}>
          {account.mainImageUrl ? (
            <Image
              src={account.mainImageUrl}
              alt={account.title}
              fill
              sizes="(max-width: 760px) 100vw, (max-width: 1160px) 50vw, 25vw"
            />
          ) : (
            <div style={{ display: "grid", height: "100%", placeItems: "center", color: "rgba(255,255,255,.45)" }}>
              CLASSIFIED
            </div>
          )}
          <span className="verified-badge">
            <BadgeCheck size={13} /> Verified
          </span>
        </Link>

        <div className="asset-body">
          <h2 className="asset-title">{account.title}</h2>
          <div className="asset-meta">
            <span>SKU {account.sku}</span>
            <span style={{ textAlign: "right" }}>UID {account.uid || "Brokered"}</span>
          </div>
          {account.description && <p className="asset-copy">{account.description}</p>}
          <div className="asset-footer">
            <span className="price">${account.price?.toLocaleString()}</span>
            <Link href={`/account/${account.slug}`} className="pill-cta" style={{ width: "auto", minWidth: 132, marginTop: 0 }}>
              Inspect <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}
