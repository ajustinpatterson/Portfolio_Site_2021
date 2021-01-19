import React from 'react';
import { motion } from 'framer-motion';

import './Portfolio.scss';

import swift from '../../assets/swift-logo-big.png';
import light from '../../assets/light_box.png';
import simple from '../../assets/simplefi-logo-transp.png';

const Portfolio = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <div className="portfolio-container">
        <h1 className="title">Portfolio</h1>
        <div className="portfolio-wrapper">
          <div className="project">
            <img
              className="project-img"
              style={{ width: '35%' }}
              src={swift}
              alt="placeholder"
            />
            <div className="project-text">
              <a href="https://github.com/ajustinpatterson/Swift-Video-Meetings">
                <h2>Swift Video Meetings</h2>
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
            <img
              className="project-img"
              style={{ width: '25%', marginLeft: '5%' }}
              src={light}
              alt="placeholder"
            />
            <div className="project-text" style={{ marginLeft: '5%' }}>
              <a href="https://github.com/ajustinpatterson/light-box-solo-project">
                <h2>light_box</h2>
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
            <img
              className="project-img"
              style={{ width: '20%', marginLeft: '7%' }}
              src={simple}
              alt="placeholder"
            />
            <div className="project-text" style={{ marginLeft: '8%' }}>
              <a href="https://github.com/raphael-mazet/SimpleFi">
                <h2>SimpleFi</h2>
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
