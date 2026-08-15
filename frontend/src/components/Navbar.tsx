"use client";

import Link from "next/link";
import { Menu, Search, ShoppingBag, UserRound, X, Zap } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/pubg", label: "PUBG" },
  { href: "/search?q=PES", label: "eFootball" },
  { href: "/search?q=Free%20Fire", label: "Free Fire" },
  { href: "/search", label: "Inventory" },
  { href: "/search?q=verified", label: "Verified" },
  { href: "/search?q=support", label: "Support" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="site-nav">
      <div className="container nav-inner">
        <Link href="/" className="brand-lockup" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            <Zap size={22} />
          </span>
          <span>
            <span className="brand-title">FILTHY</span>
            <span className="brand-subtitle">STORE</span>
          </span>
        </Link>

        <div className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="nav-tools">
          <form action="/search" className="nav-search">
            <Search size={16} />
            <input name="q" type="search" placeholder="SKU / skin / UID" />
          </form>
          <Link href="/search" className="icon-button" aria-label="Search inventory">
            <Search size={18} />
          </Link>
          <Link href="/search?q=cart" className="icon-button" aria-label="Broker cart" style={{ position: "relative" }}>
            <ShoppingBag size={18} />
            <span className="cart-dot">3</span>
          </Link>
          <Link href="/search?q=account" className="account-chip">
            <UserRound size={15} /> Broker
          </Link>
          <button className="icon-button menu-toggle" type="button" aria-label="Toggle menu" onClick={() => setOpen((value) => !value)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className={`mobile-panel ${open ? "open" : ""}`}>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
