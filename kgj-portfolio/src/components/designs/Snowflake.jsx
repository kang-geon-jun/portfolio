import { useEffect, useState } from "react";
import { motion, easeInOut } from "framer-motion";

const NUM_SNOWFLAKES = 50; // 눈송이 개수
const SNOWFLAKE = "❄️"; // 눈송이 이모지

const random = (min, max) => Math.random() * (max - min) + min;

const Snowflake = ({ id }) => {
  const startX = random(0, window.innerWidth);
  const duration = random(5, 15); // 천천히 내리기
  const size = random(10, 30); // 작은 눈송이 크기
  const delay = random(0, 5);

  return (
    <motion.div
      initial={{ y: -100, x: startX, opacity: 0 }}
      animate={{
        y: window.innerHeight + 100,
        x: startX + random(-50, 50), // 좌우로 흔들리면서 떨어짐
        opacity: [0, 1, 1, 0], // 자연스럽게 나타났다 사라짐
        rotate: [0, random(-15, 15), 0], // 살짝 회전 효과
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: easeInOut,
      }}
      className="absolute text-blue-200"
      style={{
        fontSize: `${size}px`,
      }}
    >
      {SNOWFLAKE}
    </motion.div>
  );
};

export default function FallingSnow() {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    setSnowflakes(new Array(NUM_SNOWFLAKES).fill(0));
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
      {snowflakes.map((_, i) => (
        <Snowflake key={i} id={i} />
      ))}
    </div>
  );
}
