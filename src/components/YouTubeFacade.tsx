import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
  className?: string;
  aspectRatio?: 'video' | 'square' | '9/16';
  style?: React.CSSProperties;
}

const YouTubeFacade: React.FC<YouTubeFacadeProps> = ({
  videoId,
  title,
  className = '',
  aspectRatio = 'video',
  style
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleClick = () => {
    setIsLoaded(true);
  };

  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case 'square':
        return 'aspect-square';
      case '9/16':
        return 'aspect-[9/16]';
      default:
        return 'aspect-video';
    }
  };

  if (isLoaded) {
    return (
      <div className={`relative ${getAspectRatioClass()} ${className}`} style={style}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div 
      className={`relative ${getAspectRatioClass()} cursor-pointer ${className}`}
      onClick={handleClick}
      style={style}
    >
      {/* YouTube Thumbnail */}
      <img
        src={thumbnailUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors" />
      
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110">
          <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" />
        </div>
      </div>
      
      {/* YouTube branding */}
      <div className="absolute bottom-2 right-2">
        <div className="bg-black/80 px-2 py-1 rounded text-white text-xs font-medium">
          YouTube
        </div>
      </div>
    </div>
  );
};

export default YouTubeFacade;