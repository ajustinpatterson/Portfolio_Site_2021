import { motion } from 'framer-motion';

import profile from '../../assets/Profile.jpg';
import brackets from '../../assets/brackets-curly.svg';
import backend from '../../assets/server-network-alt.svg';
import tools from '../../assets/wrench.svg';
import care from '../../assets/heart.svg';

import './FrontPage.scss';

import { frontPageBlurbs } from '../../master';

type Skill = {
  title: string;
  details: string[];
};

const FrontPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="container">
        <div className="text">
          <h1 className="my-name">Justin Patterson</h1>
          <h4>FULL STACK SOFTWARE DEVELOPER</h4>
          {frontPageBlurbs.map((blurb: string, index: number) => (
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
            style={{ maxWidth: '30%' }}
          />
          <h3>Front-end</h3>
          <ul id="specific-skills">
            <li>React/React Native/Redux</li>
            <li>Angular</li>
            <li>Storybook</li>
            <li>SASS/CSS</li>
            <li>FramerMotion</li>
          </ul>
        </div>
        <div id="main-skill">
          <img
            id="back-end"
            src={backend}
            alt="back-end"
            style={{ maxWidth: '40%' }}
          />
          <h3>Back-end</h3>
          <ul id="specific-skills">
            <li>Express</li>
            <li>RESTful APIs</li>
            <li>GraphQL/Apollo</li>
            <li>SQL/Sequelize</li>
            <li>MongoDB/ Mongoose</li>
          </ul>
        </div>
        <div id="main-skill-tools">
          <img id="tools" src={tools} alt="tools" style={{ maxWidth: '45%' }} />
          <h3>Tools</h3>
          <ul id="specific-skills">
            <li>Git</li>
            <li>Typescript</li>
            <li>Figma</li>
            <li>Docker</li>
            <li>Mocha/Chai/Jest</li>
          </ul>
        </div>
        <div id="main-skill-care">
          <img id="care" src={care} alt="care" style={{ maxWidth: '45%' }} />
          <h3>Soft Stuff</h3>
          <ul id="specific-skills">
            <li>Agile methodologies</li>
            <li>Highly developed presenter</li>
            <li>Collaboration is learning</li>
            <li>Listening is primary</li>
            <li>Curiosity drives everything</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default FrontPage;
