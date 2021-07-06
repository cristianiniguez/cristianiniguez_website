import { FaLaptopCode, FaExternalLinkAlt } from 'react-icons/fa';
import classNames from 'classnames';

import styles from '../../styles/components/sections/About.module.scss';

const About = () => {
  return (
    <section id='about' className={classNames(styles.about, 'section section--light')}>
      <div className={classNames(styles.about__container, 'container')}>
        <div className={styles['about__img-container']}>
          <FaLaptopCode className={styles.about__img} />
        </div>
        <div className={styles.about__main}>
          <h2 className='section__title'>Sobre mí</h2>
          <p>
            Soy un Desarrollador Web Junior con pasión por la tecnología y el software 👨‍💻.
            Actualmente estoy estudiando desarrollo web en Platzi 🌱. Mi objetivo es especializarme
            como Fullstack Developer y desarrollar aplicaciones multiplataforma con tecnologia web
            💪.
          </p>
          <a className={styles.about__cv} href='/docs/cristian-iniguez-cv.pdf' target='_blank'>
            Ver mi CV <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
