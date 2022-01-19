import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import './About.scss';

import inariPic from '../../assets/inari.jpg';

const About = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="about-container">
        <div className="pic-and-hello">
          <img className="about-image" src={inariPic} alt="placeholder"></img>
          <div className="intro-body-text">
            <h2 className="intro-title" style={{ textAlign: 'center' }}>
              This is me
            </h2>
            <p id="text">
              in Japan, in 2018. You could say I've got a bit of wanderlust.
              I've called a few places home. Born in Ventura County, California,
              raised in Eugene and Portland, Oregon, three years in China, and
              now based in Barcelona.
            </p>
          </div>
        </div>
        <div className="about-description">
          <p id="text">
            My developer journey started in 2018, learning a bit
            of Java on Youtube. It quickly became an addiction once I started
            fiddling with JavaScript at the end of 2019.
          </p>
          <p id="text">
            After enrolling in a bootcamp and getting involved in some front end
            <Link to="/Portfolio"> challenges, </Link> I'm now working as a full-stack engineer at a <a
              href="https://www.openbravo.com"
              rel="noreferrer"
              target="_blank"
            >
              {' '}
              great company
              {' '}
              </a>
             on a sprawling commerce solution with everything from SQL scripts to Java.
          </p>
          <p id="text">
            I've lived more than one professional life, including a long stint in
            the service industry, running a modest
            <a
              href="https://pj9434.wixsite.com/alan-j-patterson"
              rel="noreferrer"
              target="_blank"
            >
              {' '}
              wedding photography business
            </a>
            , and teaching English abroad.
          </p>
          <p id="text">
            With a strong foundation in agile development, background in education and service, and having been a one-man
            business operation, I'm committed to writing the most elegant,
            easily-maintainable code possible, and am capable of communicating
            handily both on the technical and product level. But my greatest
            strength is teamwork.
          </p>
          <p id="text">
            In my free time, I'm known to walk around Barcelona and snap photos
            with my old Fuji X-10 for my super old
            <a
              href="http://cancionencantada.tumblr.com"
              rel="noreferrer"
              target="_blank"
            >
              {' '}
              travel/photo blog
            </a>
            . Words are my first passion, and I spend as much time reading and
            writing them as I can. I'm also a wannabe blues guitarist, and fan
            of vintage bicycles (what can I say? I guess I just really like
            fixing things :) Please do not hesitate to
            <a href="mailto:ajustinpatterson@outlook.com"> get in touch</a> if I
            can be of any service to you.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
