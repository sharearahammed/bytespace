import Image from "next/image";

const testimonials = [
  {
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "person one",
  },
  {
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "person two",
  },
  {
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "person three",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="community-section content-section" id="community">
      <div className="community-heading">
        <h2>
          Discover What Our
          <br />
          Community Is Saying
        </h2>
        <p>
          At ByteSpace, our vibrant community of learners and creators is at the
          heart of what we do. Hear directly from those who have experienced the
          transformative journey of learning and creating on our platform.
          Explore testimonials that reflect the diverse perspectives of
          enthusiastic learners and accomplished creators.
        </p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map(({ quote, name, role, avatar }) => (
          <article className="testimonial-card" key={name}>
            <Image
              src={`/images/${avatar}.png`}
              alt={name}
              width={80}
              height={80}
              className={`testimonial-avatar testimonial-avatar-${avatar}`}
            />

            <div className="testimonial-author">
              <strong>{name}</strong>
              <span>{role}</span>
            </div>

            <p>&quot;{quote}&quot;</p>
          </article>
        ))}
      </div>
    </section>
  );
}