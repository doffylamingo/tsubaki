"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { lyrics as data } from "@/data/lyrics";

interface LyricsDisplayerProps {
  currentTime: number;
  songData: any;
}

export default function LyricsDisplayer({
  currentTime,
  songData,
}: LyricsDisplayerProps) {
  let timeNow = currentTime * 1000;

  const song = data.find((song) => song.slug === songData.slug)?.lyrics!;

  const times = song.map((lyric) => parseInt(lyric.timestamp));
  const lyrics = song.map((lyric) => lyric.lyrics)!;

  let next = times.findIndex((time) => time > timeNow);
  next = next < 0 ? times.length : next;

  const currentLyric = lyrics[next - 1] || "";
  const previousLyric = lyrics[next - 2] || "";
  const nextLyric = lyrics[next] || "";

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="relative w-full h-full">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={songData.image}
              alt="Album Cover"
              fill
              className="cover scale-100 blur-md opacity-75 z-[-10] filter brightness-75"
            />
            <div className="fixed flex items-center h-1/2 justify-center text-white z-10">
              <AnimatePresence>
                <div className="w-full h-60 text-left px-14 space-y-4">
                  <motion.div
                    key={next - 2}
                    layoutId={(next - 2).toString()}
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                    className="block h-[36px] w-full text-3xl text-[#b7b7a4]/50 font-semibold"
                  >
                    {previousLyric}
                  </motion.div>
                  <motion.div
                    key={next - 1}
                    layoutId={(next - 1).toString()}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="glow text-white text-3xl font-semibold"
                  >
                    {currentLyric}
                  </motion.div>
                  <motion.div
                    key={next}
                    layoutId={next.toString()}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-[#b7b7a4]/50 text-3xl font-semibold"
                  >
                    {nextLyric}
                  </motion.div>
                  <motion.div
                    key={next + 1}
                    layoutId={(next + 1).toString()}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-[#b7b7a4]/50 text-3xl font-semibold"
                  >
                    {lyrics[next + 1]}
                  </motion.div>
                  {next + 1 > times.length && (
                    <motion.div
                      key={next + 2}
                      layoutId={(next + 2).toString()}
                      initial={{ opacity: 0 }}
                      className="text-[#b7b7a4]/50 text-3xl font-semibold h-[36px] w-full"
                    >
                      {lyrics[0]}
                    </motion.div>
                  )}
                  {next + 2 && (
                    <motion.div
                      key={next + 2}
                      layoutId={(next + 2).toString()}
                      initial={{ opacity: 0 }}
                      className="text-[#b7b7a4]/50 text-3xl font-semibold"
                    >
                      {lyrics[next + 2]}
                    </motion.div>
                  )}
                </div>
              </AnimatePresence>
            </div>
          </div>
          <div className="absolute bottom-5 left-5 flex items-center ">
            <Image
              src={songData.image}
              alt="Album Cover"
              height={100}
              width={100}
              className="rounded-md"
            />
            <div className="flex items-start  flex-col text-white pl-2">
              <span className="text-2xl font-bold">{songData.name}</span>
              <span className="text-base">{songData.album}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
