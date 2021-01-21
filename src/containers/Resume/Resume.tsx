import React from 'react';
import { motion } from 'framer-motion';

import './Resume.scss';

const Resume = () => {
  return (
    <motion.div id="resume">
      <iframe
        title="C/V"
        className="resume"
        src="https://drive.google.com/file/d/1Ugr2CoE8B3jVv3Mus88yKNBJYJuIdpbT/preview"
        allowFullScreen={true}
      ></iframe>
    </motion.div>
  );
};

export default Resume;
