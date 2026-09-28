import { Building2, Camera, Code2, Laptop, Radio, Wrench } from "lucide-react";
import Image from "next/image";

const learningPaths = [
  { title: "Design", icon: Wrench },
  { title: "Development", icon: Code2 },
  { title: "IT & Software", icon: Laptop },
  { title: "Business", icon: Building2 },
  { title: "Marketing", icon: Radio },
  { title: "Photography", icon: Camera },
];

export default function LearningPathsSection() {
  return (
    <section className="paths-section content-section" id="learning-paths">
      <div className="section-heading content-heading">
        <h2>Explore Diverse Learning Paths at Bytespace</h2>
        <p>
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various
          <br className="desktop-break" /> fields, ensuring there&apos;s
          something for everyone. Unleash your potential and explore our
          carefully curated categories.
        </p>
      </div>
      <div className="path-grid">
        {learningPaths.map(({ title }) => (
          <a className="path-card" href="#courses" key={title}>
            <span className="path-icon">
              <Image
                src={`/images/${title}.png`}
                alt={title}
                width={48}
                height={48}
              />
            </span>
            <h3>{title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}
