import { motion } from 'framer-motion';

import resume from '../../assets/CV-Justin-Patterson-2026.png';

import './Resume.scss';

const Resume = () => {
  return (
    <motion.div id="resume" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <img src={resume} alt="C/V" className="resume" />
    </motion.div>
  );
};

export default Resume;
