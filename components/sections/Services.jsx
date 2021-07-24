import { FormattedMessage } from 'react-intl';
import {
  FaWindowRestore,
  FaBullhorn,
  FaGlobeAmericas,
  FaMobileAlt,
  FaTabletAlt,
  FaCheckSquare,
  FaDesktop,
  FaWindows,
  FaApple,
  FaLinux,
  FaDatabase,
  FaPalette,
  FaUser,
  FaNetworkWired,
} from 'react-icons/fa';
import classNames from 'classnames';

import styles from '../../styles/components/sections/Services.module.scss';

const services = [
  {
    id: '01',
    Icon: FaWindowRestore,
    details: [
      { label: '01', Icons: [FaBullhorn, FaGlobeAmericas] },
      { label: '02', Icons: [FaMobileAlt, FaTabletAlt] },
      { label: '03', Icons: [FaCheckSquare] },
    ],
  },
  {
    id: '02',
    Icon: FaDesktop,
    details: [
      { label: '01', Icons: [FaWindows, FaApple, FaLinux] },
      { label: '02', Icons: [FaDatabase] },
      { label: '03', Icons: [FaPalette] },
    ],
  },
  {
    id: '03',
    Icon: FaDatabase,
    details: [
      { label: '01', Icons: [FaUser] },
      { label: '02', Icons: [FaDatabase] },
      { label: '03', Icons: [FaNetworkWired] },
    ],
  },
];

const Service = ({ id, Icon, details }) => (
  <article className={styles.service}>
    <header className={styles.service__header}>
      <Icon />
      <h3 className={styles.service__title}>
        <FormattedMessage id={`services.${id}.title`} />
      </h3>
    </header>
    <main className={styles.service__main}>
      {details.map(({ label, Icons }, detail_i) => (
        <p key={detail_i} className={styles.service__detail}>
          {Icons.map((I, icon_i) => (
            <I key={icon_i} />
          ))}
          <span>
            <FormattedMessage id={`services.${id}.description.${label}`} />
          </span>
        </p>
      ))}
    </main>
  </article>
);

const Services = () => {
  return (
    <section id='services' className={classNames(styles.services, 'section section--light')}>
      <div className='container'>
        <h2 className='section__title'>
          <FormattedMessage id='services.title' />
        </h2>
        <div className={styles.services__container}>
          {services.map((s, i) => (
            <Service key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
