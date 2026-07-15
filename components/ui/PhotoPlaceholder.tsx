import Image from "next/image";

interface PhotoPlaceholderProps {
  label: string;
  className?: string;
  src?: string;
  alt?: string;
  objectFit?: "cover" | "contain";
  sizes?: string;
}

export default function PhotoPlaceholder({
  label,
  className = "",
  src,
  alt,
  objectFit = "cover",
  sizes = "100vw",
}: PhotoPlaceholderProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={src} alt={alt ?? label} fill sizes={sizes} style={{ objectFit }} />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center rounded-xl p-3 text-center font-mono text-[11.5px] leading-relaxed tracking-[0.02em] text-[#6b6f73] ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(0,0,0,0.055) 0 10px, rgba(0,0,0,0.10) 10px 20px)",
      }}
    >
      {label}
    </div>
  );
}
