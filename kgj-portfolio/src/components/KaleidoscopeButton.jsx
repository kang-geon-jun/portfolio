import { useState } from "react";
import { motion } from "framer-motion";

const KaleidoscopeButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="relative w-40 h-40">
      {/* 기본 중앙 버튼 */}
      <motion.button
        className="w-full h-full bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg transition-all ease-in-out duration-300"
        onClick={handleButtonClick}
        whileTap={{ scale: 0.95 }} // 클릭 시 크기 줄어드는 효과
      >
        About Me
      </motion.button>

      {/* 원형으로 배치되는 버튼들 */}
      {isActive && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          {/* 6개의 버튼을 원형으로 배치 */}
          {Array.from({ length: 6 }).map((_, index) => {
            const angle = (index * 360) / 6; // 각도 계산
            return (
              <motion.button
                key={index}
                className="w-16 h-16 bg-blue-500 text-white rounded-full absolute"
                style={{
                  transform: `rotate(${angle}deg) translate(120px) rotate(-${angle}deg)`,
                  transformOrigin: "center", // 원의 중심을 기준으로 변환
                }}
                initial={{ opacity: 0, scale: 0 }} // 처음엔 숨김
                animate={{ opacity: 1, scale: 1 }} // 애니메이션으로 보이게
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300,
                }} // 순차적인 애니메이션
              >
                Button {index + 1}
              </motion.button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default KaleidoscopeButton;
