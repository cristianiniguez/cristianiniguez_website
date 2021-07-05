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
} from 'react-icons/si';
import { FaServer, FaBrain } from 'react-icons/fa';
import classNames from 'classnames';

import styles from '../../styles/components/sections/Knowledges.module.scss';

const knowledges = [
  {
    name: 'HTML',
    Icon: SiHtml5,
    starred: true,
  },
  {
    name: 'CSS',
    Icon: SiCss3,
    starred: true,
  },
  {
    name: 'JavaScript',
    Icon: SiJavascript,
    starred: true,
  },
  {
    name: 'Git',
    Icon: SiGit,
    starred: true,
  },
  {
    name: 'NodeJS',
    Icon: SiNodeDotJs,
    starred: false,
  },
  {
    name: 'React',
    Icon: SiReact,
    starred: true,
  },
  {
    name: 'TypeScript',
    Icon: SiTypescript,
    starred: true,
  },
  {
    name: 'Sass',
    Icon: SiSass,
    starred: true,
  },
  {
    name: 'Electron',
    Icon: SiElectron,
    starred: true,
  },
  {
    name: 'Bootstrap',
    Icon: SiBootstrap,
    starred: false,
  },
  {
    name: 'Express',
    Icon: FaServer,
    starred: false,
  },
  {
    name: 'MySQL',
    Icon: SiMysql,
    starred: false,
  },
  {
    name: 'MongoDB',
    Icon: SiMongodb,
    starred: false,
  },
  {
    name: 'Firebase',
    Icon: SiFirebase,
    starred: false,
  },
];

const Knowledge = ({ name, Icon, starred }) => (
  <div className={classNames(styles.knowledge, { [styles['knowledge--star']]: starred })}>
    <Icon />
    <span>{name}</span>
  </div>
);

const Knowledges = () => {
  return (
    <section className={classNames(styles.knowledges, 'section')}>
      {/* <div className='container knowledges__container'> */}
      <div className={classNames(styles.knowledges__container, 'container')}>
        <div className={styles.knowledges__title}>
          <h2 className='section__title'>Mis Conocimientos</h2>
          <FaBrain />
        </div>
        <div className={styles.knowledges__grid}>
          {knowledges.map((k) => (
            <Knowledge key={k.name} {...k} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Knowledges;
