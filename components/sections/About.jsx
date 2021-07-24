import { useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';
import { FaLaptopCode, FaExternalLinkAlt } from 'react-icons/fa';
import classNames from 'classnames';

import styles from '../../styles/components/sections/About.module.scss';

const About = () => {
  const { locale } = useRouter();

  return (
    <section id='about' className={classNames(styles.about, 'section section--light')}>
      <div className={classNames(styles.about__container, 'container')}>
        <div className={styles['about__img-container']}>
          <FaLaptopCode className={styles.about__img} />
        </div>
        <div className={styles.about__main}>
          <h2 className='section__title'>
            <FormattedMessage id='about.title' />
          </h2>
          <p>
            <FormattedMessage id='about.description' />
          </p>
          <a
            className={styles.about__cv}
            href={`/docs/${locale}/cristian-iniguez-cv.pdf`}
            target='_blank'
            rel='noreferrer'
          >
            <FormattedMessage id='about.cv' />
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
