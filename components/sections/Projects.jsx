import { FormattedMessage } from 'react-intl';
import Fade from 'react-reveal/Fade';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiSass,
  SiElectron,
  SiBootstrap,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiNodedotjs,
} from 'react-icons/si';
import classNames from 'classnames';

import styles from '../../styles/components/sections/Projects.module.scss';
import ExternalLink from '../ExternalLink';
import Image from 'next/image';

const projects = [
  {
    id: '01',
    name: 'Tu Solucionario de Matemáticas',
    technologies: [{ name: 'React', icon: SiReact }],
    links: {
      page: 'https://tu-solucionario-de-matematicas.web.app',
      repo: 'https://github.com/cristianiniguez/tu_solucionario_de_matematicas',
      image: {
        src: 'https://github.com/cristianiniguez/tu_solucionario_de_matematicas/raw/master/screenshot.png',
        width: 460,
        height: 500,
      },
    },
  },
  {
    id: '02',
    name: 'SaitoLab Inventory',
    technologies: [
      { name: 'Electron', icon: SiElectron },
      { name: 'MySQL', icon: SiMysql },
    ],
    links: {
      repo: 'https://github.com/cristianiniguez/saitolab-inventory',
      image: {
        src: 'https://github.com/cristianiniguez/saitolab-inventory/raw/master/screenshots/main-window.png',
        width: 460,
        height: 245,
      },
    },
  },
  {
    id: '03',
    name: 'Platzi Web Challenge',
    technologies: [
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss3 },
      { name: 'JavaScript', icon: SiJavascript },
    ],
    links: {
      page: 'https://cristianiniguez.github.io/platziwebchallenge',
      repo: 'https://github.com/cristianiniguez/platziwebchallenge',
      image: {
        src: 'https://github.com/cristianiniguez/platziwebchallenge/raw/master/screenshot.png',
        width: 460,
        height: 342,
      },
    },
  },
  {
    id: '04',
    name: 'SaitoLab Notes',
    technologies: [
      { name: 'React', icon: SiReact },
      { name: 'Bootstrap', icon: SiBootstrap },
      { name: 'Node JS (Express y Passport)', icon: SiNodedotjs },
      { name: 'MongoDB', icon: SiMongodb },
    ],
    links: {
      page: 'https://saitolab-notes.vercel.app',
      repo: 'https://github.com/cristianiniguez/saitolab_notes',
      image: {
        src: 'https://github.com/cristianiniguez/saitolab_notes/raw/main/screenshot.png',
        width: 460,
        height: 238,
      },
    },
  },
  {
    id: '05',
    name: 'Tu Solucionario de Programación',
    technologies: [
      { name: 'React', icon: SiReact },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Sass', icon: SiSass },
    ],
    links: {
      page: 'https://tusolucionariodeprogramacion.web.app',
      repo: 'https://github.com/cristianiniguez/tu_solucionario_de_programacion',
      image: {
        src: 'https://github.com/cristianiniguez/tu_solucionario_de_programacion/raw/main/screenshot.png',
        width: 460,
        height: 615,
      },
    },
  },
];

const Project = ({ n, id, name, technologies, links: { page, repo, image } }) => {
  return (
    <div className={styles.project}>
      <div className={styles.project__info}>
        <div className={styles.project__glass}>
          <h3 className={styles.project__title}>{name}</h3>
          <p className={styles.project__description}>
            <FormattedMessage id={`projects.${id}.desc`} />
          </p>
          <div className={styles.project__technologies}>
            {technologies.map((t, i) => (
              <t.icon key={i} title={t.name} />
            ))}
          </div>
          <div className={styles.project__links}>
            {page && (
              <ExternalLink href={page} className={styles.project__link}>
                <FormattedMessage id='projects.link.page' />
              </ExternalLink>
            )}
            {repo && (
              <ExternalLink href={repo} className={styles.project__link}>
                <FormattedMessage id='projects.link.repo' />
              </ExternalLink>
            )}
          </div>
        </div>
      </div>
      <Fade right={n % 2 === 0} left={n % 2 !== 0}>
        <div className={styles.project__img}>
          <Image {...image} alt={name} />
        </div>
      </Fade>
    </div>
  );
};

const Projects = () => {
  return (
    <section id='projects' className={classNames(styles.projects, 'section')}>
      <div className='container'>
        <h2 className='section__title'>
          <FormattedMessage id='projects.title' />
        </h2>
        <div className={styles.projects__grid}>
          {projects.map((p, i) => (
            <Project key={i} {...p} n={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
