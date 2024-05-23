import React, { useEffect } from "react";
import "./services.scss";
import { motion, useAnimation } from "framer-motion";
import Slider from "./Slider";

const Services = () => {
  const textAnimation = useAnimation();
  const titleAnimation = useAnimation();
  const listAnimation = useAnimation();

  const handleClick = () => {
    const contact = document.getElementById("Contact");
    contact.scrollIntoView({ behavior: "smooth" });
  };

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
      <motion.div
        className="textContainer"
        initial={{ opacity: 0, y: 100 }}
        animate={textAnimation}
        transition={{ duration: 1 }}
      >
        <p>
          At our law firm, we offer comprehensive legal solutions designed to protect your rights and interests. Whether you are facing a complex legal challenge or simply need expert advice, our dedicated team is here to provide the guidance and support you need. With our extensive experience and commitment to excellence, we ensure that your legal matters are handled with the utmost professionalism and care. 
        </p>
        <hr />
      </motion.div>
      <motion.div
        className="titleContainer"
        initial={{ opacity: 0, y: 50 }}
        animate={titleAnimation}
        transition={{ duration: 1 }}
      >
        <div className="title">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDGE7aRm9DDfxgNQCEC8MOc40EfuslLygkjA&usqp=CAU"
            alt=""
          />
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
      <motion.div
        className="listContainer"
        initial={{ opacity: 0, y: 50 }}
        animate={listAnimation}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <h2>Consultation and Advice</h2>
          <p>
            Initial legal advice on a particular issue.
Guidance on the legal implications of actions or decisions.
          </p>
          <button onClick={handleClick}>Consult Now</button>
        </motion.div>



        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <h2>Document Preparation</h2>
          <p>
            Drafting contracts, wills, trusts, and other legal documents.
            Reviewing and revising documents to ensure they meet legal standards
          </p>
          <button onClick={handleClick}>Consult Now</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <h2>Representation in Court</h2>
          <p>
            Representing clients in civil, criminal, and family court cases.
Handling litigation, including filing lawsuits, responding to lawsuits, and representing clients during trials.
          </p>
          <button onClick={handleClick}>Consult Now</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <h2>Negotiation and Mediation</h2>
          <p>
            Negotiating settlements in disputes or legal matters.
            Acting as mediators to help parties reach a resolution outside of court.
          </p>
          <button onClick={handleClick}>Consult Now</button>
        </motion.div>

        
   
    
      </motion.div>


      <motion.div
        className="listContainer"
        initial={{ opacity: 0, y: 50 }}
        animate={listAnimation}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <h2>Transaction Assistance</h2>
          <p>
            Assisting in real estate transactions, mergers, and acquisitions.
            Advising on business formation, such as incorporating a company.

          </p>
          <button onClick={handleClick}>Consult Now</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <h2>Specialized Legal Services
</h2>
          <p>
            Intellectual property protection, including patents, trademarks, and copyrights. Protecting your things to yourself only.
          </p>
          <button onClick={handleClick}>Consult Now</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <h2>Family law </h2>
          <p>
            Contested and Uncontested Divorce: Handling both contested divorces, where parties disagree on terms, and uncontested divorces, where both parties agree.
          </p>
          <button onClick={handleClick}>Consult Now</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <h2>Tax law advice 
</h2>
          <p>
            Individual Tax Planning: Helping individuals plan their taxes to minimize liabilities, including advice on deductions, credits etc..........
          </p>
          <button onClick={handleClick}>Consult Now</button>
        </motion.div>




      </motion.div>
    </div>
  );
};

export default Services;
