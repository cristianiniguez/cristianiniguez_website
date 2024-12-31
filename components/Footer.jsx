import Link from 'next/link';

import styles from '../styles/components/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        ©{' '}
        <Link href='/'>Cristian Iñiguez</Link>{' '}
        · 2020
      </p>
    </footer>
  );
};

export default Footer;
