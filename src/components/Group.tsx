import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Group(group: any) {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="py-3 pl-5 group"
    >
      <Link href={`/${group.slug}`}>
        <p className="text-sm font-bold text-gray-600">{group.id}</p>
        <div className="flex flex-row items-center">
          <Image
            src={group.image}
            alt="album cover"
            width={50}
            height={50}
            className="rounded-md transition duration-300 ease-in-out group-hover:scale-[1.15]"
          />
          <div className="flex items-start flex-col text-[#FCFCFC] pl-4 group/text">
            <span className="text-sm font-bold group-hover/text:decoration-solid group-hover/text:underline">
              {group.name}
            </span>
            <span className="text-xs lowercase text-[#F9F9F9] tracking-wide font-normal group-hover/text:decoration-solid group-hover/text:underline">
              @{group.slug}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
