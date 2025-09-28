import React, { useState } from "react";

type Props = {
  id: string;
  title?: string;
  thumbnail?: string; // optional local path like /images/yt/e52h_dQO0R4.jpg
  aspect?: "16/9" | "4/3" | "1/1" | "9/16";
};

export default function YouTubeLite({
  id,
  title = "YouTube video",
  thumbnail,
  aspect = "16/9",
}: Props) {
  const [activated, setActivated] = useState(false);
  const thumb = thumbnail ?? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  const pad = aspect === "16/9" ? "pt-[56.25%]" : 
              aspect === "4/3" ? "pt-[75%]" : 
              aspect === "9/16" ? "pt-[177.78%]" : 
              "pt-[100%]";

  return (
    <div className={`relative w-full ${pad} rounded-2xl overflow-hidden shadow`}>
      {!activated ? (
        <button
          className="absolute inset-0 group"
          onClick={() => setActivated(true)}
          aria-label={`Play ${title}`}
        >
          <img
            src={thumb}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="rounded-full p-4 bg-white/90 shadow-lg">▶</span>
          </div>
        </button>
      ) : (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          sandbox="allow-scripts allow-same-origin allow-presentation allow-forms allow-popups"
        />
      )}
    </div>
  );
}