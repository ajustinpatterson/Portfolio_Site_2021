import React from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

import './Contact.scss';

const Contact = () => {
  const sendEmail = (event: any) => {
    event.preventDefault();

    emailjs
      .sendForm(
        'site-contact-form',
        'template_wckxt9w',
        event.target,
        'user_5meM8iqMXVX0yYwvckqiz',
      )
      .then(
        (data) => {
          console.log(data.text);
        },
        (err) => {
          console.log(err.text);
        },
      );
  };

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <form action="" onSubmit={sendEmail}>
        <h2>Drop me a line!</h2>
        <input type="hidden" name="contact_number" />

        <div className="personal-info">
          <input
            placeholder="Your name"
            type="text"
            name="user_name"
            style={{ width: '40%' }}
            tabIndex={1}
            required
          />

          <input
            placeholder="Your Email Address"
            type="email"
            name="user_email"
            style={{ width: '40%' }}
            tabIndex={2}
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Type your message here...."
          style={{ height: '50%', width: '89%' }}
          tabIndex={5}
          required
        ></textarea>

        <button type="submit" value="Send" data-submit="...Sending">
          Send
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
