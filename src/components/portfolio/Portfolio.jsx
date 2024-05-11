import { useRef, useState } from "react";
import "./portfolio.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Adv. Ashwain Mishra",
    img: "/ashwain_mishra.jpeg",
    position: "Senior Attorney",
    expertise: "Criminal Defense, Family Law",
    email: "ashwain@example.com",
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "Adv. Vaidruti Mishra",
    img: "/vaidruti_mishra.jpeg",
    position: "Associate Attorney",
    expertise: "Business Law, Contract Law",
    email: "vaidruti@example.com",
    phone: "123-456-7890",
  },
  {
    id: 3,
    name: "Adv Rakesh Soni",
    img: "/rakesh_soni.jpeg",
    position: "Legal Consultant",
    expertise: "Personal Injury, Employment Law",
    email: "rakesh@example.com",
    phone: "123-456-7890",
  },
  {
    id: 4,
    name: "Adv. Sharad Rai",
    img: "/sharad_rai.jpeg",
    position: "Senior Partner",
    expertise: "Real Estate Law, Estate Planning",
    email: "sharad@example.com",
    phone: "123-456-7890",
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
          <div
            className={`textContainer mt ${isHovered ? "hovered" : ""}`}
            ref={ref}
            onMouseLeave={() => setIsHovered(false)}
          >
            <h2>{member.name}</h2>
            <p>{member.position}</p>
            <p>Areas of Expertise: {member.expertise}</p>
            {isHovered && (
              <div className="details">
                <p>Email: {member.email}</p>
                <p>Phone: {member.phone}</p>
              </div>
            )}
            <button 
              onMouseEnter={() => setIsHovered(true)}
            >Contact {member.name}</button>
          </div>
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
        <TeamMember
          key={member.id}
          member={member}
        />
      ))}
    </div>
  );
};

export default Portfolio;
