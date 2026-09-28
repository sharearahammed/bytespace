import Image from "next/image";

export default function CreatorCTASection() {
  return (
    <section className="creator-cta content-section" id="creator-cta">
      <div className="creator-cta-grid" aria-hidden="true" />
      <Image
        className="creator-decor creator-decor-squiggle-left"
        src="/images/Frame.png"
        alt=""
        width={267}
        height={225}
        aria-hidden="true"
      />
      <Image
        className="creator-decor creator-decor-squiggle-top"
        src="/images/Frame%20(1).png"
        alt=""
        width={177}
        height={176}
        aria-hidden="true"
      />
      <Image
        className="creator-decor creator-decor-triangle"
        src="/images/Cone%20(2).png"
        alt=""
        width={190}
        height={189}
        aria-hidden="true"
      />
      <Image
        className="creator-decor creator-decor-left-cone"
        src="/images/Cone%20(1).png"
        alt=""
        width={140}
        height={189}
        aria-hidden="true"
      />
      <Image
        className="creator-decor creator-decor-white-right"
        src="/images/Cone%20(3).png"
        alt=""
        width={218}
        height={372}
        aria-hidden="true"
      />
      <Image
        className="creator-decor creator-decor-loop"
        src="/images/Cone.png"
        alt=""
        width={346}
        height={190}
        aria-hidden="true"
      />
      <Image
        className="creator-decor creator-decor-squiggle-right"
        src="/images/Frame%20(2).png"
        alt=""
        width={334}
        height={199}
        aria-hidden="true"
      />
      <div className="creator-cta-copy">
        <h2>
          Unlock Your Potential as a<br className="creator-title-break" />{" "}
          Creator with ByteSpace
        </h2>
        <p>
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <a className="creator-button" href="#manage-courses">
          Join as Creator
        </a>
      </div>
    </section>
  );
}
