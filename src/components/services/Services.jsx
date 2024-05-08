import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          At our law firm, we provide comprehensive legal solutions to protect
          your rights and interests.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/dribbble.png" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Experienced</motion.b>{" "}
            Lawyers
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Legal Needs
          </h1>
          <button>LEARN MORE</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Personal Injury</h2>
          <p>
            Our personal injury attorneys fight for fair compensation for
            victims of accidents and negligence.
          </p>
          <button>Consult Now</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Criminal Defense</h2>
          <p>
            Facing criminal charges? Our defense lawyers provide aggressive
            representation to protect your rights and freedom.
          </p>
          <button>Get Legal Help</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Family Law</h2>
          <p>
            From divorce to child custody disputes, our family law attorneys
            offer compassionate support and legal guidance during difficult
            times.
          </p>
          <button>Learn More</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Business Law</h2>
          <p>
            Our business lawyers assist with contracts, disputes, and other
            legal matters to help your business thrive and succeed.
          </p>
          <button>Consultation</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
