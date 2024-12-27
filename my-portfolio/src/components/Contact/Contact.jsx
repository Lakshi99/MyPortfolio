// 



// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import styles from "./Contact.module.css";


// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
//         "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
//         form.current,
//         "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           alert("Message sent successfully!");
//         },
//         (error) => {
//           console.error(error.text);
//           alert("Failed to send message. Please try again.");
//         }
//       );

//     e.target.reset();
//   };

//   return (
//     <section className={styles.contactSection} id="contact">
//       <h2 className={styles.title}>Contact Me</h2>
      
//       <div className={styles.contactContainer}>
//       <p className="contact-description">
//         Have a question or want to work together? Feel free to drop me a message below.
//       </p>
      
//          <form ref={form} onSubmit={sendEmail} className={styles.form}>
//           <div className={styles.inputGroup}>
//            <label className={styles.label} htmlFor="name">
//              Name:
//             </label>
//             <input
//                type="text"
//               id="name"
//               name="user_name"
//               className={styles.input}
//               placeholder="Enter your name"
//              required
//            />
//            </div>
//            <div className={styles.inputGroup}>
//             <label className={styles.label} htmlFor="email">
//                Email:
//             </label>
//           <input
//               type="email"
//               id="email"
//               name="user_email"
//              className={styles.input}
//               placeholder="Enter your email"
//               required
//              />
//            </div>
//           <div className={styles.inputGroup}>
//             <label className={styles.label} htmlFor="message">
//                Message:
//              </label>
//             <textarea
//                id="message"
//              name="message"
//                className={styles.textarea}
//                placeholder="Enter your message"
//               required
//              />
//            </div>
//            <button type="submit" className={styles.button}>
//             Send Message
//            </button>
//          </form>
//          </div>

//      </section>
//   );
//  };

//  export default Contact;


import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
 import { FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
 import { FaGithub } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.title}>Contact Me</h2>
      <div className={styles.contactContainer}>
        {/* Left Side: Contact Information */}
        <div className={styles.contactInfo}>
          {/* <h3 className={styles.contactHeading}>Contact me</h3> */}
          <p className="contact-description">
         Have a question or want to work together? 
      </p>
      <p className="contact-description">
        Feel free to drop me a message below.
      </p>
          <div className={styles.infoItem}>
            { <FaPhone className={styles.icon} /> }
            <p>+94 70 2241169</p>
          </div>
          <div className={styles.infoItem}>
            {<FaEnvelope className={styles.icon} /> }
            <p>lakshikabandara601@gmail.com</p>
          </div>
          <h3 className={styles.contactHeading}>Connect with me</h3>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              { <FaFacebookF className={styles.socialIcon} /> }
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              { <FaGithub className={styles.socialIcon} /> }
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              {<FaLinkedinIn className={styles.socialIcon} /> }
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className={styles.contactForm}>
          <form ref={form} onSubmit={sendEmail} className={styles.form}>
            <input
              type="text"
              name="user_name"
              className={styles.input}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              className={styles.input}
              placeholder="Your E-mail"
              required
            />
            <textarea
              name="message"
              className={styles.textarea}
              placeholder="Type your message here..."
              required
            />
            <button type="submit" className={styles.button}>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
