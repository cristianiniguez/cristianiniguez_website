import Fade from 'react-reveal/Fade';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodeDotJs,
  SiReact,
  SiTypescript,
  SiSass,
  SiElectron,
  SiBootstrap,
  SiMysql,
  SiMongodb,
  SiFirebase,
} from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa';
import classNames from 'classnames';

import styles from '../../styles/components/sections/Projects.module.scss';
import ExternalLink from '../ExternalLink';

const projects = [
  {
    name: 'Tu Solucionario de Matemáticas',
    description: 'Cursos gratis de matemáticas para estudiantes escolares y universitarios',
    technologies: [{ name: 'React', Icon: SiReact }],
    links: {
      page: 'https://tu-solucionario-de-matematicas.web.app',
      repo: 'https://github.com/cristianiniguez/tu_solucionario_de_matematicas',
      image:
        'https://github.com/cristianiniguez/tu_solucionario_de_matematicas/raw/master/screenshot.png',
    },
  },
  {
    name: 'SaitoLab Inventory',
    description: 'Sistema de gestión de inventario',
    technologies: [
      { name: 'Electron', Icon: SiElectron },
      { name: 'MySQL', Icon: SiMysql },
    ],
    links: {
      repo: 'https://github.com/cristianiniguez/saitolab-inventory',
      image:
        'https://github.com/cristianiniguez/saitolab-inventory/raw/master/screenshots/main-window.png',
    },
  },
  {
    name: 'Platzi Web Challenge',
    description: 'Retos de la Escuela de Desarrollo Web de Platzi',
    technologies: [
      { name: 'HTML', Icon: SiHtml5 },
      { name: 'CSS', Icon: SiCss3 },
      { name: 'JavaScript', Icon: SiJavascript },
    ],
    links: {
      page: 'https://cristianiniguez.github.io/platziwebchallenge',
      repo: 'https://github.com/cristianiniguez/platziwebchallenge',
      image: 'https://github.com/cristianiniguez/platziwebchallenge/raw/master/screenshot.png',
    },
  },
  {
    name: 'SaitoLab Notes',
    description: 'Aplicación de Notas en Markdown',
    technologies: [
      { name: 'React', Icon: SiReact },
      { name: 'Bootstrap', Icon: SiBootstrap },
      { name: 'Node JS (Express y Passport)', Icon: SiNodeDotJs },
      { name: 'MongoDB', Icon: SiMongodb },
    ],
    links: {
      page: 'https://saitolab-notes.vercel.app',
      repo: 'https://github.com/cristianiniguez/saitolab_notes',
      image: 'https://github.com/cristianiniguez/saitolab_notes/raw/main/screenshot.png',
    },
  },
  {
    name: 'Tu Solucionario de Progamación',
    description: 'Blogs de programación para todos',
    technologies: [
      { name: 'React', Icon: SiReact },
      { name: 'Firebase', Icon: SiFirebase },
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'Sass', Icon: SiSass },
    ],
    links: {
      page: 'https://tusolucionariodeprogramacion.web.app',
      repo: 'https://github.com/cristianiniguez/tu_solucionario_de_programacion',
      image:
        'https://github.com/cristianiniguez/tu_solucionario_de_programacion/raw/main/screenshot.png',
    },
  },
];

const Project = ({ n, name, description, technologies, links: { page, repo, image } }) => {
  return (
    <div className={styles.project}>
      <div className={styles.project__info}>
        <div className={styles.project__glass}>
          <h3 className={styles.project__title}>{name}</h3>
          <p className={styles.project__description}>{description}</p>
          <div className={styles.project__technologies}>
            {technologies.map((t, i) => (
              <t.Icon key={i} title={t.name} />
            ))}
          </div>
          <div className={styles.project__links}>
            {page && (
              <ExternalLink href={page} className={styles.project__link}>
                Link a la página
              </ExternalLink>
            )}
            {repo && (
              <ExternalLink href={repo} className={styles.project__link}>
                Link al repositorio
              </ExternalLink>
            )}
          </div>
        </div>
      </div>
      <Fade right={n % 2 === 0} left={n % 2 !== 0}>
        <div className={styles.project__img}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={name} />
        </div>
      </Fade>
    </div>
  );
};

const Projects = () => {
  return (
    <section id='projects' className={classNames(styles.projects, 'section')}>
      <div className='container'>
        <h2 className='section__title'>Mis proyectos</h2>
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
