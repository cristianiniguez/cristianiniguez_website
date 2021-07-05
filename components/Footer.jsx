import Link from 'next/link';

import styles from '../styles/components/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        ©{' '}
        <Link href='/'>
          <a>Cristian Iñiguez</a>
        </Link>{' '}
        · 2020
      </p>
    </footer>
  );
};

export default Footer;
