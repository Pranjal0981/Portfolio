// Parallax.jsx
import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services",
      }}
    >
      <motion.h1 style={{ y: yText ,fontSize:'60px'}}>
        {type === "services" ? "Our Services" : "What We Did?"}
      </motion.h1>
      <motion.div
        className="sun"
        style={{
          y: yBg,
          backgroundImage: `url(${type === "services" ? "/supreme_court.jpeg" : "/supreme_court.jpeg"})`,
        }}
      ></motion.div>
    
    </div>
  );
};

export default Parallax;
