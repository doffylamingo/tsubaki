"use client";

import { motion } from "framer-motion";
import { data } from "@/data";
import Group from "./Group";

export default function GroupList() {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      {data?.map((group: any) => (
        <Group
          key={group.id}
          name={group.name}
          slug={group.slug}
          image={group.image}
        />
      ))}
    </motion.div>
  );
}
