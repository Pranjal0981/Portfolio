import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: "100%", // Start off-screen to the right
  },
  animate: {
    x: "-100%", // Move to off-screen to the left
    transition: {
      repeat: Infinity,
      duration: 20,
      ease: "linear", // Linear easing for smooth motion
    },
  },
};

const rotationVariants = {
  animate: {
    rotate: 360, // Rotate 360 degrees
    transition: {
      duration: 10, // Duration of rotation animation
      repeat: Infinity, // Repeat infinitely
      ease: "linear", // Linear easing for smooth rotation
    },
  },
};

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("Contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWork = () => {
    const Work = document.getElementById("Work");
    Work.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>WE ARE ACV LEGAL</motion.h2>
          <motion.h1 variants={textVariants}>"ACV  LEGAL"</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} onClick={scrollToWork}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants} onClick={scrollToContact}>
              Contact Us
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        ACV LEGAL
      </motion.div>
      <div className="imageContainer">
        <motion.img
          src="/newHero.png"
          alt=""
          variants={rotationVariants}
          animate="animate"
        />
      </div>
    </div>
  );
};

export default Hero;
