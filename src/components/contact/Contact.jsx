import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import axios from 'axios'; // Import axios

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    axios.post('https://portfolio-mail-652h.onrender.com/api/send-email', formData)
      .then((response) => {
        console.log('Email sent successfully');
        setSuccess(true);
        setError(false);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setError(true);
        setSuccess(false);
      });
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Book Your Appointment Now</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>acvlegalservices@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3242278600746!2d77.23385567543178!3d28.620043184647805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2d43cc7470d%3A0xdcab392ce90a9f5f!2sTilak%20Marg%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1716485135978!5m2!1sen!2sin" width={600} height={300}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>          
                  </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+91 8527573521</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          {/* Your SVG */}
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.2 }}
        >
          <input type="text" required placeholder="Name" name="user_name" value={formData.user_name} onChange={handleChange} />
          <input type="email" required placeholder="Email" name="user_email" value={formData.user_email} onChange={handleChange} />
          <textarea rows={8} placeholder="Message" name="message" value={formData.message} onChange={handleChange} />
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
