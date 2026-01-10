import { motion } from 'framer-motion';

import profile from '../../assets/Profile.jpg';
import brackets from '../../assets/brackets-curly.svg';
import backend from '../../assets/server-network-alt.svg';
import tools from '../../assets/wrench.svg';
import care from '../../assets/heart.svg';

import './FrontPage.scss';

import labels from '../../master.json';

const FrontPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="container">
        <div className="text">
          <h1 className="my-name">Justin Patterson</h1>
          <h4>FULL STACK SOFTWARE DEVELOPER</h4>
          {labels.frontPageBlurbs.map((blurb: string, index: number) => (
            <p key={index} id="blurb">
              {blurb}
            </p>
          ))}
        </div>
        <img
          src={profile}
          className="profile-pic"
          alt="profile"
          title="Photo by Berta Vilanova :)"
        />
      </div>

      <div className="skill-trees">
        <div id="main-skill">
          <img
            id="unicoder"
            src={brackets}
            alt="unicoder"
            className="skill-img"
          />
          <h3>{labels.skills[0].title}</h3>
          <ul id="specific-skills">
            {labels.skills[0].items.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div id="main-skill">
          <img
            id="back-end"
            src={backend}
            alt="back-end"
            className="skill-img"
          />
          <h3>{labels.skills[1].title}</h3>
          <ul id="specific-skills">
            {labels.skills[1].items.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div id="main-skill-tools">
          <img id="tools" src={tools} alt="tools" className="skill-img" />
          <h3>{labels.skills[2].title}</h3>
          <ul id="specific-skills">
            {labels.skills[2].items.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div id="main-skill-care">
          <img id="care" src={care} alt="care" className="skill-img" />
          <h3>{labels.skills[3].title}</h3>
          <ul id="specific-skills">
            {labels.skills[3].items.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default FrontPage;
