import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

type ArcflowMediaProps = {
  poster: string;
  mp4?: string | null;
  webm?: string | null;
};

export function ArcflowMedia({ poster, mp4, webm }: ArcflowMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const [videoFailed, setVideoFailed] = useState(false);
  const [motionMediaAllowed, setMotionMediaAllowed] = useState(false);
  const hasVideo = Boolean((mp4 || webm) && motionMediaAllowed && !reduceMotion && !videoFailed);

  useEffect(() => {
    const query = window.matchMedia('(min-width: 701px)');
    const update = () => setMotionMediaAllowed(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hasVideo) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: [0, 0.45, 0.75] },
    );

    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [hasVideo]);

  return (
    <div className="arcflow-media">
      {hasVideo ? (
        <video
          ref={videoRef}
          poster={poster}
          muted
          playsInline
          loop
          preload="metadata"
          onError={() => setVideoFailed(true)}
          aria-hidden="true"
        >
          {webm ? <source src={webm} type="video/webm" /> : null}
          {mp4 ? <source src={mp4} type="video/mp4" /> : null}
        </video>
      ) : (
        <img src={poster} alt="" loading="lazy" decoding="async" />
      )}
    </div>
  );
}
