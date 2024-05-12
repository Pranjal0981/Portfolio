import { useRef, useState } from "react";
import "./portfolio.scss";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Adv. Ashwain Mishra",
    img: "/ashwain_mishra.jpeg",
    position: "Senior Attorney",
    expertise: "Criminal Defense, Family Law",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellat unde ipsam. Animi iure tempora dolore fugit deleniti unde dignissimos eligendi ipsum odio nemo molestiae voluptatibus fuga commodi, sit eos!"
  },
  {
    id: 2,
    name: "Adv. Vaidruti Mishra",
    img: "/vaidruti_mishra.jpeg",
    position: "Associate Attorney",
    expertise: "Business Law, Contract Law",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellat unde ipsam. Animi iure tempora dolore fugit deleniti unde dignissimos eligendi ipsum odio nemo molestiae voluptatibus fuga commodi, sit eos!"
  },
  {
    id: 3,
    name: "Adv Rakesh Soni",
    img: "/rakesh_soni.jpeg",
    position: "Legal Consultant",
    expertise: "Personal Injury, Employment Law",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellat unde ipsam. Animi iure tempora dolore fugit deleniti unde dignissimos eligendi ipsum odio nemo molestiae voluptatibus fuga commodi, sit eos!"
  },
  {
    id: 4,
    name: "Adv. Sharad Rai",
    img: "/sharad_rai.jpeg",
    position: "Senior Partner",
    expertise: "Real Estate Law, Estate Planning",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellat unde ipsam. Animi iure tempora dolore fugit deleniti unde dignissimos eligendi ipsum odio nemo molestiae voluptatibus fuga commodi, sit eos!"
  },
];

const TeamMember = ({ member }) => {
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <motion.div className="imageContainer" style={{ y }}>
            <img src={member.img} alt={member.name} className="images" />
          </motion.div>
          <motion.div
            className={`textContainer mt ${isHovered ? "hovered" : ""}`}
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            onMouseLeave={() => setIsHovered(false)}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h2>{member.name}</h2>
            <p>{member.position}</p>
            <p>Areas of Expertise: {member.expertise}</p>
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="details"
                  style={{ overflowY: "hidden" }}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p>{member.details}</p>
                </motion.div>
              )}
            </AnimatePresence>
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Show details
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="progress">
        <h1>Our Team</h1>
      </div>
      {teamMembers.map((member) => (
        <TeamMember key={member.id} member={member} />
      ))}
    </div>
  );
};

export default Portfolio;
