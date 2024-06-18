import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Song(era: any) {
  const dummyPathParams = "izone";

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="group max-w-[175px] cursor-pointer "
    >
      <Link href={`${era.group}/${era.slug}`}>
        <Image
          src={era.image}
          alt="album cover"
          width={175}
          height={175}
          className="rounded-md transition duration-300 ease-in-out filter group-hover:brightness-75"
        />

        <div className="flex flex-col mt-2 group/text">
          <span className="text-sm font-bold text-[#FCFCFC] font-wrap  group-hover/text:decoration-solid group-hover/text:underline">
            {era.name}
          </span>
          <span className="text-sm uppercase text-[#F9F9F9] tracking-wide font-normal group-hover/text:decoration-solid group-hover/text:underline">
            {era.album}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
