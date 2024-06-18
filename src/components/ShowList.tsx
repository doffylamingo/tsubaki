"use client";

import Show from "./Show";

export default function ShowList({
  videos,
  song,
  group,
}: {
  videos: any;
  song: any;
  group: any;
}) {
  return (
    <>
      {videos?.map((video: any) => (
        <Show key={video.id} video={video} slug={song} group={group} />
      ))}
    </>
  );
}
