import Image from "next/image";
import GroupList from "@/components/GroupList";
import ShowList from "@/components/ShowList";
import { data } from "@/data";

export default function ShowPage({
  params,
}: {
  params: { slug: string; song: string };
}) {
  const { slug, song } = params;

  const group = data.find((group) => group.slug === slug);

  const songData = group?.songs?.find((i) => i.slug === song);

  return (
    <div className="flex min-h-screen flex-col md:flex-row justify-center fixed w-full">
      <div className="w-1/4 h-screen overflow-y-auto bg-[#040504]">
        <div className="py-3 pt-7 pl-5">
          <span className="text-white font-bold text-2xl">Artists</span>
        </div>
        <GroupList />
      </div>
      <div className="w-full border-l h-screen overflow-auto">
        <div className="">
          <div className="py-7 relative w-full" style={{ paddingTop: "25%" }}>
            <div className="flex flex-row items-center pl-7 z-10 absolute bottom-5">
              <Image
                src={songData?.image!}
                alt="album cover"
                width={200}
                height={200}
                className="rounded-md"
              />
              <div className="flex items-start flex-col text-white pl-4 text-white">
                <span className="text-8xl font-bold ">{songData?.name}</span>
                <span className="text-2xl uppercase text-gray-200 font-normal pl-1">
                  {songData?.album}
                </span>
              </div>
            </div>
            <Image
              src={group?.banner!}
              alt="banner image"
              fill
              className="object-cover object-top filter brightness-50"
            />
          </div>
        </div>
        <div className="bg-[#0C0D0E] mb-5">
          <div className="flex flex-col mx-8 z-20 pt-5">
            {songData?.shows &&
              songData?.shows.map((show) => (
                <div key={show.id} className="pb-12">
                  <span className="text-white font-bold text-2xl">
                    {show.name}
                  </span>
                  <div className="grid grid-cols-1 gap-y-6 md:grid-cols-3 pt-4">
                    <ShowList
                      videos={show.videos}
                      song={song}
                      group={group?.slug}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
