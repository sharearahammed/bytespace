"use client";

import Image from "next/image";
import { BarChart3, Star } from "lucide-react";
import {
  categories,
  useCatalog,
} from "@/src/components/sections/CatalogFilters";

function CourseCard({ title }: { title: string }) {
  const imagePath = `/images/${title}.png`;

  const studentAvatars = [
    "/images/happy1.png",
    "/images/happy2.png",
    "/images/happy3.png",
    "/images/happy4.png",
  ];

  return (
    <article className="course-card">
      <div>
        <Image
          src={imagePath}
          alt={title}
          width={600}
          height={400}
          className="course-image"
        />

        {/* <div className="preview-details">
          <span>17 Lessons</span>
          <span>2 hours 16 mins</span>
          <span>59 Comments</span>
        </div> */}
      </div>

      <div className="course-title-row">
        <h3>{title}</h3>

        <span className="rating">
          4.5 <Star size={16} fill="currentColor" />
        </span>
      </div>

      <p className="course-author">
        by <a href="#creators">purepearl studio</a>
      </p>

      <div className="course-lower-row">
        <span className="level">
          <BarChart3 size={15} /> Beginner
        </span>

        <div className="happy-avatars" aria-label="More than 26 students">
          {studentAvatars.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Happy student ${index + 1}`}
              width={20}
              height={20}
              className="happy-avatar"
            />
          ))}
          <div className="happy-count">26+</div>
        </div>
      </div>

      <p className="course-price">
        <strong>$25</strong>
        <span>/lifetime</span>
      </p>
    </article>
  );
}

export default function CourseCatalogSection() {
  const { activeCategory, setActiveCategory, visibleCourses } = useCatalog();

  return (
    <section className="courses-section" id="courses">
      <div className="section-heading">
        <h2>
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>

        <p>
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different
          <br className="desktop-break" />
          fields, from technology to the arts, and make a difference in your
          career and life.
        </p>
      </div>

      <div className="category-chips" aria-label="Course categories">
        {categories.map((category) => (
          <button
            key={category}
            className={
              activeCategory === category
                ? "category-chip category-chip-active"
                : "category-chip"
            }
            type="button"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}

        <button
          className="more-categories"
          type="button"
          onClick={() => setActiveCategory("Featured")}
        >
          + More
        </button>
      </div>

      {visibleCourses.length > 0 ? (
        <div className="course-grid">
          {visibleCourses.map((course) => (
            <CourseCard key={course.title} title={course.title} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          No matching courses. Try another search or category.
        </div>
      )}
    </section>
  );
}
