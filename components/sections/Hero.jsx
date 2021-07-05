import Fade from 'react-reveal/Fade';
import { FaGlobeAmericas } from 'react-icons/fa';

import styles from '../../styles/components/sections/Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Fade>
        <div className={styles.hero__img}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src='/images/me.jpg' alt='Foto de Cristian Iñiguez' />
        </div>
      </Fade>
      <div className={styles.hero__info}>
        <h1 className={styles.hero__name}>
          <span className={styles['hero__first-name']}>Cristian</span>{' '}
          <span className={styles['hero__last-name']}>Iñiguez</span> ⚡
        </h1>
        <p className={styles.hero__description}>Junior Web Developer</p>
        <p className={styles.hero__country}>
          <FaGlobeAmericas /> Santa Cruz - Bolivia
        </p>
      </div>
    </section>
  );
};

export default Hero;
