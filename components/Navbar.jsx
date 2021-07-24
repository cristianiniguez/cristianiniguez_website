import NavMenu from './NavMenu';
import NavLang from './NavLang';
import styles from '../styles/components/Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <NavMenu />
      <NavLang />
    </nav>
  );
};

export default Navbar;
