import { useIntl, FormattedMessage, FormattedDate } from 'react-intl';
import { FaCarSide } from 'react-icons/fa';
import classNames from 'classnames';

import styles from '../../styles/components/sections/Experience.module.scss';

const jobs = [
  {
    id: 'hexacorp',
    place: 'Hexacorp',
    icon: 'hexacorp.svg',
    from: new Date(2021, 1),
  },
];

const Job = ({ id, place, icon, from, to, index }) => {
  const intl = useIntl();
  const left = (100 * (index + 1)) / (jobs.length + 1);

  return (
    <div className={styles.job} style={{ left: `${left}%` }}>
      <div className={styles.job__container}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/images/jobs/${icon}`}
          alt={intl.formatMessage({ id: 'experience.icon.alt' }, { name: place })}
        />
        <div className={styles.job__time}>
          <p>
            {from && <FormattedDate value={from} year='numeric' month='long' />} -{' '}
            {to ? (
              <FormattedDate value={to} year='numeric' month='long' />
            ) : (
              <FormattedMessage id='experience.today' />
            )}
          </p>
        </div>
        <div className={styles.job__tooltip}>
          <div className={styles.job__info}>
            <h3>{place}</h3>
            <h4>
              <FormattedMessage id={`experience.${id}.title`} />
            </h4>
            <ul>
              {intl.messages[`experience.${id}.activities`].split('|').map((act, i) => (
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
        <h2 className='section__title'>
          <FormattedMessage id='experience.title' />
        </h2>
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
