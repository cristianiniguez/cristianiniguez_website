import Image from 'next/image';
import { useIntl, FormattedMessage } from 'react-intl';
import Fade from 'react-reveal/Fade';
import { FaGlobeAmericas } from 'react-icons/fa';
import Flag from 'react-world-flags';

import styles from '../../styles/components/sections/Hero.module.scss';

const Hero = () => {
  const { messages } = useIntl();

  return (
    <section className={styles.hero}>
      <Fade>
        <div className={styles.hero__img}>
          <Image src='/images/me.jpg' alt={messages['hero.image.alt']} width={250} height={250} />
        </div>
      </Fade>
      <div className={styles.hero__info}>
        <h1 className={styles.hero__name}>
          <span className={styles['hero__first-name']}>
            <FormattedMessage id='hero.firstname' />
          </span>{' '}
          <span className={styles['hero__last-name']}>
            <FormattedMessage id='hero.lastname' />
          </span>
        </h1>
        <p className={styles.hero__description}>
          <FormattedMessage id='hero.description' />
        </p>
        <p className={styles.hero__country}>
          <Flag code='BO' height={16} />
          <FormattedMessage id='hero.location' />
        </p>
      </div>
    </section>
  );
};

export default Hero;
