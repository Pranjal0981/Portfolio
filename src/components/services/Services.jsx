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
          <img src="/dribbble.png" alt="" />
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
      <motion.div className="listContainer" initial={{ opacity: 0, y: 50 }} animate={listAnimation} transition={{ duration: 1 }}>
        <motion.div className="box" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <h2>45+ Years of Experience</h2>
          <p>
            Our seasoned lawyers have over 45 years of combined experience in various legal fields. Trust our expertise to handle your case effectively and efficiently.
          </p>
          <button>Consult Now</button>
        </motion.div>
        <motion.div className="box" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <h2>1000+ Clients Served</h2>
          <p>
            We have successfully represented over 1000 clients, achieving favorable outcomes and ensuring their legal rights are protected. Join our satisfied clientele today.
          </p>
          <button>Get Legal Help</button>
        </motion.div>
        <motion.div className="box" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <h2>Compassionate Family Law Support</h2>
          <p>
            From divorce proceedings to child custody disputes, our family law attorneys provide compassionate support and expert legal guidance during difficult times, ensuring your family's best interests are upheld.
          </p>
          <button>Learn More</button>
        </motion.div>
        <motion.div className="box" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <h2>Strategic Business Law Solutions</h2>
          <p>
            Our business lawyers offer strategic legal solutions to assist your company with contracts, disputes, and other legal matters. Let us help your business thrive and succeed.
          </p>
          <button>Consultation</button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
