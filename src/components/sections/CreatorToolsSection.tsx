import { CircleCheck, Star } from "lucide-react";
import DummyImage from "@/src/components/ui/DummyImage";
import Image from "next/image";

const benefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];
const happyAvatars = [
  "/images/happy1.png",
  "/images/happy2.png",
  "/images/happy3.png",
  "/images/happy4.png",
  "/images/happy5.png",
  "/images/happy6.png",
];

export default function CreatorToolsSection() {
  return (
    <section className="manage-section content-section" id="manage-courses">
      <div className="manage-layout">
        <div
          className="manage-art"
          aria-label="Creator earnings and learner community preview"
        >
          <div className="manage-revenue-card">
            <span>Total Revenue</span>
            <small>July 1-28</small>
            <strong>$120.29</strong>
            <i>
              <b />
            </i>
          </div>
          <div className="manage-year-card">
            <span>Year to Date</span>
            <small>2023</small>
            <strong>$1,200.38</strong>
            <b>+12$</b>
          </div>

          <div className="relative w-full h-full">
            {/* 1st Image */}
            <Image
              className="object-contain z-1"
              src="/images/female.png"
              alt=""
              fill
              aria-hidden="true"
            />

            {/* 2nd Image */}
            <div className="manage-squiggle" aria-hidden="true">
              <Image
                className="z-1"
                src="/images/Mask Group (1).png"
                alt=""
                width={170}
                height={200}
                // aria-hidden="true"
              />
            </div>
          </div>

          <div className="hero-info-card manage-happy-card">
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
        <div className="manage-copy">
          <h2>
            Create &amp; Manage
            <br />
            Courses Easily.
          </h2>
          <p>
            <strong>ByteSpace</strong> supports individuals or entities in the
            creation, publication, and administration of educational courses.
          </p>
          <ul>
            {benefits.map((benefit) => (
              <li key={benefit}>
                <CircleCheck size={21} fill="currentColor" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
