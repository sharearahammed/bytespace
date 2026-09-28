import Image from "next/image";

export default function PartnerLogoStrip() {
  return (
    <section className="logo-strip" aria-label="Featured partners">
      <div className="logo-strip-inner">
        <span>
          <Image
            src="/images/logo-orbit.png"
            alt="Logoipsum"
            width={32}
            height={32}
          />
          Logoipsum
        </span>

        <span>
          <Image
            src="/images/logo-sun.png"
            alt="Logoipsum"
            width={32}
            height={32}
          />
          Logoipsum
        </span>

        <span>
          <Image
            src="/images/logo-bolt.png"
            alt="Logoipsum"
            width={32}
            height={32}
          />
          Logoipsum
        </span>

        <span>
          <Image
            src="/images/logo-flower.png"
            alt="Logoipsum"
            width={32}
            height={32}
          />
          Logoipsum
        </span>

        <span>
          <Image
            src="/images/logo-rings.png"
            alt="Logoipsum"
            width={32}
            height={32}
          />
          Logoipsum
        </span>
      </div>
    </section>
  );
}