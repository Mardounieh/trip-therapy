import { motion } from "framer-motion";
import Hero from "./Hero"
import Residence from "./Residence";
import Shopping from "./Shopping";
import Touring from "./Touring";
import SocialProof from "./SocialProof";

const Landing = () => {
  return (
    <motion.article
      initial={{ y: 10, opacity: 0.5 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col w-full items-center justify-center z-20"
    >
      <Hero />
      <Residence />
      <Shopping />
      <Touring />
      <SocialProof />
    </motion.article>
  );
}

export default Landing