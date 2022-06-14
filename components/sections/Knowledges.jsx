import { FormattedMessage } from 'react-intl';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
  SiNodedotjs,
  SiReact,
  SiTypescript,
  SiSass,
  SiElectron,
  SiBootstrap,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiPython,
  SiNextdotjs,
  SiPostgresql,
} from 'react-icons/si';
import { FaServer, FaBrain, FaRegCircle } from 'react-icons/fa';
import classNames from 'classnames';

import styles from '../../styles/components/sections/Knowledges.module.scss';

const knowledges = {
  languages: [
    { name: 'HTML', icon: SiHtml5, starred: true },
    { name: 'CSS', icon: SiCss3, starred: true },
    { name: 'JavaScript', icon: SiJavascript, starred: true },
    { name: 'TypeScript', icon: SiTypescript, starred: true },
    { name: 'Sass', icon: SiSass, starred: true },
    { name: 'Python', icon: SiPython, starred: true },
  ],
  frameworks: [
    { name: 'NodeJS', icon: SiNodedotjs, starred: false },
    { name: 'React', icon: SiReact, starred: true },
    { name: 'Electron', icon: SiElectron, starred: true },
    { name: 'Bootstrap', icon: SiBootstrap, starred: false },
    { name: 'Express', icon: FaServer, starred: false },
    { name: 'Next', icon: SiNextdotjs, starred: true },
  ],
  databases: [
    { name: 'MySQL', icon: SiMysql, starred: false },
    { name: 'POstgreSQL', icon: SiPostgresql, starred: false },
    { name: 'MongoDB', icon: SiMongodb, starred: false },
    { name: 'Firebase', icon: SiFirebase, starred: false },
  ],
  others: [
    { name: 'Git', icon: SiGit, starred: true },
    { name: 'Odoo', icon: FaRegCircle, starred: true },
  ],
};

const Knowledge = ({ name, icon: Icon, starred }) => (
  <div className={classNames(styles.knowledge, { [styles['knowledge--star']]: starred })}>
    {Icon && <Icon />}
    <span>{name}</span>
  </div>
);

const KnowledgesGroup = ({ id }) => (
  <div className={styles.knowledges__group}>
    <h3>
      <FormattedMessage id={`knowledges.subtitle.${id}`} />
    </h3>
    <div>
      {knowledges[id].map((k) => (
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
          <h2 className='section__title'>
            <FormattedMessage id='knowledges.title' />
          </h2>
          <FaBrain />
        </div>
        <div className={styles.knowledges__grid}>
          <KnowledgesGroup id='languages' />
          <KnowledgesGroup id='frameworks' />
          <KnowledgesGroup id='databases' />
          <KnowledgesGroup id='others' />
        </div>
      </div>
    </section>
  );
};

export default Knowledges;
