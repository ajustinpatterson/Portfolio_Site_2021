import React from 'react';
import { motion } from 'framer-motion';

import './Portfolio.scss';

import swift from '../../assets/swift-logo-big-500x500.png';
import light from '../../assets/light_box-logo.png';
import simple from '../../assets/simplefi-logo.png';

const Portfolio = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="portfolio-container">
        <h1 className="title">Portfolio</h1>
        <div className="portfolio-wrapper">
          <div className="project">
            <img className="project-img" src={swift} alt="placeholder" />
            <div className="project-text">
              <a
                href="https://github.com/ajustinpatterson/Swift-Video-Meetings"
                rel="noreferrer"
                target="_blank"
              >
                <h2 style={{ color: 'black' }}>Swift Video Meetings</h2>
              </a>
              <p className="tech-stack">
                Technologies: React, Typescript, Express, Sequelize, PostgreSQL,
                GraphQL/Apollo, socket.io, peerjs, WebRTC, Heroku, Docker, SASS,
                Google Auth
              </p>
              <p className="description">
                Swift Video Meetings is a video chat app focused on keeping
                things simple. The app is a minimal, cross-platform vehicle for
                fast, easy connections everywhere and anywhere. It generates
                rooms in real time as-necessary in order to streamline the video
                meeting experience. I worked as the front-end design lead in a
                team of three volunteers, and implemented a React framework in
                Typescript, as well as supporting the back-end team with
                deployment using Heroku and Docker.
              </p>
            </div>
          </div>
          <div className="project">
            <img className="project-img" src={light} alt="placeholder" />
            <div className="project-text">
              <a
                href="https://github.com/ajustinpatterson/light-box-solo-project"
                rel="noreferrer"
                target="_blank"
              >
                <h2 style={{ color: 'black' }}>light_box</h2>
              </a>
              <p className="tech-stack">
                Technologies: React Native/Expo, Express, Sequelize, PostgreSQL,
                Cloudinary
              </p>
              <p className="description">
                light_box is a photo-sharing and social networking app that
                centers photography itself as the main focus of the user
                experience. People looking for a photography-centric online
                community can upload photos in the 16x9 format and enjoy
                full-screen presentation, as well as add likes and comments to
                their favorites. I founded the project, and have continued to
                contribute to its development.
              </p>
            </div>
          </div>
          <div className="project">
            <img className="project-img" src={simple} alt="placeholder" />
            <div className="project-text">
              <a
                href="https://github.com/raphael-mazet/SimpleFi"
                rel="noreferrer"
                target="_blank"
              >
                <h2 style={{ color: 'black' }}>SimpleFi</h2>
              </a>
              <p className="tech-stack">
                Technologies: React, Typescript, JWT auth, Express, PostgreSQL,
                Ether.js
              </p>
              <p className="description">
                Simplefi is an investment portfolio tracker for decentralised
                finance on the Ethereum blockchain. I worked on translating the
                app from JS to Typescript and helped implement a JWT
                authentication system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
