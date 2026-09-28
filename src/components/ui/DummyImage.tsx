import { Image as ImageIcon } from "lucide-react";

type DummyImageProps = {
  className?: string;
};

export default function DummyImage({ className = "" }: DummyImageProps) {
  return (
    <div
      className={`dummy-image ${className}`}
      role="img"
      aria-label="Blank image placeholder"
    >
      <ImageIcon aria-hidden="true" />
    </div>
  );
}
