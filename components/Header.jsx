import Link from 'next/link';
import classNames from 'classnames';

import Navbar from './Navbar';
import useScroll from '../hooks/useScroll';
import styles from '../styles/components/Header.module.scss';

const Header = () => {
  const scroll = useScroll();

  return (
    <header className={classNames(styles.header, { [styles['header--black']]: scroll > 100 })}>
      <Link href='/'>
        <a className={styles.header__link}>
          <p className={styles.header__logo}>CI</p>
        </a>
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
