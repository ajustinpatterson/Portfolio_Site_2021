import { motion } from 'framer-motion';

import profile from '../../assets/Profile.jpg';
import brackets from '../../assets/brackets-curly.svg';
import backend from '../../assets/server-network-alt.svg';
import tools from '../../assets/wrench.svg';
import care from '../../assets/heart.svg';

import './FrontPage.scss';

type Justin = {
  name: string;
  title: string;
  blurbs: string[];
};

type RawSkill = {
  title: string;
  items: string[];
};

type HydratedSkill = {
  title: string;
  image: string;
  items: string[];
};

type FrontPage = {
  me: Justin;
  skills: RawSkill[];
};

const skillImages = [brackets, backend, tools, care];

const hydrateSkillsMiddleware = (skills: RawSkill[]) =>
  skills.map((skill: RawSkill, index: number) => ({
    ...skill,
    image: skillImages[index],
  }));

const Skill = (skill: HydratedSkill, key: number) => (
  <div key={key} id="main-skill">
    <img
      id="unicoder"
      src={skill.image}
      alt={skill.title}
      className="skill-img"
    />
    <h3>{skill.title}</h3>
    <ul id="specific-skills">
      {skill.items.map((item: string, index: number) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const FrontPage = ({ frontPage }: { frontPage: FrontPage }) => {
  const { me } = frontPage;
  const hydratedSkills: HydratedSkill[] = hydrateSkillsMiddleware(
    frontPage.skills,
  );

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
        {hydratedSkills.map((skill: HydratedSkill, index: number) =>
          Skill(skill, index),
        )}
      </div>
    </motion.div>
  );
};

export default FrontPage;
