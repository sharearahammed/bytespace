import DummyImage from "@/src/components/ui/DummyImage";
import Image from "next/image";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export default function ProfessionalGrowthSection() {
  return (
    <section
      className="growth-section content-section"
      id="professional-growth"
    >
      <div className="growth-copy">
        <h2>
          Your Path to Professional
          <br />
          Growth Starts Here!
        </h2>
        <p>
          Explore our curated selection of courses tailored to enhance your
          capabilities and accelerate your career journey. Whether you are
          looking to sharpen specific skills, gain industry expertise, or embark
          on a new career path entirely, we have the resources you need.
        </p>
        <div className="growth-stats">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div
        className="growth-art"
        aria-label="Learning course and progress preview"
      >
        <div className="growth-course-card">
          {/* Learn Figma from Basic */}
          <Image
            src="/images/Learn Figma from Basic.png"
            alt="Happy student"
            width={400}
            height={200}
            className="object-contain"
          />
          {/* <div className="growth-course-meta">
            <span>17 Lessons</span>
            <span>2 hours 16 mins</span>
          </div> */}
          <strong>Learn Figma from Basic to Advanced</strong>
          <small>
            by <b>purepearl studio</b>
          </small>
          <div className="growth-course-bottom">
            <span>▥&nbsp; Beginner</span>
            <strong>
              $25<small>/lifetime</small>
            </strong>
          </div>
        </div>
        <Image
          className="object-contain z-1"
          src="/images/hero-section-Image.png"
          alt=""
          fill
          aria-hidden="true"
        />
        <div className="growth-progress-card z-20">
          <span>Learning Progress</span>
          <strong>55%</strong>
          <i>
            <b />
          </i>
        </div>
        <div className="growth-squiggle" aria-hidden="true">
          <Image
            className="z-1"
            src="/images/Mask Group.png"
            alt=""
            width={200}
            height={200}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
