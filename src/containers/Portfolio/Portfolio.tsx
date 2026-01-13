import { motion } from 'framer-motion';
import { PORTFOLIO_LINKS } from '../../constants';

import swift from '../../assets/swift-logo-big-500x500.png';
import light from '../../assets/light_box-logo.png';
import simple from '../../assets/simplefi-logo.png';

import './Portfolio.scss';

interface Image {
  image: string;
}

type RawProject = {
  title: string;
  stack: string;
  blurb: string;
};

type HydratedProject = {
  title: string;
  image: string;
  url: string;
  stack: string;
  blurb: string;
};

type Portfolio = {
  title: string;
  projects: RawProject[];
};

const projectImages: Image[] = [swift, light, simple].map((src) => ({
  image: src,
}));

const hydrateProjectsMiddleware = (projects: RawProject[]) =>
  projects.map((project: RawProject, index: number) => ({
    ...project,
    image: projectImages[index].image,
    url: PORTFOLIO_LINKS[index],
  }));

const Project = (project: HydratedProject, key: number) => (
  <div key={key} className="project">
    <img className="project-img" src={project.image} alt="placeholder" />
    <div className="project-text">
      <a href={project.url} rel="noreferrer" target="_blank">
        <h2>{project.title}</h2>
      </a>
      <p className="tech-stack">{project.stack}</p>
      <p className="description">{project.blurb}</p>
    </div>
  </div>
);

const Portfolio = ({ portfolio }: { portfolio: Portfolio }) => {
  const hydratedProjects = hydrateProjectsMiddleware(portfolio.projects);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="portfolio-container">
        <h1 className="title">{portfolio.title}</h1>
        <div className="portfolio-wrapper">
          {hydratedProjects.map((project: HydratedProject, index: number) =>
            Project(project, index),
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
