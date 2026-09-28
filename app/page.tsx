"use client";

import { FormEvent, useMemo, useState } from "react";
import { Image as ImageIcon, Search, ShoppingBag, Star, Menu, X, BarChart3 } from "lucide-react";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const courses = [
  { title: "Learn Figma from Basic to Advanced", category: "UI/UX Design" },
  { title: "Build Digital Asset", category: "Graphic Design" },
  { title: "the Power of Big Data", category: "Data Science" },
  { title: "Balancing Productivity and Creativity", category: "Productivity" },
  { title: "Mastering Money Management", category: "Freelance & Entrepreneurship" },
  { title: "From Idea to Startup Success", category: "Marketing" },
];

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="ByteSpace home">
      <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
      <span>ByteSpace</span>
    </a>
  );
}

function DummyImage({ className = "" }: { className?: string }) {
  return (
    <div className={`dummy-image ${className}`} role="img" aria-label="Blank image placeholder">
      <ImageIcon aria-hidden="true" />
    </div>
  );
}

function CourseCard({ title }: { title: string }) {
  return (
    <article className="course-card">
      <div className="course-preview">
        <DummyImage />
        <div className="preview-details"><span>17 Lessons</span><span>2 hours 16 mins</span><span>59 Comments</span></div>
      </div>
      <div className="course-title-row">
        <h3>{title}</h3>
        <span className="rating">4.5 <Star size={16} fill="currentColor" /></span>
      </div>
      <p className="course-author">by <a href="#creators">purepearl studio</a></p>
      <div className="course-lower-row">
        <span className="level"><BarChart3 size={15} /> Beginner</span>
        <div className="student-avatars" aria-label="More than 26 students"><i /><i /><i /><i /><b>26+</b></div>
      </div>
      <p className="course-price"><strong>$25</strong><span>/lifetime</span></p>
    </article>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleCourses = useMemo(() => courses.filter((course) => {
    const inCategory = activeCategory === "Featured" || course.category === activeCategory;
    const matchesSearch = `${course.title} ${course.category} purepearl studio`.toLowerCase().includes(searchTerm.toLowerCase());
    return inCategory && matchesSearch;
  }), [activeCategory, searchTerm]);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearchTerm(searchInput.trim());
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main id="home">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="shape shape-left" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="shape shape-right" aria-hidden="true" />
        <div className="scribble scribble-left" aria-hidden="true">〰</div>
        <div className="scribble scribble-right" aria-hidden="true">〰</div>
        <div className="paper-plane" aria-hidden="true" />
        <header className="site-header">
          <div className="header-inner">
            <Brand />
            <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
            <nav className={menuOpen ? "main-nav main-nav-open" : "main-nav"} aria-label="Main navigation">
              <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#courses" onClick={() => setMenuOpen(false)}>Courses</a>
              <a href="#creators" onClick={() => setMenuOpen(false)}>Creators</a>
            </nav>
            <div className="header-actions"><a href="#sign-in">Sign In</a><a href="#join-us">Join Us</a><a className="bag-link" href="#courses" aria-label="Course basket"><ShoppingBag size={22} /></a></div>
          </div>
        </header>

        <div className="hero-copy">
          <h1 id="hero-title">Get Access to Hundreds<br />Courses Available</h1>
          <p>Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
          <form className="hero-search" onSubmit={handleSearch}>
            <label><Search size={20} /><input aria-label="Course, topic, creator" placeholder="Course, topic, creator" value={searchInput} onChange={(event) => setSearchInput(event.target.value)} /></label>
            <button type="submit">Search</button>
          </form>
        </div>

        <div className="hero-illustration" aria-label="Featured learning image placeholders">
          <div className="hero-lime-disc" />
          <DummyImage className="hero-person-placeholder" />
          <div className="hero-info-card design-card"><span>UI/UX Design</span><small>200 Courses&nbsp; · &nbsp;1000+ Students</small></div>
          <div className="hero-info-card progress-card"><span>Learning Progress</span><strong>55%</strong><i><b /></i></div>
          <div className="hero-info-card happy-card"><span>Happy Students</span><small>4.5 (240) <Star size={12} fill="currentColor" /></small><div className="happy-avatars"><i /><i /><i /><i /><i /><b>2K+</b></div></div>
        </div>
      </section>

      <section className="logo-strip" aria-label="Featured partners">
        <div className="logo-strip-inner"><span><i className="logo-orbit" /> Logoipsum</span><span><i className="logo-sun" /> Logoipsum</span><span><i className="logo-bolt">↯</i> Logoipsum</span><span><i className="logo-flower">✿</i> Logoipsum</span><span><i className="logo-rings" /> Logoipsum</span></div>
      </section>

      <section className="courses-section" id="courses">
        <div className="section-heading">
          <h2>Discover Your Passion,<br />Build Your Skills</h2>
          <p>At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different<br className="desktop-break" /> fields, from technology to the arts, and make a difference in your career and life.</p>
        </div>
        <div className="category-chips" aria-label="Course categories">
          {categories.map((category) => <button key={category} className={activeCategory === category ? "category-chip category-chip-active" : "category-chip"} type="button" onClick={() => setActiveCategory(category)}>{category}</button>)}
          <button className="more-categories" type="button" onClick={() => setActiveCategory("Featured")}>+ More</button>
        </div>
        {visibleCourses.length > 0 ? <div className="course-grid">{visibleCourses.map((course) => <CourseCard key={course.title} title={course.title} />)}</div> : <div className="empty-state">No matching courses. Try another search or category.</div>}
      </section>
      <footer className="page-footer" id="creators"><Brand /><span>© ByteSpace Courses</span><a href="#home">Back to top ↑</a></footer>
    </main>
  );
}