import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Show({
  video,
  slug,
  group,
}: {
  video: any;
  slug: any;
  group: any;
}) {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="group max-w-[320px] cursor-pointer "
    >
      <Link href={`/${group}/${slug}/${video.id}`}>
        <Image
          src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
          alt="album cover"
          width={320}
          height={200}
          className="rounded-sm transition duration-300 ease-in-out filter group-hover:brightness-75"
        />

        <div className="flex flex-col mt-2 group/text">
          <span className="line-clamp-2 text-sm font-bold text-[#FCFCFC] font-wrap group-hover/text:decoration-solid group-hover/text:underline">
            {video.title}
          </span>
          <span className="text-sm uppercase text-[#F9F9F9] tracking-wide font-normal group-hover/text:decoration-solid group-hover/text:underline">
            {video.date}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
