import React from 'react';
import { motion } from 'framer-motion';

import resume from '../../assets/Justin_Patterson_Resume_JPG.jpg';

import './Resume.scss';

const Resume = () => {
  return (
    <motion.div id="resume" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <img src={resume} alt="C/V" className="resume" />
    </motion.div>
  );
};

export default Resume;
