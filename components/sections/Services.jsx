import classNames from 'classnames';
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

import styles from '../../styles/components/sections/Services.module.scss';

const services = [
  {
    title: 'Páginas, Sitios y Aplicaciones Web',
    Icon: FaWindowRestore,
    details: [
      {
        label: 'Refleja tus ideas',
        Icons: [FaBullhorn, FaGlobeAmericas],
      },
      {
        label: 'Responsive Design',
        Icons: [FaMobileAlt, FaTabletAlt],
      },
      {
        label: 'Buenas funcionalidades',
        Icons: [FaCheckSquare],
      },
    ],
  },
  {
    title: 'Aplicaciones de Escritorio',
    Icon: FaDesktop,
    details: [
      {
        label: 'Software multiplataforma',
        Icons: [FaWindows, FaApple, FaLinux],
      },
      {
        label: 'Manejo de Base de Datos',
        Icons: [FaDatabase],
      },
      {
        label: 'Diseño Amigable',
        Icons: [FaPalette],
      },
    ],
  },
  {
    title: 'Desarrolo de APIs',
    Icon: FaDatabase,
    details: [
      {
        label: 'Autenticación',
        Icons: [FaUser],
      },
      {
        label: 'Manejo de Base de Datos',
        Icons: [FaDatabase],
      },
      {
        label: 'Integración con el Frontend',
        Icons: [FaNetworkWired],
      },
    ],
  },
];

const Service = ({ title, Icon, details }) => (
  <article className={styles.service}>
    <div className={styles.service__front}>
      <h3 className={styles.service__title}>
        <Icon /> {title}
      </h3>
    </div>
    <div className={styles.service__back}>
      {details.map(({ label, Icons }, detail_i) => (
        <p key={detail_i} className={styles.service__detail}>
          {Icons.map((I, icon_i) => (
            <I key={icon_i} />
          ))}
          <span>{label}</span>
        </p>
      ))}
    </div>
  </article>
);

const Services = () => {
  return (
    // <section id='services' className='services section section--light'>
    <section id='services' className={classNames(styles.services, 'section section--light')}>
      <div className='container'>
        <h2 className='section__title'>Mis Servicios</h2>
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
