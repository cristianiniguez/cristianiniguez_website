import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
  SiNodeDotJs,
  SiReact,
  SiTypescript,
  SiSass,
  SiElectron,
  SiBootstrap,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiPython,
  SiNextDotJs,
  SiPostgresql,
} from 'react-icons/si';
import { FaServer, FaBrain, FaRegCircle } from 'react-icons/fa';
import classNames from 'classnames';

import styles from '../../styles/components/sections/Knowledges.module.scss';

const knowledges = {
  languages: [
    { name: 'HTML', Icon: SiHtml5, starred: true },
    { name: 'CSS', Icon: SiCss3, starred: true },
    { name: 'JavaScript', Icon: SiJavascript, starred: true },
    { name: 'TypeScript', Icon: SiTypescript, starred: true },
    { name: 'Sass', Icon: SiSass, starred: true },
    { name: 'Python', Icon: SiPython, starred: true },
  ],
  frameworks: [
    { name: 'NodeJS', Icon: SiNodeDotJs, starred: false },
    { name: 'React', Icon: SiReact, starred: true },
    { name: 'Electron', Icon: SiElectron, starred: true },
    { name: 'Bootstrap', Icon: SiBootstrap, starred: false },
    { name: 'Express', Icon: FaServer, starred: false },
    { name: 'Next', Icon: SiNextDotJs, starred: true },
  ],
  databases: [
    { name: 'MySQL', Icon: SiMysql, starred: false },
    { name: 'POstgreSQL', Icon: SiPostgresql, starred: false },
    { name: 'MongoDB', Icon: SiMongodb, starred: false },
    { name: 'Firebase', Icon: SiFirebase, starred: false },
  ],
  others: [
    { name: 'Git', Icon: SiGit, starred: true },
    { name: 'Odoo', Icon: FaRegCircle, starred: true },
  ],
};

const Knowledge = ({ name, Icon, starred }) => (
  <div className={classNames(styles.knowledge, { [styles['knowledge--star']]: starred })}>
    <Icon />
    <span>{name}</span>
  </div>
);

const KnowledgesGroup = ({ label, knowledges }) => (
  <div className={styles.knowledges__group}>
    <h3>{label}</h3>
    <div>
      {knowledges.map((k) => (
        <Knowledge key={k.name} {...k} />
      ))}
    </div>
  </div>
);

const Knowledges = () => {
  return (
    <section className={classNames(styles.knowledges, 'section')}>
      <div className={classNames(styles.knowledges__container, 'container')}>
        <div className={styles.knowledges__title}>
          <h2 className='section__title'>Mis Conocimientos</h2>
          <FaBrain />
        </div>
        <div className={styles.knowledges__grid}>
          <KnowledgesGroup label='Lenguajes' knowledges={knowledges.languages} />
          <KnowledgesGroup label='Frameworks' knowledges={knowledges.frameworks} />
          <KnowledgesGroup label='Bases de Datos' knowledges={knowledges.databases} />
          <KnowledgesGroup label='Otras tecnologías' knowledges={knowledges.others} />
        </div>
      </div>
    </section>
  );
};

export default Knowledges;
