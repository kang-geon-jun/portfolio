import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NUM_DROPS = 50; // 빗방울 개수

// 랜덤 값 생성 함수
const random = (min, max) => Math.random() * (max - min) + min;

const Raindrop = ({ id }) => {
  const startX = random(0, window.innerWidth); // 시작 X 위치
  const duration = random(1, 2.5); // 빠른 낙하 시간
  const size = random(5, 10); // 빗방울 크기
  const delay = random(0, 2); // 애니메이션 지연

  return (
    <motion.div
      initial={{ y: -50, x: startX, opacity: 0.8 }}
      animate={{
        y: window.innerHeight + 50,
        x: startX + random(-10, 10), // 약간의 바람 효과
        opacity: [0.8, 1, 0.8], // 자연스러운 투명도 변화
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity, // 무한 반복
        repeatType: "loop",
        ease: "linear",
      }}
      className="absolute text-blue-400"
      style={{
        fontSize: `${size}px`,
      }}
    >
      💧
    </motion.div>
  );
};

export default function FallingRain() {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    setDrops(new Array(NUM_DROPS).fill(0));
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
      {drops.map((_, i) => (
        <Raindrop key={i} id={i} />
      ))}
    </div>
  );
}
