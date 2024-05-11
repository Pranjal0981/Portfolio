import React, { useEffect } from "react";
import "./services.scss";
import { motion, useAnimation } from "framer-motion";

const Services = () => {
  const textAnimation = useAnimation();
  const titleAnimation = useAnimation();
  const listAnimation = useAnimation();

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
          Welcome to our law firm, where we provide comprehensive legal solutions to protect your rights and interests. With a team of experienced lawyers, we are dedicated to serving you with professionalism and integrity.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" initial={{ opacity: 0, y: 50 }} animate={titleAnimation} transition={{ duration: 1 }}>
        <div className="title">
          <img src="https://m.media-amazon.com/images/I/516ejz7VgML._AC_UY1100_.jpg" alt=""  className="advocate"/>
          <h1>
            <b>Experienced</b> Lawyers
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your</b> Legal Needs
          </h1>
          <button>LEARN MORE</button>
        </div>
      </motion.div>
     
    </div>
  );
};

export default Services;
