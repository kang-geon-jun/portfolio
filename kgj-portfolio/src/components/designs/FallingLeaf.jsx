import { useEffect, useState } from "react";
import { motion, easeInOut } from "framer-motion"; 

const NUM_LEAVES = 30;
const LEAF_EMOJIS = ["🍂", "🍁"];

const random = (min, max) => Math.random() * (max - min) + min;

const FallingLeaf = ({ id }) => {
  const startX = random(0, window.innerWidth);
  const duration = random(5, 12);
  const size = random(20, 40);
  const delay = random(0, 5);
  const leafType = LEAF_EMOJIS[Math.floor(random(0, LEAF_EMOJIS.length))];

  return (
    <motion.div
      initial={{ y: -100, x: startX, opacity: 0 }}
      animate={{
        y: window.innerHeight + 100,
        x: startX + random(-200, 200),
        opacity: [0, 1, 1, 0],
        rotate: [0, random(-45, 45), random(-90, 90), 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: easeInOut, // easeInOut으로 변경
      }}
      className="absolute"
      style={{
        fontSize: `${size}px`,
      }}
    >
      {leafType}
    </motion.div>
  );
};

export default function FallingLeaves() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    setLeaves(new Array(NUM_LEAVES).fill(0));
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
      {leaves.map((_, i) => (
        <FallingLeaf key={i} id={i} />
      ))}
    </div>
  );
}
