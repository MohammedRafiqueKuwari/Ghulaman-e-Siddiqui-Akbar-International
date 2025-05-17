import React, { useEffect, useRef, useState } from "react";

const SplashScreen = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setVisible(false);
        onFinish();
      }, 1000);
    }, 11000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-1000 bg-black ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        className="w-auto h-full object-contain"

        autoPlay
        muted
        playsInline
      >
        <source src="assets/VID-20241203-WA0006.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional: gradient or overlay for blend effect */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
    </div>
  );
};

export default SplashScreen;
