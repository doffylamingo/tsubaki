"use client";

import React, { useCallback, useRef, useState } from "react";
import YouTubePlayer from "@/components/YoutubePlayer";
import LyricsDisplayer from "@/components/LyricsDisplayer";
import { data } from "@/data";

function findVideoById(shows, videoId) {
  for (const show of shows) {
    const foundVideo = show.videos.find((video) => video.id === videoId);
    if (foundVideo) {
      return foundVideo;
    }
  }
  return null;
}

export default function WatchPage({
  params,
}: {
  params: {
    slug: string;
    song: string;
    id: string;
  };
}) {
  const { slug, song, id } = params;

  const group = data.find((group) => group.slug === slug);

  const songData = group?.songs?.find((i) => i.slug === song);
  const foundVideo = findVideoById(songData?.shows, id);
  const offset = foundVideo.offset;

  const [time, setTime] = useState<number>(0);
  const absoluteTimeRef = useRef<number>(0);

  const handleTimeChange = useCallback(
    (time: number) => {
      const absoluteTime = time + offset;
      absoluteTimeRef.current = absoluteTime;

      time && setTime(absoluteTime);
    },
    [offset]
  );

  let startPosition = Math.round(Math.abs(offset));

  return (
    <div className="flex min-h-screen flex-col md:flex-row justify-center">
      <div className="w-full h-screen">
        <YouTubePlayer
          start={startPosition}
          onTimeUpdate={handleTimeChange}
          id={id}
        />
      </div>
      <div className="w-1/2 h-screen">
        <LyricsDisplayer currentTime={time} songData={songData} />
      </div>
    </div>
  );
}
