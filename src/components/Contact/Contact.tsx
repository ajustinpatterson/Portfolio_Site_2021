import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <form action="" method="post">
          <h3>Drop me a line!</h3>
          <h4>Contact us for custom quote</h4>
          <input placeholder="Your name" type="text" tabIndex={1} required />

          <input
            placeholder="Your Email Address"
            type="email"
            tabIndex={2}
            required
          />

          <input
            placeholder="Your Phone Number (optional)"
            type="tel"
            tabIndex={3}
            required
          />

          <input
            placeholder="Your Web Site (optional)"
            type="url"
            tabIndex={4}
            required
          />

          <textarea
            placeholder="Type your message here...."
            tabIndex={5}
            required
          ></textarea>

          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
