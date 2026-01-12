import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ABOUT_LINKS, ROUTES } from '../../constants';

import './About.scss';

import inariPic from '../../assets/inari.jpg';

import labels from '../../master.json';

interface Link {
  label: string;
  url: string;
}

type HeroPanel = {
  image: string;
  title: string;
  blurb: string;
};

type BlurbBlock = {
  blurb: string;
  externalLink?: Link;
  route?: Link;
};

const hasLinks = (blurbBlock: BlurbBlock) =>
  Boolean(blurbBlock?.externalLink || blurbBlock?.route);

const LinkSubSection = (external?: Link, route?: Link) => (
  <div>
    {external && (
      <a href={external.url} rel="noreferrer" target="_blank">
        {external.label}
      </a>
    )}
    {route && <Link to={route.url}>{route.label}</Link>}
  </div>
);

const About = () => {
  const hero: HeroPanel = {
    image: inariPic,
    title: labels.about.title,
    blurb: labels.about.blurbs[0],
  };

  const journey: BlurbBlock = {
    blurb: labels.about.blurbs[1],
  };

  const current: BlurbBlock = {
    blurb: labels.about.blurbs[2],
    externalLink: {
      label: labels.about.links.labels.current,
      url: ABOUT_LINKS.CURRENT,
    },
    route: {
      label: labels.about.routes.labels.portfolio,
      url: ROUTES.PORTFOLIO,
    },
  };

  const pastLife: BlurbBlock = {
    blurb: labels.about.blurbs[3],
    externalLink: {
      label: labels.about.links.labels.pastLife,
      url: ABOUT_LINKS.PASTLIFE,
    },
  };

  const elevatorPitch: BlurbBlock = {
    blurb: labels.about.blurbs[4],
  };

  const background: BlurbBlock = {
    blurb: labels.about.blurbs[5],
    externalLink: {
      label: labels.about.links.labels.photoBlog,
      url: ABOUT_LINKS.PHOTOBLOG,
    },
  };

  const contact: BlurbBlock = {
    blurb: labels.about.blurbs[6],
    externalLink: {
      label: labels.about.links.labels.mailTo,
      url: ABOUT_LINKS.MAILTO,
    },
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="about-container">
        <div className="pic-and-hello">
          <img className="about-image" src={hero.image} alt="placeholder"></img>
          <div className="intro-body-text">
            <h2 className="intro-title" style={{ textAlign: 'center' }}>
              {hero.title}
            </h2>
            <p id="text">{hero.blurb}</p>
          </div>
        </div>
        <div className="about-description">
          <p id="text">{journey.blurb}</p>
          <p id="text">{current.blurb}</p>
          {hasLinks(current) &&
            LinkSubSection(current.externalLink, current.route)}
          <p id="text">{pastLife.blurb}</p>
          {hasLinks(pastLife) && LinkSubSection(pastLife.externalLink)}
          <p id="text">{elevatorPitch.blurb}</p>
          <p id="text">{background.blurb}</p>
          {hasLinks(background) && LinkSubSection(background.externalLink)}
          <p id="text">{contact.blurb}</p>
          {hasLinks(contact) && LinkSubSection(contact.externalLink)}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
