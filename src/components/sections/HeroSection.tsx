"use client";

import Image from "next/image";
import { Search, Star } from "lucide-react";
import SiteHeader from "@/src/components/layout/SiteHeader";
import { useCatalog } from "@/src/components/sections/CatalogFilters";

export default function HeroSection() {
  const { searchInput, setSearchInput, submitSearch } = useCatalog();

  const happyAvatars = [
    "/images/happy1.png",
    "/images/happy2.png",
    "/images/happy3.png",
    "/images/happy4.png",
    "/images/happy5.png",
    "/images/happy6.png",
  ];

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <Image
        className="hero-decor hero-decor-lime-left"
        src="/images/Frame%20(5).png"
        alt=""
        width={177}
        height={176}
        aria-hidden="true"
      />
      <Image
        className="hero-decor hero-decor-white-left"
        src="/images/Frame%20(1).png"
        alt=""
        width={177}
        height={176}
        aria-hidden="true"
      />
      <Image
        className="hero-decor hero-decor-white-ring z-50"
        src="/images/Cone%20(5).png"
        alt=""
        width={346}
        height={343}
        aria-hidden="true"
      />
      <Image
        className="hero-decor hero-decor-white-loop"
        src="/images/Frame%20(4).png"
        alt=""
        width={317}
        height={332}
        aria-hidden="true"
      />
      <Image
        className="hero-decor hero-decor-lime-right"
        src="/images/Cone%20(6).png"
        alt=""
        width={213}
        height={372}
        aria-hidden="true"
      />
      <Image
        className="hero-decor hero-decor-white-cone"
        src="/images/Cone%20(4).png"
        alt=""
        width={190}
        height={189}
        aria-hidden="true"
      />
      <SiteHeader />
      <div className="hero-copy">
        <h1 id="hero-title">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>
        <p>
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <form className="hero-search" onSubmit={submitSearch}>
          <label>
            <Search size={20} />
            <input
              aria-label="Course, topic, creator"
              placeholder="Course, topic, creator"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
            />
          </label>
          <button  type="submit">Search</button>
        </form>
      </div>
      <div
        className="hero-illustration"
        aria-label="Featured learning image placeholders"
      >
        <div className="hero-lime-disc" />
        <div className="relative w-full h-96 left-6">
          <Image
            className="object-contain"
            src="/images/hero-section-Image.png"
            alt=""
            fill
            aria-hidden="true"
          />
        </div>
        <div className="hero-info-card design-card">
          <span>UI/UX Design</span>
          <small>200 Courses&nbsp; · &nbsp;1000+ Students</small>
        </div>
        <div className="hero-info-card progress-card">
          <span>Learning Progress</span>
          <strong>55%</strong>
          <i>
            <b />
          </i>
        </div>
        <div className="hero-info-card happy-card">
          <span>Happy Students</span>
          <small>
            4.5 (240) <Star size={12} fill="currentColor" />
          </small>
          <div className="happy-avatars">
            {happyAvatars.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`Happy learner ${index + 1}`}
                width={88}
                height={88}
                className="happy-avatar"
              />
            ))}

            <div className="happy-count">2K+</div>
          </div>
        </div>
      </div>
    </section>
  );
}
