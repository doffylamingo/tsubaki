"use client";

import React, { useEffect, useRef } from "react";
import YouTube from "react-youtube";

interface YouTubePlayerProps {
  onTimeUpdate: (time: number) => void;
  start: any;
  id: string;
}

export default function YoutubePlayer({
  onTimeUpdate,
  start,
  id,
}: YouTubePlayerProps) {
  const youtubeRef = useRef<any>(null);
  const intervalRef = useRef<any>(null);

  const startRef = useRef<number>(start);

  useEffect(() => {
    intervalRef.current = setInterval(updateTime, 25);

    return () => clearInterval(intervalRef.current);
  });

  const updateTime = () => {
    const youtube = youtubeRef.current;
    if (!youtube) return false;
    youtube.internalPlayer
      .getCurrentTime()
      .then((time: number) => onTimeUpdate(time || 0));
  };

  return (
    <YouTube
      videoId={id}
      className={"w-full h-full"}
      ref={youtubeRef}
      opts={{
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 1,
          color: "white",
          start: startRef.current,
        },
      }}
    />
  );
}
