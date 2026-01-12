import { motion } from 'framer-motion';

import profile from '../../assets/Profile.jpg';
import brackets from '../../assets/brackets-curly.svg';
import backend from '../../assets/server-network-alt.svg';
import tools from '../../assets/wrench.svg';
import care from '../../assets/heart.svg';

import './FrontPage.scss';

import labels from '../../master.json';

type Justin = {
  name: string;
  title: string;
  blurbs: string[];
};

type Skill = {
  title: string;
  image: string;
  details: string[];
};

const FrontPage = () => {
  const me: Justin = {
    name: labels.frontPage.name,
    title: labels.frontPage.title,
    blurbs: labels.frontPage.blurbs,
  };

  const frontEnd: Skill = {
    title: labels.frontPage.skills[0].title,
    image: brackets,
    details: labels.frontPage.skills[0].items,
  };

  const backEnd: Skill = {
    title: labels.frontPage.skills[1].title,
    image: backend,
    details: labels.frontPage.skills[1].items,
  };

  const devOps: Skill = {
    title: labels.frontPage.skills[2].title,
    image: tools,
    details: labels.frontPage.skills[2].items,
  };

  const softStuff: Skill = {
    title: labels.frontPage.skills[3].title,
    image: care,
    details: labels.frontPage.skills[3].items,
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="container">
        <div className="text">
          <h1 className="my-name">{me.name}</h1>
          <h4>{me.title}</h4>
          {me.blurbs.map((blurb: string, index: number) => (
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
            src={frontEnd.image}
            alt="unicoder"
            className="skill-img"
          />
          <h3>{frontEnd.title}</h3>
          <ul id="specific-skills">
            {frontEnd.details.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div id="main-skill">
          <img
            id="back-end"
            src={backEnd.image}
            alt="back-end"
            className="skill-img"
          />
          <h3>{backEnd.title}</h3>
          <ul id="specific-skills">
            {backEnd.details.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div id="main-skill-tools">
          <img
            id="tools"
            src={devOps.image}
            alt="tools"
            className="skill-img"
          />
          <h3>{devOps.title}</h3>
          <ul id="specific-skills">
            {devOps.details.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div id="main-skill-care">
          <img
            id="care"
            src={softStuff.image}
            alt="care"
            className="skill-img"
          />
          <h3>{softStuff.title}</h3>
          <ul id="specific-skills">
            {softStuff.details.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default FrontPage;
