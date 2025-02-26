import { motion } from "framer-motion";

const KaleidoscopeButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      Hello, World!
    </motion.div>
  );
};

export default KaleidoscopeButton;