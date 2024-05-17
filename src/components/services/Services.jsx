
import React, { useEffect } from "react";
import "./services.scss";
import { motion, useAnimation } from "framer-motion";
import Slider from "./Slider";

const Services = () => {
  const textAnimation = useAnimation();
  const titleAnimation = useAnimation();
  const listAnimation = useAnimation();
  const handleClick = () => {
   const contact= document.getElementById("Contact")
    contact.scrollIntoView({ behavior: 'smooth' })

  }
  useEffect(() => {
   
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > windowHeight * 0.1) {
        textAnimation.start({ opacity: 1, y: 0 });
      }

      if (scrollPosition > windowHeight * 0.5) {
        titleAnimation.start({ opacity: 1, y: 0 });
      }

      if (scrollPosition > windowHeight * 0.8) {
        listAnimation.start({ opacity: 1, y: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [textAnimation, titleAnimation, listAnimation]);

  return (
    <div className="services">
      <motion.div className="textContainer" initial={{ opacity: 0, y: 100 }} animate={textAnimation} transition={{ duration: 1 }}>
        <p>
          At our law firm, we provide comprehensive legal solutions to protect
          your rights and interests.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" initial={{ opacity: 0, y: 50 }} animate={titleAnimation} transition={{ duration: 1 }}>
        <div className="title">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDGE7aRm9DDfxgNQCEC8MOc40EfuslLygkjA&usqp=CAU" alt="" />
          <h1>
            <b>Experienced</b> Lawyers
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your</b> Legal Needs
          </h1>
          <button onClick={handleClick}>LEARN MORE</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" initial={{ opacity: 0, y: 50 }} animate={listAnimation} transition={{ duration: 1 }}>
        <motion.div className="box" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <h2>Personal Injury</h2>
          <p>
            Our personal injury attorneys fight for fair compensation for
            victims of accidents and negligence.
          </p>
          <button onClick={handleClick}>Consult Now</button>
        </motion.div>
        <motion.div className="box" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <h2>Criminal Defense</h2>
          <p>
            Facing criminal charges? Our defense lawyers provide aggressive
            representation to protect your rights and freedom.
          </p>
          <button onClick={handleClick}>Get Legal Help</button>
        </motion.div>
        <motion.div className="box" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <h2>Family Law</h2>
          <p>
            From divorce to child custody disputes, our family law attorneys
            offer compassionate support and legal guidance during difficult
            times.
          </p>
          <button onClick={handleClick}>Learn More</button>
        </motion.div>
      </motion.div>
      <Slider />

    </div>
  );
};

export default Services;
