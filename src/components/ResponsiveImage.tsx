type ResponsiveImageProps = {
  alt: string;
  baseName: string;   // file base, e.g. "residential-junk-removal-new"
  folder?: string;    // defaults to "/images"
  width: number;      // intrinsic width of largest source
  height: number;     // intrinsic height of largest source
  className?: string;
  priority?: boolean; // set true for above-the-fold images
};

export default function ResponsiveImage({
  alt,
  baseName,
  folder = "/images",
  width,
  height,
  className = "",
  priority
}: ResponsiveImageProps) {
  const src400 = `${folder}/${baseName}-400.webp`;
  const src800 = `${folder}/${baseName}-800.webp`;
  const src1200 = `${folder}/${baseName}-1200.webp`;
  const fallback = `${folder}/${baseName}-800.jpg`;
  const fetchpriority = priority ? "high" : "auto";
  const loading = priority ? "eager" : "lazy";

  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`${src400} 400w, ${src800} 800w, ${src1200} 1200w`}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
      />
      <img
        src={fallback}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        decoding="async"
        fetchPriority={fetchpriority as any}
        style={{ contentVisibility: priority ? "visible" : "auto" }}
      />
    </picture>
  );
}
