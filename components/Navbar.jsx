import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import classNames from 'classnames';

import styles from '../styles/components/Navbar.module.scss';

const items = [
  { label: 'Inicio', href: '#' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
];

const Navbar = () => {
  const [shown, setShown] = useState(false);

  return (
    <nav className={styles.nav}>
      <ul
        id='nav-menu'
        className={classNames('reseted', styles.nav__menu, { [styles['nav__menu--shown']]: shown })}
      >
        {items.map(({ label, href }, i) => (
          <li key={i} onClick={() => setShown(false)}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
      <button className={styles['nav__menu-btn']} onClick={() => setShown(!shown)}>
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
