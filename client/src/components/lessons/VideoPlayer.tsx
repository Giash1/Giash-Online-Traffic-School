import React from 'react';

interface VideoPlayerProps {
  src: string;
  caption?: string;
  className?: string;
  poster?: string;
  captionPosition?: 'above' | 'below';
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, caption, className = '', poster, captionPosition = 'below' }) => {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  const handleError = React.useCallback((e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (video.error) {
      console.error('[VideoPlayer] Failed to load video:', {
        src,
        errorCode: video.error.code,
        errorMessage: video.error.message || 'Unknown error'
      });
    }
  }, [src]);

  return (
    <div className={`video-container ${className}`}>
      {caption && captionPosition === 'above' && (
        <p className="text-sm text-gray-700 mb-2 text-center font-semibold">
          {caption}
        </p>
      )}

      <video
        ref={videoRef}
        controls
        className="w-full rounded-lg shadow-lg"
        style={{ maxHeight: '500px' }}
        poster={poster}
        preload="metadata"
        playsInline
        onError={handleError}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {caption && captionPosition === 'below' && (
        <p className="text-sm text-gray-600 mt-2 text-center italic">
          {caption}
        </p>
      )}
    </div>
  );
};
