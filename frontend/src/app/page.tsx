import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeDollarSign, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { CountUp } from "@/components/CountUp";
import { FadeIn } from "@/components/FadeIn";
import { getWhatsAppUrl, sellAccountMessage } from "@/lib/contact";

function TrustGlyph({ type }: { type: "secure" | "instant" | "price" | "support" | "seller" }) {
  const paths = {
    secure: (
      <>
        <path d="M12 3.8 18 6v5.1c0 3.3-2.3 6.1-6 7.1-3.7-1-6-3.8-6-7.1V6l6-2.2Z" />
        <path d="m9.2 11.4 1.8 1.8 3.8-4.4" />
      </>
    ),
    instant: (
      <>
        <path d="M13.6 3.7 6.8 12h4.4l-.8 8.3 6.8-9.5h-4.5l.9-7.1Z" />
        <path d="M5 5.8h4" />
        <path d="M15 18.2h4" />
      </>
    ),
    price: (
      <>
        <path d="M12 3.8 18.2 12 12 20.2 5.8 12 12 3.8Z" />
        <path d="M8.8 12h6.4" />
        <path d="M12 8.8v6.4" />
      </>
    ),
    support: (
      <>
        <path d="M5.2 12.4v-1.2a6.8 6.8 0 0 1 13.6 0v1.2" />
        <path d="M5.2 12.4h3v4.8h-3v-4.8Z" />
        <path d="M15.8 12.4h3v4.8h-3v-4.8Z" />
        <path d="M12 19.2h2.8" />
      </>
    ),
    seller: (
      <>
        <path d="M7 5.4h10v13.2H7V5.4Z" />
        <path d="M9.4 9h5.2" />
        <path d="M9.4 12h5.2" />
        <path d="m9.4 15.2 1.2 1.1 3.7-4" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="trust-glyph">
      {paths[type]}
    </svg>
  );
}

const games = [
  {
    title: "BGMI Accounts",
    href: "/pubg",
    category: "Battle Royale",
    subtitle: "M416 Glacier, X-Suits, Mythic inventory",
    image: "/pubg.png",
  },
  {
    title: "eFootball",
    href: "/search?q=PES",
    category: "Soccer",
    subtitle: "Legacy squads, ranked clubs, rare builds",
    image: "/pes.png",
  },
  {
    title: "Free Fire",
    href: "/search?q=Free%20Fire",
    category: "Battle Royale",
    subtitle: "Elite pass history and ranked-ready vaults",
    image: "/freeFire.png",
  },
];

const trust = [
  { icon: "secure" as const, title: "Secure", subtitle: "Broker verified" },
  { icon: "instant" as const, title: "Instant Delivery", subtitle: "Rapid handoff" },
  { icon: "price" as const, title: "Best Prices", subtitle: "Premium inventory" },
  { icon: "support" as const, title: "24/7 Support", subtitle: "Live broker desk" },
  { icon: "seller" as const, title: "Verified Sellers", subtitle: "SKU tracked" },
];

const stats = [
  { value: 2, suffix: "K+", label: "Happy Customers" },
  { value: 3, suffix: "K+", label: "Accounts Sold" },
  { value: 100, suffix: "%", label: "Success Rate", decimals: 0 },
  { value: 24, suffix: "/7", label: "Support" },
];

const sellHref = getWhatsAppUrl(sellAccountMessage);

export default function Home() {
  return (
    <main className="site-shell">
      {/* HERO + GAME GRID */}
      <section className="container hero">
        <FadeIn>
          <div>
            <h1 className="hero-title metal-text">Choose Your Game</h1>
            <p className="hero-tagline">Unlock. Play. Dominate.</p>
            <p className="hero-copy">
              FILTHY STORE is the elite broker for verified gaming accounts. BUY, SELL, and TRADE with zero hassle.
            </p>
          </div>
        </FadeIn>

        <div className="game-grid">
          {games.map((game, index) => (
            <FadeIn key={game.title} delay={0.1 + index * 0.08} direction="left">
              <Link href={game.href} className="game-card corner-frame">
                <Image src={game.image} alt="" fill sizes="(max-width: 760px) 100vw, 32vw" priority={index === 0} />
                <span className="card-tag">{game.category}</span>
                <div className="game-card-body">
                  <h2 className="game-wordmark">{game.title}</h2>
                  <p className="game-subtitle">{game.subtitle}</p>
                  <span className="pill-cta">
                    Explore Now <ArrowRight size={17} />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* SELL SECTION – moved up (after games) */}
      <section className="container sell-section">
        <FadeIn>
          <div className="glass corner-frame sell-panel">
            <div className="sell-copy">
              <div className="eyebrow">
                <BadgeDollarSign size={15} /> Turn Your Grind Into Cash
              </div>
              <h2 className="sell-title metal-text">Sell Your Account</h2>
              <p className="sell-text">
                Send your game and inventory details along with an account video, a description, and a screenshot of the login page. Make sure the login is safe and secure - single login accounts are preferred. We review the account path, value the rare inventory, and route serious offers without low-effort back-and-forth.
              </p>
              <div className="sell-actions">
                <a href={sellHref} target="_blank" rel="noopener noreferrer" className="brand-button">
                  <MessageCircle size={18} /> Sell Your Account
                </a>
                <Link href="/search" className="ghost-button">
                  Browse Inventory <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            <div className="sell-signal" aria-hidden="true">
              <div className="signal-card">
                <span>SKU INTAKE</span>
                <strong>SELL-READY</strong>
              </div>
              <div className="signal-row">
                <ShieldCheck size={16} /> Broker verified
              </div>
              <div className="signal-row">
                <Sparkles size={16} /> Rare inventory review
              </div>
              <div className="signal-row">
                <ArrowRight size={16} /> Rapid WhatsApp handoff
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* TRUST STRIP – moved down */}
      <section className="trust-strip">
        <div className="container trust-grid">
          {trust.map((item) => (
            <div className="trust-item" key={item.title}>
              <span className="trust-icon">
                <TrustGlyph type={item.icon} />
              </span>
              <span className="trust-copy">
                <span className="trust-title">{item.title}</span>
                <span className="trust-subtitle">{item.subtitle}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* STATS STRIP – moved to last */}
      <section className="stats-strip">
        <div className="container stats-grid">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <div className="stat-number">
                <CountUp value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}