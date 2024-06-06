import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './work.scss';

const Work = () => {
    const containerAnimation = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            containerAnimation.start({
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.3, // Adjust the transition duration
                },
            });
        }
    }, [inView, containerAnimation]);

    const handleClick = () => {
        const contact = document.getElementById('Contact');
    };

    return (
        <>
            <div ref={ref} className="listContainer">
                <motion.div
                    className="box"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={containerAnimation}
                >
                    <h2>Civil Cases</h2>
                    <p>
                        Property disputes: Conflicts over property ownership or possession.
                        Contract disputes: Disagreements over the terms or performance of a contract.
                        Torts: Cases involving harm caused by one party to another, such as negligence or defamation.
                        Family matters: Issues like divorce, child custody, and maintenance.
                    </p>
                    <button onClick={handleClick}>Consult Now</button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={containerAnimation}
                >
                    <h2>Criminal Cases</h2>
                    <p>
                        Criminal cases involve actions that are considered offenses against the state or public.
                        Offenses against persons: Such as murder, assault, and kidnapping.
                        Offenses against property: Such as theft, burglary, and vandalism.
                        White-collar crimes: Such as fraud, embezzlement, and bribery.
                        Cybercrimes: Such as hacking and online fraud.
                    </p>
                    <button onClick={handleClick}>Get Legal Help</button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={containerAnimation}
                >
                    <h2>Constitutional Cases</h2>
                    <p>
                        These cases involve interpretation and application of the Constitution of India.
                        Fundamental rights:
                        Cases related to the violation of rights guaranteed under the Constitution.
                        Federal disputes:
                        Conflicts between different levels of government (e.g., state vs. central government).
                        Election disputes:
                        Issues related to the conduct and validity of elections.
                    </p>
                    <button onClick={handleClick}>Learn More</button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={containerAnimation}
                >
                    <h2>Administrative Cases</h2>
                    <p>
                        Administrative cases involve disputes over decisions made by government agencies or bodies.
                        Service matters: Disputes involving government employees and their employment conditions.
                        Regulatory issues: Challenges to regulations or administrative decisions affecting individuals or businesses.
                    </p>
                    <button onClick={handleClick}>Consultation</button>
                </motion.div>
            </div>
            <div ref={ref} className="listContainer">
                <motion.div
                    className="box"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={containerAnimation}
                >
                    <h2>Family Cases</h2>
                    <p>
                        Family law cases deal with matters related to family relationships.
                        Marriage and divorce: Legal dissolution of marriage and related issues like alimony.
                        Child custody and support: Determination of custody and financial support for children.
                        Adoption: Legal process of adopting a child
                    </p>
                    <button onClick={handleClick}>Consult Now</button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={containerAnimation}
                >
                    <h2>Environmental Cases</h2>
                    <p>
                        These cases address issues related to environmental protection and conservation.
                        Pollution control: Disputes over pollution and its impact on health and the environment.
                        Conservation efforts: Cases related to the preservation of natural resources and wildlife.
                    </p>
                    <button onClick={handleClick}>Learn More</button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={containerAnimation}
                >
                    <h2>The Arbitration and Conciliation</h2>
                    <p>
                        Arbitration and conciliation are effective ADR mechanisms that offer parties a flexible, efficient, and confidential way to resolve disputes outside the traditional court system.
                        The Arbitration and Conciliation Act, 1996 provides the legal foundation for both arbitration and conciliation in India.
                    </p>
                    <button onClick={handleClick}>Consultation</button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={containerAnimation}
                >
                    <h2>Experience</h2>
                    <p>
                        With over more than five decades of combined experience across various legal domains, our seasoned lawyers are well-equipped to handle your case with precision and efficacy. You can trust in our expertise to navigate through the complexities of the legal system and ensure that your interests are safeguarded. Let us put our knowledge and skills to work for you, providing you with the representation you deserve.
                    </p>
                    <button onClick={handleClick}>Get Legal Help</button>
                </motion.div>
            </div>
        </>
    );
};

export default Work;
