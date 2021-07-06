import { FaCarSide } from 'react-icons/fa';
import classNames from 'classnames';

import styles from '../../styles/components/sections/Experience.module.scss';

const jobs = [
  {
    place: 'Hexacorp',
    icon: 'hexacorp.svg',
    title: 'Desarrollador de Aplicaciones',
    activities: [
      'Desarrollo del sitio web de la empresa',
      'Desarrollo de módulos de Odoo',
      'Automatizaciones en general',
      'Sitios para la empresa',
    ],
    from: 'Enero 2021',
  },
];

const Job = ({ place, icon, title, activities, from, to, index }) => {
  const left = (100 * (index + 1)) / (jobs.length + 1);

  return (
    <div className={styles.job} style={{ left: `${left}%` }}>
      <div className={styles.job__container}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/images/jobs/${icon}`} alt={`Icono de ${place}`} />
        <div className={styles.job__time}>
          <p>
            {from} - {to || 'Hoy'}
          </p>
        </div>
        <div className={styles.job__tooltip}>
          <div className={styles.job__info}>
            <h3>{place}</h3>
            <h4>{title}</h4>
            <ul>
              {activities.map((act, i) => (
                <li key={i}>{act}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id='experience' className={classNames(styles.experience, 'section section--light')}>
      <div className='container'>
        <h2 className='section__title'>Mi Experiencia</h2>
        <div className={styles.experience__timeline}>
          <div className={styles.experience__pointer}>
            <FaCarSide />
          </div>
          {jobs.map((job, i) => (
            <Job {...job} key={i} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;