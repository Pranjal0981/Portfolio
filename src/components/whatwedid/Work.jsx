import { useEffect } from "react";
import "./work.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Work = () => {
    const containerAnimation = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true });
 
    useEffect(() => {
        if (inView) {
            containerAnimation.start({
                opacity: 1,
                y: 0,
                transition: {
                    staggerChildren: 0.1, // Stagger the appearance of each box
                },
            });
        }
    }, [inView, containerAnimation]);
    const handleClick=()=>{

        const contact = document.getElementById("Contact")
        contact.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div ref={ref} className="listContainer">
            <motion.div className="box" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 50 }} animate={containerAnimation}>
                <h2>45+ Years of Experience</h2>
                <p>
                    Our seasoned lawyers have over 45 years of combined experience in various legal fields. Trust our expertise to handle your case effectively and efficiently.
                </p>
                <button onClick={handleClick}>Consult Now</button>
            </motion.div>
            <motion.div className="box" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 50 }} animate={containerAnimation}>
                <h2>1000+ Clients Served</h2>
                <p>
                    We have successfully represented over 1000 clients, achieving favorable outcomes and ensuring their legal rights are protected. Join our satisfied clientele today.
                </p>
                <button onClick={handleClick}>Get Legal Help</button>
            </motion.div>
            <motion.div className="box" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 50 }} animate={containerAnimation}>
                <h2>Compassionate Family Law Support</h2>
                <p>
                    From divorce proceedings to child custody disputes, our family law attorneys provide compassionate support and expert legal guidance during difficult times, ensuring your family's best interests are upheld.
                </p>
                <button onClick={handleClick}>Learn More</button>
            </motion.div>
            <motion.div className="box" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 50 }} animate={containerAnimation}>
                <h2>Strategic Business Law Solutions</h2>
                <p>
                    Our business lawyers offer strategic legal solutions to assist your company with contracts, disputes, and other legal matters. Let us help your business thrive and succeed.
                </p>
                <button onClick={handleClick}>Consultation</button>
            </motion.div>
        </div>
    );
}

export default Work;
