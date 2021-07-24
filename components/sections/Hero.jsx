import { useIntl, FormattedMessage } from 'react-intl';
import Fade from 'react-reveal/Fade';
import { FaGlobeAmericas } from 'react-icons/fa';

import styles from '../../styles/components/sections/Hero.module.scss';

const Hero = () => {
  const { messages } = useIntl();

  return (
    <section className={styles.hero}>
      <Fade>
        <div className={styles.hero__img}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src='/images/me.jpg' alt={messages['hero.image.alt']} />
        </div>
      </Fade>
      <div className={styles.hero__info}>
        <h1 className={styles.hero__name}>
          <span className={styles['hero__first-name']}>
            <FormattedMessage id='hero.firstname' />
          </span>{' '}
          <span className={styles['hero__last-name']}>
            <FormattedMessage id='hero.lastname' />
          </span>{' '}
          ⚡
        </h1>
        <p className={styles.hero__description}>
          <FormattedMessage id='hero.description' />
        </p>
        <p className={styles.hero__country}>
          <FaGlobeAmericas />
          <FormattedMessage id='hero.location' />
        </p>
      </div>
    </section>
  );
};

export default Hero;
