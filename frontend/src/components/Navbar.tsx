"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, MessageCircle, Search, UserRound, X } from "lucide-react";
import { useState } from "react";
import { getWhatsAppUrl, sellAccountMessage } from "@/lib/contact";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/pubg", label: "PUBG" },
  { href: "/search?q=PES", label: "eFootball" },
  { href: "/search?q=Free%20Fire", label: "Free Fire" },
  { href: "/search", label: "Inventory" },
  { href: "/search?q=verified", label: "Verified" },
];

const sellHref = getWhatsAppUrl(sellAccountMessage);

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="site-nav">
        <div className="container nav-inner">
          <Link href="/" className="brand-lockup" onClick={() => setOpen(false)}>
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
            <a href={sellHref} target="_blank" rel="noopener noreferrer" className="nav-link nav-link-sell">
              Sell <ArrowUpRight size={13} />
            </a>
          </div>

          <div className="nav-tools">
            {/* Single search bar – always visible, responsive */}
            <form action="/search" className="nav-search">
              <Search size={16} />
              <input name="q" type="search" placeholder="SKU / skin / UID" />
            </form>
            {/* Removed duplicate search icon and cart */}
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
          <a href={sellHref} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="mobile-sell-link">
            Sell Your Account <ArrowUpRight size={15} />
          </a>
        </div>
      </nav>
      <a href={sellHref} target="_blank" rel="noopener noreferrer" className="sell-fab" aria-label="Talk to a broker on WhatsApp">
        <span className="sell-fab-icon" aria-hidden="true">
          <MessageCircle size={19} />
          <span className="sell-fab-status" />
        </span>
        <span className="sell-fab-copy">
          <span className="sell-fab-label">Broker Desk</span>
          <span className="sell-fab-label-mobile">SELL HERE</span>
        </span>
      </a>
    </>
  );
}
