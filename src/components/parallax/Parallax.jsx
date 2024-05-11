import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [1, 1], [100, 110]);
  const scaleStars = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%)"
            : "radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%)",
      }}
    >
      <motion.h1
        style={{
          y: yText,
          opacity: scrollYProgress,
        
        }}
      >
        {type === "services" ? "Our Services" : "What We Did?"}
      </motion.h1>
      <motion.div
        className="mountains"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <motion.div
        className="planets"
        style={{
          backgroundImage: `url(${type === "services" ? "/supreme_court.jpeg" : "/supreme_court.jpeg"})`,
        }}
        initial={{ opacity: 0, scale: 0.5, y: "-10vh" }} // Adjusting initial position for responsiveness
        animate={{ opacity: 1, scale: 1, y: "0" }} // Adjusting animation for responsiveness
        transition={{ duration: 1, delay: 0.5 }}
      ></motion.div>
      <motion.div
        className="stars"
        style={{
          backgroundImage: "url('/supreme_court.jpeg')",
          scale: scaleStars,
        }}
        initial={{ opacity: 0, scale: 0.5 }} // No need to adjust position for stars
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      ></motion.div>
    </div>
  );
};

export default Parallax;
