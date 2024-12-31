import Link from 'next/link';
import classNames from 'classnames';

import Navbar from './Navbar';
import useScroll from '../hooks/useScroll';
import styles from '../styles/components/Header.module.scss';

const Header = () => {
  const scroll = useScroll();

  return (
    <header className={classNames(styles.header, { [styles['header--black']]: scroll > 100 })}>
      <Link className={styles.header__link} href='/'>
        <p className={styles.header__logo}>CI</p>
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
