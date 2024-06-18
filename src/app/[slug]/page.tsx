"use client";
import Song from "@/components/Song";
import Image from "next/image";
import GroupList from "@/components/GroupList";
import { data } from "@/data";

export default function SongPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const group = data.find((group) => group.slug === slug);
  const songs = group?.songs;

  return (
    <div className="flex min-h-screen flex-col md:flex-row justify-center fixed w-full">
      <div className="pl-3 w-1/4 h-screen overflow-y-auto bg-[#040504]">
        <div className="py-3 pt-7 pl-5">
          <span className="text-white font-bold text-2xl">Artists</span>
        </div>
        <GroupList />
      </div>
      <div className="w-full h-screen overflow-auto">
        <div className="">
          <div className="relative w-full" style={{ paddingTop: "35%" }}>
            <span className="text-white font-bold text-8xl absolute bottom-5 left-5 z-10">
              {group?.name}
            </span>
            <Image
              src={group?.banner!}
              alt="banner image"
              fill
              className="object-cover object-top filter brightness-75"
            />
          </div>
        </div>
        <div className="mb-5 bg-[#0C0D0E]">
          <div className="flex flex-col mx-8 z-20">
            <span className="text-white pt-5 font-bold text-2xl">Songs</span>
            <div className="grid grid-cols-2 gap-7 md:grid-cols-5 pt-4">
              {songs?.map((era: any) => (
                <Song
                  key={era.id}
                  id={era.id}
                  name={era.name}
                  image={era.image}
                  album={era.album}
                  slug={era.slug}
                  group={slug}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
