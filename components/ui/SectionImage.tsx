import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function SectionImage({ src, alt }: Props) {
  return (
    <div className="section-image">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={520}
        className="image"
        priority={false}
      />
    </div>
  );
}
