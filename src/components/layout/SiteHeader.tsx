"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Brand from "@/src/components/ui/Brand";
import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav
          className={menuOpen ? "main-nav main-nav-open" : "main-nav"}
          aria-label="Main navigation"
        >
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#courses" onClick={() => setMenuOpen(false)}>
            Courses
          </a>
          <a href="#creators" onClick={() => setMenuOpen(false)}>
            Creators
          </a>
        </nav>
        <div className="header-actions">
          <a href="/signin">Sign In</a>
          <Link href="/signup" onClick={() => setMenuOpen(false)}>
            Join Us
          </Link>
          <a className="bag-link" href="#courses" aria-label="Course basket">
            <Image
              src="/images/shopping.png"
              alt="shopping bag"
              width={16}
              height={72}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
