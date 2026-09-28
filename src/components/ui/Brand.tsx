import Image from "next/image";

export default function Brand() {
  return (
    <a className="brand" href="#home" aria-label="ByteSpace home">
      <Image className="brand-logo" src="/images/logo.png" alt="" width={33} height={33} />
      <p>ByteSpace</p>
    </a>
  );
}
